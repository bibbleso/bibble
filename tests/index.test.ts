import * as bibble from '../dist/src/index';
import constants from './constants';

describe('fn', () => {
  test('id', () => {
    expect(bibble.clientStringbyId(0)).toBe(constants.id);
  });

  test('name', () => {
    expect(bibble.clientStringbyName('testnet')).toBe(constants.name);
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
});
