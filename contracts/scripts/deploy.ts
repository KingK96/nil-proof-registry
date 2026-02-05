import hre from "hardhat";

async function main() {
  console.log("Deploying Counter contract...");

  const counter = await hre.viem.deployContract("Counter");

  console.log(`Counter deployed to: ${counter.address}`);
  
  // Wait for a few block confirmations (optional but recommended for testnets)
  const publicClient = await hre.viem.getPublicClient();
  const deploymentReceipt = await publicClient.getTransactionReceipt({
    hash: counter.deploymentTransaction()!.hash,
  });
  
  console.log(`Deployment confirmed in block: ${deploymentReceipt.blockNumber}`);
  console.log(`Gas used: ${deploymentReceipt.gasUsed}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
