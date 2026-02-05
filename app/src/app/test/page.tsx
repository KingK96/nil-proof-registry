"use client";

import { useEffect, useState } from "react";
import { getReadContract } from "../../lib/registry";

export default function TestPage() {
  const [nextDealId, setNextDealId] = useState<string>("loading...");

  useEffect(() => {
    (async () => {
      const c = getReadContract();
      const id = await c.nextDealId();
      setNextDealId(id.toString());
    })().catch((e) => setNextDealId(`error: ${e.message}`));
  }, []);

  return (
    <main>
      <h1>Contract Read Test</h1>
      <p>nextDealId: {nextDealId}</p>
    </main>
  );
}
