import { Network } from '../types/networks';
import { NetworkObjType } from '../types/gen';

import registry from '../networks.json';

// read all networks json
const networks = registry.networks;

// instantiate usable map of rpc
const map: Map<string, string | null> = new Map();
const swap: Map<string, string> = new Map();

networks.forEach((network: Network) => {
  if (!network.rpc) return map.set(network.name, network.rpc);
  if (typeof network.rpc === 'string') {
    swap.set(network.rpc, network.name);
    return map.set(network.name, network.rpc);
  }
  map.set(network.name, network.rpc[0]);
  return network.rpc.forEach((rpc) => {
    swap.set(rpc, network.name);
  });
});

/**
 * An object of default rpc strings, indexed by network name.
 * https://github.com/bibbleso/bibble/blob/main/src/utils/rpc.ts
 *
 * @example
 * ```ts
 * import bibble from 'bibble';
 *
 * const mainnet_rpc = bibble.rpc.mainnet // "https://xrplcluster.com"
 * ```
 */
export const obj: NetworkObjType = Object.create(Object.fromEntries(map));

export default { obj, map, swap };
