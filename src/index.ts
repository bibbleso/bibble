import registry from './networks.json';
import { Registry, Network } from '../types';
import {
  wssObj as wss,
  rpcObj as rpc,
  idObj as id,
  statusObj as status,
  typeObj as type,
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
  isValid,
} from './utils';

const networks: Network[] = registry.networks;
const document: Registry = registry;

export {
  document,
  networks,
  wss,
  rpc,
  id,
  status,
  type,
  availableNetworks,
  isValid,
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
  status,
  type,
  availableNetworks,
  isValid,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
};
