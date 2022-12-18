const id = 'wss://xrplcluster.com/';
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
  devnet: 2,
  xls20: 8,
  hooks: 225,
  amm: null,
  xevm: null,
};

export default {
  id,
  name,
  networks,
  idObj,
};
