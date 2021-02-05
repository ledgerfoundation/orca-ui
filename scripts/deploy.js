const { ethers } = require('hardhat');
const fs = require('fs');

const OrcaProtocol = require('../artifacts/contracts/OrcaProtocol.sol/OrcaProtocol.json');
const OrcaMemberToken = require('../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json');
const OrcaToken = require('../artifacts/contracts/OrcaToken.sol/OrcaToken.json');
const OrcaPodManager = require('../artifacts/contracts/OrcaPodManager.sol/OrcaPodManager.json');
const OrcaRulebook = require('../artifacts/contracts/OrcaRulebook.sol/OrcaRulebook.json');
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
  const orcaPodManagerFactory = new ContractFactory(
    OrcaPodManager.abi,
    OrcaPodManager.bytecode,
    signer,
  );
  const orcaRulebookFactory = new ContractFactory(OrcaRulebook.abi, OrcaRulebook.bytecode, signer);
  const orcaVoteManagerFactory = new ContractFactory(
    OrcaVoteManager.abi,
    OrcaVoteManager.bytecode,
    signer,
  );

  await orcaTokenFactory.deploy();
  const orcaRulebook = await orcaRulebookFactory.deploy();
  const orcaPodManager = await orcaPodManagerFactory.deploy(orcaRulebook.address);
  const orcaVoteManager = await orcaVoteManagerFactory.deploy(
    orcaPodManager.address,
    orcaRulebook.address,
  );
  const orcaMemberToken = await orcaMemberTokenFactory.deploy(orcaPodManager.address);
  const orcaProtocol = await orcaProtocolFactory.deploy();

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
  fs.writeFileSync(
    `${__dirname}/../artifacts/contracts/OrcaPodManager.sol/OrcaPodManager.json`,
    JSON.stringify(
      {
        ...OrcaPodManager,
        address: orcaPodManager.address,
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    `${__dirname}/../artifacts/contracts/OrcaVoteManager.sol/OrcaVoteManager.json`,
    JSON.stringify(
      {
        ...OrcaVoteManager,
        address: orcaVoteManager.address,
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    `${__dirname}/../artifacts/contracts/OrcaRulebook.sol/OrcaRulebook.json`,
    JSON.stringify(
      {
        ...OrcaRulebook,
        address: orcaRulebook.address,
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
