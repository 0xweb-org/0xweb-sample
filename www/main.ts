import { ChainlinkOracleEth } from '@0xweb/eth/chainlink/oracle-eth/oracle-eth';

(async function () {
    let oracle = new ChainlinkOracleEth();
    console.log(await oracle.latestAnswer());
})();
