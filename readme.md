# 0xweb install sample

Here the result of [0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419](https://etherscan.io/address/0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419) installation.

### Installation sample

All classes and sources will be stored in `./0xweb/{platform}/{package_path}`

```bash
$ npm i 0xweb -g

# Boostrap dequanto library in cwd
$ 0xweb init

# Download sources/ABI and generate TS classes
$ 0xweb install 0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419 --name chainlink/oracle-eth --chain eth
```

✨ Generated class: [oracle-eth.ts](./0xweb/eth/chainlink/oracle-eth/oracle-eth.ts)

### Usage examples

The examples will load current ETH price from the on-chain data, and print it to console.
### Node.js example

`example-node.ts` Run `npx atma run example.ts`

> Here for the example we use [atma sdk](https://github.com/atmajs/atma.toolkit) to execute `*.ts` scripts, which will be compiled on the fly with [`atma-loader-ts`](https://github.com/tenbits/atma-loader-ts). You can use **your setup for TypeScript Projects**.


### Web example

> Example will use metamask to read from the blockchain

```bash
$ npm run server

# open http://localhost:5777/example-metamask.html
```

🏁

----
©️ MIT License.
