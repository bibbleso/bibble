import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import { documentHeader } from '../src/constants';
import { Network } from '../types/networks';

const SOURCE_FOLDER = 'src/networks';

// some helpful functions
const isJson = (file: any) => /.json$/.test(file);
const removeExtension = (file: any) => file.split('.')[0];

// getting all networks
const networks = fs.readdirSync(SOURCE_FOLDER).filter(isJson);

// read all networks
const networksObj = networks
  .map((json: any) => {
    return require(path.join(__dirname, '..', SOURCE_FOLDER, json));
  })
  .sort((a: Network, b: Network) => {
    if (a.id === null) return 1;
    if (b.id === null) return -1;
    return a.id - b.id;
  });

// combine all networks into a single object
const combineNetworks = () => _.merge(networksObj);

const generateDocument = () =>
  Object.assign(documentHeader, { networks: combineNetworks() });

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'networks.json'),
  JSON.stringify(generateDocument())
);
