import fs from 'fs';
import path from 'path';
import { Network } from '../types/networks';
import registry from '../src/networks.json';

// read all networks
const networksObj = registry.networks;

let networkTypeObj = {};
networksObj.forEach((network: Network) => {
  return (networkTypeObj[network.name] = 'string | null');
});

const content = [
  'export interface NetworkObjType {',
  Object.keys(networkTypeObj)
    .map((key: any) => `${key} : ${networkTypeObj[key]}`)
    .join('\n'),
  '}',
  ,
  'export const networkDefaultObj = {',
  Object.keys(networkTypeObj)
    .map((key: any) => `${key} : ${null},`)
    .join('\n'),
  '}',
].join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'types', 'gen.ts'), content);
