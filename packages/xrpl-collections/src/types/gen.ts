import { Network } from './networks';

export interface NetworkObjType {
  mainnet: string | null;
  testnet: string | null;
  devnet: string | null;
  xls20: string | null;
  hooks: string | null;
  amm: string | null;
  xevm: string | null;
}

export interface NetworkType {
  mainnet: Network;
  testnet: Network;
  devnet: Network;
  xls20: Network;
  hooks: Network;
  amm: Network;
  xevm: Network;
}
