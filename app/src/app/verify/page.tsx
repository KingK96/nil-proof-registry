"use client";

import { useMemo, useState } from "react";
import { ethers } from "ethers";
import { getReadContract } from "../../lib/registry";

function shortHash(h: string) {
  if (!h) return "—";
  return `${h.slice(0, 10)}…${h.slice(-8)}`;
}

export default function VerifyPage() {
  const [dealId, setDealId] = useState<string>("1");
  const [file, setFile] = useState<File | null>(null);

  const [status, setStatus] = useState<string>("");
  const [fileHash, setFileHash] = useState<string>("");
  const [chainHash, setChainHash] = useState<string>("");

  const statusClass = useMemo(() => {
    if (status.startsWith("✅")) return "status statusOk";
    if (status.startsWith("❌")) return "status statusErr";
    return "status";
  }, [status]);

  async function handleVerify() {
    try {
      setStatus("");
      setFileHash("");
      setChainHash("");

      const idNum = Number(dealId);
      if (!Number.isInteger(idNum) || idNum <= 0) throw new Error("Enter a valid dealId (e.g., 1)");
      if (!file) throw new Error("Upload the contract file to verify");

      setStatus("Hashing uploaded file…");
      const bytes = new Uint8Array(await file.arrayBuffer());
      const computed = ethers.keccak256(bytes);
      setFileHash(computed);

      setStatus("Fetching on-chain hash…");
      const contract = getReadContract();

      // Your contract has public mapping + getDeal; either works.
      // getDeal returns a struct; 'contractHash' is one field.
      const deal = await contract.getDeal(idNum);
      const onChain = deal.contractHash as string;
      setChainHash(onChain);

      if (!onChain || onChain === ethers.ZeroHash) {
        throw new Error("No hash found for that dealId");
      }

      if (computed.toLowerCase() === onChain.toLowerCase()) {
        setStatus("✅ Verified: file matches on-chain proof");
      } else {
        setStatus("❌ Not verified: file hash does NOT match on-chain proof");
      }
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
            <div style={{ fontSize: 12, color: "var(--muted2)" }}>Verify contract integrity</div>
          </div>
        </div>
        <div className="navRight">
          <div className="pill">Verify</div>
          <div className="pill">Localhost 8545</div>
        </div>
      </div>

      <section className="hero">
        <div className="card">
          <h1 className="hTitle">
            Verify a contract’s <span>integrity</span>.
          </h1>
          <p className="hSub">
            Upload the file you want to validate. We compute its keccak256 hash locally and compare it to the on-chain hash
            recorded for the selected deal.
          </p>

          <div
            className="card"
            style={{
              padding: 16,
              background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
            }}
          >
            <div className="cardHeader">
              <div>
                <p className="cardTitle">Verify Proof</p>
                <p className="cardHint">Enter a dealId and upload the contract file.</p>
              </div>
              <div className="pill">MVP</div>
            </div>

            <div className="form">
              <div className="row">
                <label className="label">
                  Deal ID
                  <input
                    className="field"
                    value={dealId}
                    onChange={(e) => setDealId(e.target.value)}
                    inputMode="numeric"
                    placeholder="1"
                  />
                </label>

                <label className="label">
                  Contract file
                  <input className="field" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>

              <button className="btn" onClick={handleVerify} disabled={!dealId || !file}>
                Verify file
                <span style={{ color: "var(--muted)" }}>→</span>
              </button>

              <div className={statusClass}>{status || "Tip: Use dealId = 1 and upload the same file used during creation."}</div>
            </div>
          </div>
        </div>

        <aside className="side">
          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">Computed file hash</div>
              <div className="kpiValue">
                <strong>{shortHash(fileHash)}</strong>
              </div>
            </div>
            <div className="small">This is computed locally from the uploaded file. Nothing is uploaded to a server.</div>
          </div>

          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">On-chain hash</div>
              <div className="kpiValue">
                <strong>{shortHash(chainHash)}</strong>
              </div>
            </div>
            <div className="small">This is the tamper-evident proof recorded when the deal was anchored.</div>
          </div>

          <div className="kpi">
            <div className="kpiTop">
              <div className="kpiLabel">Result</div>
              <div className="kpiValue">Match / Mismatch</div>
            </div>
            <div className="small">If hashes match, the file is identical to what was originally anchored.</div>
          </div>
        </aside>
      </section>
    </div>
  );
}
