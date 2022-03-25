require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const INFURA_TESTNET_URL = process.env.INFURA_TESTNET_URL;
const INFURA_MAINNET_URL = process.env.INFURA_MAINNET_URL;
const ARBITRUM_TESTNET_URL = process.env.ARBITRUM_TESTNET_URL;
const BSC_URL = process.env.BSC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const AVASCAN_API_KEY = process.env.AVASCAN_API_KEY;
const COIN_MARKETCAP_API = process.env.COIN_MARKETCAP_API;
const AVALANCHE_TESTNET_URL = process.env.AVALANCHE_TESTNET_URL;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }, 
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      gas: 10000000,
      blockGasLimit: 10000000
    },
    rinkeby: {
      url: INFURA_TESTNET_URL,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: INFURA_MAINNET_URL,
      accounts: [PRIVATE_KEY],
    },
    bscs: {
      url: BSC_URL,
      accounts: [PRIVATE_KEY],
    },
    arbitrum: {
      url: ARBITRUM_TESTNET_URL,
      accounts: [PRIVATE_KEY]
    },
    ava: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [PRIVATE_KEY]
    },
    testbscs: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [PRIVATE_KEY]
    }
  },
  gasReporter: {
    enabled: true,
    coinmarketcap: COIN_MARKETCAP_API,
    currency: "USD",
    showTimeSpent: true
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 100000
  }
};
