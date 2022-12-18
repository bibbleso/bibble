import _ from 'lodash';
import { Network } from '../../types/networks';
import registry from '../networks.json';

// read all networks json
const networks = registry.networks;

// available networks
const availableNetworks: string[] | undefined = networks.map(
  (network: Network) => network.name
);

// instantiate usable map of wss
const wssMap: Map<string, string | null | undefined> = new Map();
networks.forEach((network: Network) => {
  if (typeof network.wss === 'string' || !network.wss)
    return wssMap.set(network.name, network.wss);
  return wssMap.set(network.name, network.wss[0]);
});
const wssObj = Object.fromEntries(wssMap);

// instantiate usable map of rpc
const rpcMap: Map<string, string | null | undefined> = new Map();
networks.forEach((network: Network) => {
  if (typeof network.rpc === 'string' || !network.rpc)
    return rpcMap.set(network.name, network.rpc);
  return rpcMap.set(network.name, network.rpc[0]);
});
const rpcObj = Object.fromEntries(rpcMap);

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
const clientStringbyId = (id: number): string | undefined | null =>
  wssMap.get(getKey(idMap, id));

// find network by name
const clientStringbyName = (name: string): string | undefined | null =>
  wssMap.get(name);

export {
  wssObj,
  rpcObj,
  idObj,
  clientStringbyId,
  clientStringbyName,
  availableNetworks,
};
