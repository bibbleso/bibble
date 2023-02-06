import bibble from '../dist/src/index';
import constants from './constants';

const wss = {
  mainnet: bibble.wss.mainnet,
  testnet: bibble.wss.testnet,
  hooks: bibble.wss.hooks,
  xevm: bibble.wss.xevm,
  devnet: bibble.wss.devnet,
  xls20: bibble.wss.xls20,
  amm: bibble.wss.amm,
};

const rpc = {
  mainnet: bibble.rpc.mainnet,
  testnet: bibble.rpc.testnet,
  hooks: bibble.rpc.hooks,
  xevm: bibble.rpc.xevm,
  devnet: bibble.rpc.devnet,
  xls20: bibble.rpc.xls20,
  amm: bibble.rpc.amm,
};

const id = {
  mainnet: bibble.id.mainnet,
  testnet: bibble.id.testnet,
  hooks: bibble.id.hooks,
  xevm: bibble.id.xevm,
  devnet: bibble.id.devnet,
  xls20: bibble.id.xls20,
  amm: bibble.id.amm,
};

describe('utils', () => {
  test('default wss', () => {
    expect(wss).toMatchObject(constants.wssObj);
  });

  test('default rpc', () => {
    expect(rpc).toMatchObject(constants.rpcObj);
  });

  test('default id', () => {
    expect(id).toMatchObject(constants.idObj);
  });

  test('id', () => {
    expect(bibble.getClientStringbyId(1)).toBe(constants.id);
  });

  test('name', () => {
    expect(bibble.getClientStringbyName('testnet')).toBe(constants.name);
  });

  test('networks', () => {
    expect(bibble.availableNetworks).toStrictEqual(constants.networks);
  });

  test('getRpc', () => {
    expect(bibble.getRpcWithWssString('wss://xrplcluster.com')).toStrictEqual(
      'https://xrplcluster.com'
    );
  });

  test('getNetwork', () => {
    expect(bibble.getNetworkNameByRPC('https://xrplcluster.com')).toStrictEqual(
      'mainnet'
    );
  });

  test('isValid', () => {
    let main = bibble.isValid('https://xrplcluster.com');
    let obscure = bibble.isValid('wss://x1.sologenic.org');
    let falsy = bibble.isValid('wss://x1.sologenic.org:51333');
    let rpc = bibble.isValid('https://s2.ripple.com:51234');
    expect(main).toStrictEqual(true);
    expect(obscure).toStrictEqual(true);
    expect(rpc).toStrictEqual(true);
    expect(falsy).toBeFalsy();
  });
});
