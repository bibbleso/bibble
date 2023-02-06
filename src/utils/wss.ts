import { Network } from '../../types/networks';
import { NetworkObjType } from '../../types/gen';

import registry from '../networks.json';

// read all networks json
const networks = registry.networks;

// instantiate usable maps for wss
const map: Map<string, string | null> = new Map();
const swap: Map<string, string> = new Map();

networks.forEach((network: Network) => {
  if (!network.wss) return map.set(network.name, network.wss);
  if (typeof network.wss === 'string') {
    swap.set(network.wss, network.name);
    return map.set(network.name, network.wss);
  }
  map.set(network.name, network.wss[0]);
  return network.wss.forEach((wss) => {
    swap.set(wss, network.name);
  });
});

/**
 * An object of default websocket strings, indexed by network name.
 * https://github.com/bibbleso/bibble/blob/main/src/utils/wss.ts
 *
 * @example
 * Using the full object...
 * ```ts
 * import bibble from 'bibble';
 *
 * const mainnet_wss = bibble.wss
 *
 * //   mainnet_wss = {
 * //       mainnet: 'wss://xrplcluster.com',
 * //       testnet: 'wss://s.altnet.rippletest.net:51233',
 * //       hooks: 'wss://hooks-testnet-v2.xrpl-labs.com',
 * //       xevm: null,
 * //       devnet: 'wss://s.devnet.rippletest.net:51233',
 * //       xls20: 'wss://xls20-sandbox.rippletest.net:51233',
 * //       amm: 'wss://amm.devnet.rippletest.net:51233',
 * //       ...
 * //   }
 * ```
 *
 * Getting a specific network websocket string...
 * ```ts
 * import bibble from 'bibble';
 *
 * const mainnet_wss = bibble.wss.mainnet // "wss://xrplcluster.com"
 * ```
 *
 * Usage with xrpljs...
 * ```ts
 * import bibble from 'bibble';
 * import xrpl from 'xrpl';
 *
 * const client = new xrpl.client(bibble.wss.mainnet)
 * ```
 */
export const obj: NetworkObjType = Object.create(Object.fromEntries(map));

export default { obj, map, swap };
