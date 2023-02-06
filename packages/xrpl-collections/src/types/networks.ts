export interface Network {
  id: number | null;
  name: string;
  type: string;
  status: string;
  desc?: string;
  wss: string[] | string | null;
  rpc: string[] | string | null;
  explorer?: string;
  repo?: string;
  faucet?: string | null;
  vl?: {};
  peers?: {};
}

export default interface Registry {
  document: {
    title: string;
    description: string;
    maintainer: string;
    repo: string;
  };
  networks: Network[];
}
