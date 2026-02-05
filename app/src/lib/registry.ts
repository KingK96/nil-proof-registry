// app/src/lib/registry.ts
import { ethers } from "ethers";
import abi from "./NILDealRegistry.abi.json";

const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL!;
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export function getReadContract() {
  if (!RPC_URL) throw new Error("Missing NEXT_PUBLIC_RPC_URL");
  if (!CONTRACT_ADDRESS) throw new Error("Missing NEXT_PUBLIC_CONTRACT_ADDRESS");

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
}

export async function getWriteContract() {
  const w = window as any;
  if (!w.ethereum) throw new Error("MetaMask not found");

  const provider = new ethers.BrowserProvider(w.ethereum);
  const network = await provider.getNetwork();

  if (network.chainId !== 31337n) {
    throw new Error("Please switch MetaMask to Localhost 8545");
  }

  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
}
