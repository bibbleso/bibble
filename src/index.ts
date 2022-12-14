import networks from './networks.json';
import { Networks } from '../types';
import {
  wssObj,
  rpcObj,
  idObj,
  clientStringbyId,
  clientStringbyName,
  availableNetworks,
} from './utils';

export {
  wssObj as wss,
  rpcObj as rpc,
  idObj as id,
  clientStringbyId,
  clientStringbyName,
  availableNetworks,
};

export default networks as Networks;
