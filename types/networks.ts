export interface Network {
  id: number | null;
  name: string;
  desc?: string;
  wss: string[] | string;
  rpc?: string[] | string;
  explorer?: string;
  repo?: string;
  faucet?: string | null;
  vl?: {};
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
