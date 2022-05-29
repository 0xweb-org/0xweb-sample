import { ChainlinkOracleEth } from '@0xweb/eth/chainlink/oracle-eth/oracle-eth';
import { ChainAccount, ChainAccountProvider } from '@dequanto/ChainAccountProvider';
import { EthWeb3Client } from '@dequanto/clients/EthWeb3Client';

(async function () {
    let oracle = new ChainlinkOracleEth();
    console.log(await oracle.latestAnswer());

    let account = ChainAccountProvider.generate({ name: 'foo' });
    console.log('account', account);


    let web3Eth = new EthWeb3Client({
        web3: ethereum
    });
    let accounts = await web3Eth.getAccounts();
    console.log('accounts', accounts);

    let block = await web3Eth.getBlockNumber();
    console.log('BLOCK', block);

    // let resp = await web3Eth.switchChain(137);
    // console.log('SWITCHED', resp);

    let nodeInfo = await web3Eth.getNodeInfos();
    console.log('nodeInfo', nodeInfo);

    let nodeStats = await web3Eth.getNodeStats()
    console.log('nodeStats', nodeStats);
})();
