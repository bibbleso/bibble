const id = 'wss://s.altnet.rippletest.net:51233';
const name = 'wss://s.altnet.rippletest.net:51233';
const networks = [
  'mainnet',
  'testnet',
  'devnet',
  'xls20',
  'hooks',
  'amm',
  'xevm',
];
const idObj = {
  mainnet: 0,
  testnet: 1,
  hooks: 225,
  xevm: null,
  devnet: 2,
  xls20: 8,
  amm: null,
};

const wssObj = {
  mainnet: 'wss://xrplcluster.com',
  testnet: 'wss://s.altnet.rippletest.net:51233',
  hooks: 'wss://hooks-testnet-v2.xrpl-labs.com',
  xevm: null,
  devnet: 'wss://s.devnet.rippletest.net:51233',
  xls20: 'wss://xls20-sandbox.rippletest.net:51233',
  amm: 'wss://amm.devnet.rippletest.net:51233',
};

const rpcObj = {
  mainnet: 'https://xrplcluster.com',
  testnet: 'https://s.altnet.rippletest.net:51234',
  hooks: 'https://hooks-testnet-v2.xrpl-labs.com',
  xevm: 'https://rpc-evm-sidechain.xrpl.org',
  devnet: 'https://s.devnet.rippletest.net:51234',
  xls20: 'http://xls20-sandbox.rippletest.net:51234',
  amm: 'http://amm.devnet.rippletest.net:51234',
};

export default {
  id,
  name,
  networks,
  idObj,
  wssObj,
  rpcObj,
};
