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
    console.log(bibble.getRpcWithWssString(constants.id));
    expect(bibble.getRpcWithWssString(constants.id)).toStrictEqual(
      bibble.rpc.testnet
    );
  });
});
