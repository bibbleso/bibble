import fyi from '../dist/src/index';
import constants from './constants';

const wss = {
  mainnet: fyi.wss.mainnet,
  testnet: fyi.wss.testnet,
  hooks: fyi.wss.hooks,
  xevm: fyi.wss.xevm,
  devnet: fyi.wss.devnet,
  xls20: fyi.wss.xls20,
  amm: fyi.wss.amm,
};

const rpc = {
  mainnet: fyi.rpc.mainnet,
  testnet: fyi.rpc.testnet,
  hooks: fyi.rpc.hooks,
  xevm: fyi.rpc.xevm,
  devnet: fyi.rpc.devnet,
  xls20: fyi.rpc.xls20,
  amm: fyi.rpc.amm,
};

const id = {
  mainnet: fyi.id.mainnet,
  testnet: fyi.id.testnet,
  hooks: fyi.id.hooks,
  xevm: fyi.id.xevm,
  devnet: fyi.id.devnet,
  xls20: fyi.id.xls20,
  amm: fyi.id.amm,
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
    expect(fyi.getClientStringbyId(1)).toBe(constants.id);
  });

  test('name', () => {
    expect(fyi.getClientStringbyName('testnet')).toBe(constants.name);
  });

  test('networks', () => {
    expect(fyi.availableNetworks).toStrictEqual(constants.networks);
  });

  test('getRpc', () => {
    expect(fyi.getRpcWithWssString('wss://xrplcluster.com')).toStrictEqual(
      'https://xrplcluster.com'
    );
  });

  test('getNetwork', () => {
    expect(fyi.getNetworkNameByRPC('https://xrplcluster.com')).toStrictEqual(
      'mainnet'
    );
  });

  test('isValid', () => {
    let main = fyi.isValid('https://xrplcluster.com');
    let obscure = fyi.isValid('wss://x1.sologenic.org');
    let falsy = fyi.isValid('wss://x1.sologenic.org:51333');
    let rpc = fyi.isValid('https://s2.ripple.com:51234');
    expect(main).toStrictEqual(true);
    expect(obscure).toStrictEqual(true);
    expect(rpc).toStrictEqual(true);
    expect(falsy).toBeFalsy();
  });
});
