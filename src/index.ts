import registry from './networks.json';
import { Registry, Network } from '../types';
import {
  wssObj,
  rpcObj,
  idObj,
  clientStringbyId,
  clientStringbyName,
  availableNetworks,
} from './utils';

const Networks: Network[] = registry.networks;
const Document: Registry = registry;

export {
  Document as document,
  Networks as networks,
  wssObj as wss,
  rpcObj as rpc,
  idObj as id,
  clientStringbyId,
  clientStringbyName,
  availableNetworks,
};
