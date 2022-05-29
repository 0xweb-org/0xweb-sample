import { ChainlinkOracleEth } from './0xweb/eth/chainlink/oracle-eth/oracle-eth';
import { Config } from '@dequanto/Config';
import { $bigint } from '@dequanto/utils/$bigint';

async function example () {
    await Config.fetch();

    let oracle = new ChainlinkOracleEth();
    let decimals = await oracle.decimals();
    let price = await oracle.latestAnswer();

    console.log(`ETH Price ${$bigint.toEther(price, decimals)}`);
    process.exit(0);
}
example();
