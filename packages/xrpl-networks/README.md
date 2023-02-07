# bibble

### a open-source registry of xrpl networks

[![NPM](https://nodei.co/npm/xrpl.png)](https://www.npmjs.com/package/bibble)

## [➡️ Reference Documentation](https://bibbleso.github.io/bibble/)

## Introduction

This package was originally created to make using RPC endpoints more accessible with the current tooling that has been developered for the XRP Ledger. To date, tooling (xrpl.js to note) has been built to support only secured websockets. In some circomstances, this could be limiting and it is even worse if you need to work with both wss clients and RPC endpoint, simultaneously.

This package is built to make it easier to go back and forth betweem client strings. It also serves as a community-driven registry of XRPL parallel networks and sidechains within the ecosystem.

## Getting Started

In an existing project (with package.json), install bibble with:

```
npm install bibble@latest
```

or with yarn

```
yarn add bibble@latest
```

## Usage with xrpljs

```ts
import xrpl from 'xrpl';
import bibble from 'bibble';

const main = async () => {
  const client = new xrpl.Client(bibble.wss.mainnet);
  await client.connect();
  console.log('connected');

  client.disconnect();
  console.log('disconnected');
};
main();
```
