# 0xweb install sample

Here the result of [0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419](https://etherscan.io/address/0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419) installation.

1.

All classes and sources will be stored in `./0xweb/{platform}/{package_path}`

```bash
$ npm i 0xweb -g

# Boostrap dequanto library in cwd
$ 0xweb init

# Download sources/ABI and generate TS classes
$ 0xweb install 0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419 --name chainlink/oracle-eth
```

2.

`example.ts` is the usage sample. Run `npx atma run example.ts`

> Here for the example we use [atma sdk](https://github.com/atmajs/atma.toolkit) to execute `*.ts` scripts, which will be compiled on the fly with [`atma-loader-ts`](https://github.com/tenbits/atma-loader-ts). You can use **your setup for TypeScript Projects**.

🏁

----
©️ MIT License.
