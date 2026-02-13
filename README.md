# NIL Proof Registry (MVP)

A minimal, integrity-first system for anchoring NIL contract proofs on-chain — designed for schools, collectives, and NIL platforms.  
Brands don’t need crypto wallets. The blockchain acts as a **public notary** for tamper-evident verification.

---

## Why this exists

NIL agreements are often handled through PDFs, email threads, and disconnected e-sign workflows. That creates two problems:

1. **Integrity risk** — contract files can be altered after the fact (intentionally or accidentally).
2. **Audit friction** — compliance teams need a simple way to validate “this is the same document that was originally executed.”

This MVP solves that by anchoring a contract’s **keccak256 hash** on-chain and enabling anyone to later verify a file matches the original proof.

---

## What it does

### Anchor Proof (Create)
- User enters: Athlete + School + Organization identity info (no brand wallet required)
- User uploads a contract file (PDF, DOCX, etc.)
- App computes `keccak256(file)` locally in the browser
- App writes an on-chain record storing:
  - `contractHash` (bytes32)
  - metadata identifiers (hashed)
  - timestamps
- Returns:
  - `dealId`
  - transaction hash

### Verify Integrity (Verify)
- User enters a `dealId`
- Uploads a contract file
- App hashes the file locally
- App fetches the on-chain `contractHash`
- Displays:
  - ✅ Verified (match)
  - ❌ Not verified (mismatch)

---

## Architecture (MVP)

**Frontend**
- Next.js (App Router)
- ethers v6
- Local hashing in-browser
- Black / Old Gold / Grey UI

**Smart Contract**
- Hardhat + Solidity
- `NILDealRegistry` stores hash + metadata and emits `DealRegistered`

**Network**
- Local Hardhat chain (localhost:8545)

---

## Demo flow

1. Go to `/create`
2. Fill in identity info + upload a file
3. Click **Anchor proof**
4. Receive `dealId` + `tx hash`
5. Go to `/verify`
6. Enter that `dealId`, upload the same file
7. See ✅ Verified

Upload a different file → ❌ Not verified.

---

## Local Setup

### Prerequisites
- Node.js 18+
- MetaMask

### 1) Install dependencies

```bash
# contracts
cd contracts
npm install

# app
cd ../app
npm install

### 2) Start blockchain in Terminal A

cd contracts
npx hardhat node

### 2) Deploy contract in Terminal B
cd contracts
npx hardhat console --network localhost

Inside terminal:

const Factory = await ethers.getContractFactory("NILDealRegistry");
const c = await Factory.deploy();
await c.waitForDeployment();
await c.getAddress();

### 4) Place this in your .env/local file

NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYOUR_DEPLOYED_ADDRESS

### 5) Run the app
cd app
npm run dev




