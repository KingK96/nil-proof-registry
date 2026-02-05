"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { getWriteContract } from "../../lib/registry";

export default function CreateDealPage() {
  const [athlete, setAthlete] = useState("");
  const [brand, setBrand] = useState("");
  const [dealType, setDealType] = useState("sponsorship");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  async function handleCreate() {
  try {

if (!ethers.isAddress(athlete)) {
  throw new Error("Invalid athlete address");
}

if (!ethers.isAddress(brand)) {
  throw new Error("Invalid brand address");
}
    if (!file) throw new Error("Please upload a contract file");

    setStatus("Hashing contract...");
    const bytes = new Uint8Array(await file.arrayBuffer());
    const contractHash = ethers.keccak256(bytes);

    const contract = await getWriteContract();

    const now = Math.floor(Date.now() / 1000);
    const end = now + 60 * 60 * 24 * 30; // +30 days

    setStatus("Simulating call...");
    await contract.registerDeal.staticCall(
      athlete,
      brand,
      contractHash,
      "nil://local/demo",
      dealType,
      now,
      end
    );

    setStatus("Sending transaction...");
    const tx = await contract.registerDeal(
      athlete,
      brand,
      contractHash,
      "nil://local/demo",
      dealType,
      now,
      end
    );

    setStatus("Waiting for confirmation...");
    const receipt = await tx.wait();

    const event = receipt.logs.find((l: any) => l.fragment?.name === "DealRegistered");
    const dealId = event?.args?.dealId?.toString();

    setStatus(`✅ Deal created! dealId = ${dealId}`);
  } catch (e: any) {
    setStatus(`❌ ${e.message}`);
  }
}


  return (
    <main>
      <h1>Create NIL Deal</h1>

      <label>
        Athlete Address
        <input value={athlete} onChange={(e) => setAthlete(e.target.value)} />
      </label>

      <br />

      <label>
        Brand Address
        <input value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>

      <br />

      <label>
        Deal Type
        <input value={dealType} onChange={(e) => setDealType(e.target.value)} />
      </label>

      <br />

      <label>
        Contract File
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      </label>

      <br />
      <br />

      <button onClick={handleCreate}>Create Deal</button>

      <p>{status}</p>
    </main>
  );
}
