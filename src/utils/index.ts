import _ from 'lodash';
import { Network } from '../../types/networks';
import registry from '../networks.json';

// read all networks json
export const networks = registry.networks;

// available networks
const availableNetworks: string[] | undefined = networks.map(
  (network: Network) => network.name
);

// instantiate usable map of wss
const wssMap: Map<string, string | null | undefined> = new Map();
networks.forEach((network: Network) => {
  if (typeof network.wss === 'string' || !network.wss) {
    return wssMap.set(network.name, network.wss);
  }
  return wssMap.set(network.name, network.wss[0]);
});

const wssObj = Object.fromEntries(wssMap);

const allWss = new Map();
networks.forEach((network: Network) => {
  if (typeof network.wss === 'string' || !network.wss)
    return allWss.set(network.name, network.wss);
  return network.wss.forEach((wss) => {
    if (!allWss.get(network.name)) allWss.set(network.name, [wss]);
    if (allWss.get(network.name))
      allWss.set(network.name, [wss, ...allWss.get(network.name)]);
  });
});

const allWssSwap = new Map();
networks.forEach((network: Network) => {
  if (typeof network.wss === 'string' || !network.wss)
    return allWssSwap.set(network.wss, network.name);
  return network.wss.forEach((wss) => {
    allWssSwap.set(wss, network.name);
  });
});

// instantiate usable map of rpc
const rpcMap: Map<string, string | null | undefined> = new Map();
networks.forEach((network: Network) => {
  if (typeof network.rpc === 'string' || !network.rpc)
    return rpcMap.set(network.name, network.rpc);
  return rpcMap.set(network.name, network.rpc[0]);
});
const rpcObj = Object.fromEntries(rpcMap);

const allRpc = new Map();
networks.forEach((network: Network) => {
  if (typeof network.rpc === 'string' || !network.rpc)
    return allRpc.set(network.name, network.rpc);
  return network.rpc.forEach((rpc) => {
    if (!allRpc.get(network.name)) allRpc.set(network.name, [rpc]);
    if (allRpc.get(network.name))
      allRpc.set(network.name, [rpc, ...allRpc.get(network.name)]);
  });
});

const allRpcSwap = new Map();
networks.forEach((network: Network) => {
  if (typeof network.rpc === 'string' || !network.rpc)
    return allRpcSwap.set(network.rpc, network.name);
  return network.rpc.forEach((rpc) => {
    allRpcSwap.set(rpc, network.name);
  });
});

// instantiate usable map of id
const idMap: Map<string, number | null> = new Map();
networks.forEach((network: Network) => {
  return idMap.set(network.name, network.id);
});
const idObj = Object.fromEntries(idMap);

const getKey: any = (map: Map<any, any>, value: any): any => {
  for (let [k, v] of map.entries()) {
    if (v === value) return k;
  }
};

// find network by id
const getClientStringbyId = (id: number): string | undefined | null =>
  wssMap.get(getKey(idMap, id));

// find network by name
const getClientStringbyName = (name: string): string | undefined | null =>
  wssMap.get(name);

// find network by wss
const getNetworkNameByWss = (wss: string): string | undefined | null =>
  allWssSwap.get(wss);

// find network by rpc
const getNetworkNameByRPC = (rpc: string): string | undefined | null =>
  allRpcSwap.get(rpc);

// find network by wss
const getRpcWithWssString = (wss: string): string | undefined | null =>
  rpcMap.get(allWssSwap.get(wss));

export {
  wssObj,
  rpcObj,
  idObj,
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
};
