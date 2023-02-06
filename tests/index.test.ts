import bibble from '../dist/src/index';
import constants from './constants';

describe('fn', () => {
  test('id', () => {
    expect(bibble.getClientStringbyId(1)).toBe(constants.id);
  });

  test('name', () => {
    expect(bibble.getClientStringbyName('testnet')).toBe(constants.name);
  });
});

describe('utils', () => {
  test('networks', () => {
    console.log(bibble.availableNetworks);
    expect(bibble.availableNetworks).toStrictEqual(constants.networks);
  });

  test('id', () => {
    console.log(bibble.id);
    expect(bibble.id).toMatchObject(constants.idObj);
  });

  test('getRpc', () => {
    console.log(bibble.getRpcWithWssString('wss://xrplcluster.com'));
    expect(bibble.getRpcWithWssString('wss://xrplcluster.com')).toStrictEqual(
      'https://xrplcluster.com'
    );
  });

  test('getNetwork', () => {
    console.log(bibble.getNetworkNameByRPC('https://xrplcluster.com'));
    expect(bibble.getNetworkNameByRPC('https://xrplcluster.com')).toStrictEqual(
      'mainnet'
    );
  });
});
