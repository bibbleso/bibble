import registry from './networks.json';
import { Registry, Network } from '../types';
import {
  wssObj as wss,
  rpcObj as rpc,
  idObj as id,
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
} from './utils';

const networks: Network[] = registry.networks;
const document: Registry = registry;

export {
  document,
  networks,
  wss,
  rpc,
  id,
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
};

export default {
  document,
  networks,
  wss,
  rpc,
  id,
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
};
