var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'privateKey';

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: 'MQYGKFKSWK99S1I9FTUBAMVFI8KY66KZ2D'
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    mumbai: {
      networkCheckTimeout: 15000, // Increased timeout to 15 seconds
      provider: () => new HDWalletProvider(MNEMONIC, `https://polygon-mainnet.infura.io/v3/114591cebd3b4ba2a0e4bb9eee913b7e`),
      network_id: 137,
      chainId:137,
      confirmations: 10,
      timeoutBlocks: 10000,
      skipDryRun: true
    }
  },// Configure your compilers
  compilers: {
    solc: {
      version: "0.8.25",    // Fetch exact version from solc-bin (default: truffle's version)
      //docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  }
};