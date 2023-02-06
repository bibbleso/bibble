import registry from './networks.json';
import { obj as wss } from './utils/wss';
import { obj as rpc } from './utils/rpc';
import { obj as id } from './utils/id';
import { obj as status } from './utils/status';
import { obj as type } from './utils/type';
import { obj as dir } from './utils/dir';
import {
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
  isValid,
} from './utils';
import { Registry, Network, NetworkObjType, NetworkType } from './types';

const networks: Network[] = registry.networks;

/**
 * The full xrpl network registry - community driven.
 * This might be useful for user-specific parsing and general bookkeeping.
 *
 * @link https://github.com/bibbleso/bibble/blob/main/src/networks.json
 */
const document: Registry = registry;

export { Registry, Network, NetworkObjType, NetworkType };

export {
  document,
  networks,
  wss,
  rpc,
  id,
  dir,
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

/** @hidden */
export default {
  document,
  networks,
  wss,
  rpc,
  id,
  status,
  type,
  dir,
  availableNetworks,
  isValid,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
};
