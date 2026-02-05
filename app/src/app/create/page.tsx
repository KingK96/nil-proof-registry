"use client";

import { useMemo, useState } from "react";
import { ethers } from "ethers";
import { getSigner, getWriteContract } from "../../lib/registry";

function norm(s: string) {
  return s.trim().toLowerCase();
}

function shortHash(h: string) {
  if (!h) return "—";
  return `${h.slice(0, 10)}…${h.slice(-8)}`;
}

export default function CreateDealPage() {
  const [athleteName, setAthleteName] = useState("");
  const [school, setSchool] = useState("");
  const [athleteEmail, setAthleteEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgDomain, setOrgDomain] = useState("");
  const [dealType, setDealType] = useState("NIL_PROOF_V1");
  const [file, setFile] = useState<File | null>(null);

  const [status, setStatus] = useState<string>("");
  const [lastTx, setLastTx] = useState<string>("");

  const canSubmit =
    athleteName.trim() &&
    school.trim() &&
    athleteEmail.trim() &&
    orgName.trim() &&
    file;

  const statusClass = useMemo(() => {
    if (status.startsWith("✅")) return "status statusOk";
    if (status.startsWith("❌")) return "status statusErr";
    return "status";
  }, [status]);

  async function handleAnchor() {
    try {
      setLastTx("");

      if (!file) throw new Error("Please upload a contract file");
      if (!athleteName.trim()) throw new Error("Athlete name is required");
      if (!school.trim()) throw new Error("School is required");
      if (!athleteEmail.trim()) throw new Error("Athlete email is required");
      if (!orgName.trim()) throw new Error("Organization name is required");

      // 1) Hash the contract file (integrity)
      setStatus("Hashing contract…");
      const bytes = new Uint8Array(await file.arrayBuffer());
      const contractHash = ethers.keccak256(bytes);

      // 2) Create privacy-preserving identity IDs (no wallets needed)
      const athleteId = ethers.keccak256(
        ethers.toUtf8Bytes(`athlete:${norm(athleteEmail)}|${norm(athleteName)}|${norm(school)}`)
      );

      const orgId = ethers.keccak256(
        ethers.toUtf8Bytes(`org:${norm(orgDomain || orgName)}|${norm(orgName)}`)
      );

      // 3) Who is anchoring the proof (school/NIL platform/agent)
      const signer = await getSigner();
      const registrar = await signer.getAddress();

      // 4) Write to chain using your existing contract signature
      // We set athlete & brand addresses to registrar (since we're not collecting wallets in this UX).
      const contract = await getWriteContract();

      const now = Math.floor(Date.now() / 1000);
      const end = now + 60 * 60 * 24 * 30;

      // Store IDs in contractURI for MVP (later: real metadata storage / encryption)
      const contractURI = `nil://local/proof?athleteId=${athleteId}&orgId=${orgId}&orgName=${encodeURIComponent(
        orgName
      )}&school=${encodeURIComponent(school)}`;

      setStatus("Simulating call…");
      await contract.registerDeal.staticCall(
        registrar,
        registrar,
        contractHash,
        contractURI,
        dealType,
        now,
        end
      );

      setStatus("Anchoring proof on-chain…");
      const tx = await contract.registerDeal(
        registrar,
        registrar,
        contractHash,
        contractURI,
        dealType,
        now,
        end
      );

      setLastTx(tx.hash);

      setStatus("Waiting for confirmation…");
      const receipt = await tx.wait();

      const event = receipt.logs.find((l: any) => l.fragment?.name === "DealRegistered");
      const dealId = event?.args?.dealId?.toString();

      setStatus(`✅ Proof anchored! dealId = ${dealId}`);
    } catch (e: any) {
      setStatus(`❌ ${e.message}`);
    }
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="brand">
          <div className="badge" />
          <div>
            <div style={{ fontWeight: 650 }}>NIL Proof Registry</div>
            <div style={{ fontSize: 12, color: "var(--muted2)" }}>
              Integrity-first contract anchoring (no brand wallet required)
            </div>
          </div>
        </div>
        <div className="navRight">
        </div>
      </div>

      <section className="hero">
        <div className="card">
          <h1 className="hTitle">
            Anchor NIL contracts with <span>tamper-evident proof</span>.
          </h1>
          <p className="hSub">
            The school/NIL platform anchors a transaction that records the contract’s hash + metadata IDs. Brands don’t need
            wallets — the chain is the public notary.
          </p>

          <div className="card" style={{ padding: 16, background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))" }}>
            <div className="cardHeader">
              <div>
                <p className="cardTitle">Create Proof Record</p>
                <p className="cardHint">Enter identities + upload the contract file. We hash locally before anchoring.</p>
              </div>
              <div className="pill">MVP</div>
            </div>

            <div className="form">
              <div className="row">
                <label className="label">
                  Athlete name
                  <input className="field" value={athleteName} onChange={(e) => setAthleteName(e.target.value)} />
                </label>
                <label className="label">
                  School
                  <input className="field" value={school} onChange={(e) => setSchool(e.target.value)} />
                </label>
              </div>

              <div className="row">
                <label className="label">
                  Athlete email
                  <input
                    className="field"
                    value={athleteEmail}
                    onChange={(e) => setAthleteEmail(e.target.value)}
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    placeholder="name@school.edu"
                  />
                </label>

                <label className="label">
                  Organization name
                  <input className="field" value={orgName} onChange={(e) => setOrgName(e.target.value)} placeholder="Brand / School / Collective" />
                </label>
              </div>

              <div className="row">
                <label className="label">
                  Organization domain (optional)
                  <input
                    className="field"
                    value={orgDomain}
                    onChange={(e) => setOrgDomain(e.target.value)}
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    placeholder="brand.com"
                  />
                </label>

                <label className="label">
                  Contract file
                  <input className="field" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>

              <label className="label">
                Record type
                <input className="field" value={dealType} onChange={(e) => setDealType(e.target.value)} />
              </label>

              <button className="btn" onClick={handleAnchor} disabled={!canSubmit}>
                Anchor proof
                <span style={{ color: "var(--muted)" }}>→</span>
              </button>

              <div className={statusClass}>
                {status || "Tip: The connected wallet is the Registrar (school/NIL platform/agent) submitting the proof."}
              </div>

              {lastTx ? (
                <div className="small" style={{ marginTop: 8 }}>
                  Tx hash: <span style={{ color: "var(--gold2)" }}>{lastTx}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className="side">
          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">Athlete ID</div>
              <div className="kpiValue"><strong>{shortHash(
                athleteEmail ? ethers.keccak256(ethers.toUtf8Bytes(`athlete:${norm(athleteEmail)}|${norm(athleteName)}|${norm(school)}`)) : ""
              )}</strong></div>
            </div>
            <div className="small">We hash identity inputs client-side for privacy. The chain stores the hash, not raw PII.</div>
          </div>

          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">Org ID</div>
              <div className="kpiValue"><strong>{shortHash(
                orgName ? ethers.keccak256(ethers.toUtf8Bytes(`org:${norm(orgDomain || orgName)}|${norm(orgName)}`)) : ""
              )}</strong></div>
            </div>
            <div className="small">Brands dont need wallets. The org is represented by a hashed identifier + optional domain.</div>
          </div>

          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">Integrity proof</div>
            </div>
            <div className="small">Any later change to the contract file produces a different hash, making tampering detectable.</div>
          </div>
        </aside>
      </section>
    </div>
  );
}

