const { ethers } = require('hardhat');
const fs = require('fs');

const OrcaProtocol = require('../artifacts/contracts/OrcaProtocol.sol/OrcaProtocol.json');
const OrcaMemberToken = require('../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json');
const OrcaToken = require('../artifacts/contracts/OrcaToken.sol/OrcaToken.json');
const OrcaPodManager = require('../artifacts/contracts/OrcaPodManager.sol/OrcaPodManager.json');
const OrcaVoteManager = require('../artifacts/contracts/OrcaVoteManager.sol/OrcaVoteManager.json');

const { ContractFactory, provider } = ethers;

const signer = provider.getSigner();

async function main() {
  const orcaTokenFactory = new ContractFactory(OrcaToken.abi, OrcaToken.bytecode, signer);
  const orcaMemberTokenFactory = new ContractFactory(
    OrcaMemberToken.abi,
    OrcaMemberToken.bytecode,
    signer,
  );
  const orcaProtocolFactory = new ContractFactory(OrcaProtocol.abi, OrcaProtocol.bytecode, signer);

  await orcaTokenFactory.deploy();
  const orcaMemberToken = await orcaMemberTokenFactory.deploy();
  const orcaProtocol = await orcaProtocolFactory.deploy(orcaMemberToken.address);

  // Grab pod manager address from the constructor event
  // const [podEvent] = await orcaProtocol.queryFilter('PodManagerAddress');
  // const orcaPodManager = new ethers.Contract(podEvent.args[0], OrcaPodManager.abi, signer);

  // Grab pod manager address from the constructor event
  // const [voteEvent] = await orcaProtocol.queryFilter('VoteManagerAddress');
  // const orcaVoteManager = new ethers.Contract(voteEvent.args[0], OrcaVoteManager.abi, signer);

  // Write deployed contract addresses to the contract artifacts
  fs.writeFileSync(
    `${__dirname}/../artifacts/contracts/OrcaProtocol.sol/OrcaProtocol.json`,
    JSON.stringify(
      {
        ...OrcaProtocol,
        address: orcaProtocol.address,
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    `${__dirname}/../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json`,
    JSON.stringify(
      {
        ...OrcaMemberToken,
        address: orcaMemberToken.address,
      },
      null,
      2,
    ),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
