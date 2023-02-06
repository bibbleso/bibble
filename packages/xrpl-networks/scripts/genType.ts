import fs from 'fs';
import path from 'path';
import { Network } from '../src/types';
import registry from '../src/networks.json';

// read all networks
const networksObj = registry.networks;

let networkTypeObj = {};
let networkType = {};
networksObj.forEach((network: Network) => {
  return (networkTypeObj[network.name] = 'string | null');
});
networksObj.forEach((network: Network) => {
  return (networkType[network.name] = 'Network');
});

const content = [
  "import { Network } from './networks'",
  ,
  'export interface NetworkObjType {',
  Object.keys(networkTypeObj)
    .map((key: any) => `${key} : ${networkTypeObj[key]}`)
    .join('\n'),
  '}',
  ,
  'export interface NetworkType {',
  Object.keys(networkType)
    .map((key: any) => `${key} : ${networkType[key]}`)
    .join('\n'),
  '}',
].join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'src', 'types', 'gen.ts'), content);
