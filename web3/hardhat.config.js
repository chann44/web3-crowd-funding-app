require("@matterlabs/hardhat-zksync-solc");
const config = require("dotenv").config
config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // zksolc: {
  //   version: "1.3.9",
  //   compilerSource: "binary",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //     },
  //   },
  // },
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://rpc.sepolia.ethpandaops.io",
      ethNetwork: "sepolia",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 280,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: "sepolia",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
