export interface NetworkObjType {
  mainnet: string | null;
  testnet: string | null;
  devnet: string | null;
  xls20: string | null;
  hooks: string | null;
  amm: string | null;
  xevm: string | null;
}

export const networkDefaultObj = {
  mainnet: null,
  testnet: null,
  devnet: null,
  xls20: null,
  hooks: null,
  amm: null,
  xevm: null,
};
