/**
 *  AUTO-Generated Class: 2022-05-30 01:02
 *  Implementation: https://etherscan.io/address/0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419#code
 */
import di from 'a-di';
import { TAddress } from '@dequanto/models/TAddress';
import { TBufferLike } from '@dequanto/models/TBufferLike';
import { ClientEventsStream } from '@dequanto/clients/ClientEventsStream';
import { ContractBase } from '@dequanto/contracts/ContractBase';
import { type AbiItem } from 'web3-utils';
import { TransactionReceipt, EventLog } from 'web3-core';
import { TxWriter } from '@dequanto/txs/TxWriter';
import { ITxLogItem } from '@dequanto/txs/receipt/ITxLogItem';
import { Web3Client } from '@dequanto/clients/Web3Client';
import { IBlockChainExplorer } from '@dequanto/BlockchainExplorer/IBlockChainExplorer';

import { Etherscan } from '@dequanto/BlockchainExplorer/Etherscan'
import { EthWeb3Client } from '@dequanto/clients/EthWeb3Client'
export class ChainlinkOracleEth extends ContractBase {
    constructor(
        public address: TAddress = '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
        public client: Web3Client = di.resolve(EthWeb3Client),
        public explorer: IBlockChainExplorer = di.resolve(Etherscan)
    ) {
        super(address, client, explorer)
    }

    // 0x79ba5097
    async acceptOwnership (eoa: TAccount, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'acceptOwnership'), eoa);
    }

    // 0xbc43cbaf
    async accessController (): Promise<TAddress> {
        return this.$read('function accessController() returns address');
    }

    // 0x245a7bfc
    async aggregator (): Promise<TAddress> {
        return this.$read('function aggregator() returns address');
    }

    // 0xa928c096
    async confirmAggregator (eoa: TAccount, _aggregator: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'confirmAggregator'), eoa, _aggregator);
    }

    // 0x313ce567
    async decimals (): Promise<number> {
        return this.$read('function decimals() returns uint8');
    }

    // 0x7284e416
    async description (): Promise<string> {
        return this.$read('function description() returns string');
    }

    // 0xb5ab58dc
    async getAnswer (_roundId: bigint): Promise<bigint> {
        return this.$read('function getAnswer(uint256) returns int256', _roundId);
    }

    // 0x9a6fc8f5
    async getRoundData (_roundId: bigint): Promise<{ roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint }> {
        return this.$read('function getRoundData(uint80) returns (uint80,int256,uint256,uint256,uint80)', _roundId);
    }

    // 0xb633620c
    async getTimestamp (_roundId: bigint): Promise<bigint> {
        return this.$read('function getTimestamp(uint256) returns uint256', _roundId);
    }

    // 0x50d25bcd
    async latestAnswer (): Promise<bigint> {
        return this.$read('function latestAnswer() returns int256');
    }

    // 0x668a0f02
    async latestRound (): Promise<bigint> {
        return this.$read('function latestRound() returns uint256');
    }

    // 0xfeaf968c
    async latestRoundData (): Promise<{ roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint }> {
        return this.$read('function latestRoundData() returns (uint80,int256,uint256,uint256,uint80)');
    }

    // 0x8205bf6a
    async latestTimestamp (): Promise<bigint> {
        return this.$read('function latestTimestamp() returns uint256');
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read('function owner() returns address');
    }

    // 0xc1597304
    async phaseAggregators (input0: number): Promise<TAddress> {
        return this.$read('function phaseAggregators(uint16) returns address', input0);
    }

    // 0x58303b10
    async phaseId (): Promise<number> {
        return this.$read('function phaseId() returns uint16');
    }

    // 0xf8a2abd3
    async proposeAggregator (eoa: TAccount, _aggregator: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'proposeAggregator'), eoa, _aggregator);
    }

    // 0xe8c4be30
    async proposedAggregator (): Promise<TAddress> {
        return this.$read('function proposedAggregator() returns address');
    }

    // 0x6001ac53
    async proposedGetRoundData (_roundId: bigint): Promise<{ roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint }> {
        return this.$read('function proposedGetRoundData(uint80) returns (uint80,int256,uint256,uint256,uint80)', _roundId);
    }

    // 0x8f6b4d91
    async proposedLatestRoundData (): Promise<{ roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint }> {
        return this.$read('function proposedLatestRoundData() returns (uint80,int256,uint256,uint256,uint80)');
    }

    // 0x92eefe9b
    async setController (eoa: TAccount, _accessController: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setController'), eoa, _accessController);
    }

    // 0xf2fde38b
    async transferOwnership (eoa: TAccount, _to: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), eoa, _to);
    }

    // 0x54fd4d50
    async version (): Promise<bigint> {
        return this.$read('function version() returns uint256');
    }

    onAnswerUpdated (fn: (event: EventLog, current: bigint, roundId: bigint, updatedAt: bigint) => void): ClientEventsStream<any> {
        return this.$on('AnswerUpdated', fn);
    }

    onNewRound (fn: (event: EventLog, roundId: bigint, startedBy: TAddress, startedAt: bigint) => void): ClientEventsStream<any> {
        return this.$on('NewRound', fn);
    }

    onOwnershipTransferRequested (fn: (event: EventLog, from: TAddress, to: TAddress) => void): ClientEventsStream<any> {
        return this.$on('OwnershipTransferRequested', fn);
    }

    onOwnershipTransferred (fn: (event: EventLog, from: TAddress, to: TAddress) => void): ClientEventsStream<any> {
        return this.$on('OwnershipTransferred', fn);
    }

    extractLogsAnswerUpdated (tx: TransactionReceipt): ITxLogItem<TLogAnswerUpdated>[] {
        let abi = this.$getAbiItem('event', 'AnswerUpdated');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogAnswerUpdated>[];
    }

    extractLogsNewRound (tx: TransactionReceipt): ITxLogItem<TLogNewRound>[] {
        let abi = this.$getAbiItem('event', 'NewRound');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogNewRound>[];
    }

    extractLogsOwnershipTransferRequested (tx: TransactionReceipt): ITxLogItem<TLogOwnershipTransferRequested>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferRequested');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogOwnershipTransferRequested>[];
    }

    extractLogsOwnershipTransferred (tx: TransactionReceipt): ITxLogItem<TLogOwnershipTransferred>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogOwnershipTransferred>[];
    }

    async getPastLogsAnswerUpdated (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { current?: bigint,roundId?: bigint }
    }): Promise<ITxLogItem<TLogAnswerUpdated>[]> {
        let topic = '0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f';
        let abi = this.$getAbiItem('event', 'AnswerUpdated');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsNewRound (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { roundId?: bigint,startedBy?: TAddress }
    }): Promise<ITxLogItem<TLogNewRound>[]> {
        let topic = '0x0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac60271';
        let abi = this.$getAbiItem('event', 'NewRound');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsOwnershipTransferRequested (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TLogOwnershipTransferRequested>[]> {
        let topic = '0xed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278';
        let abi = this.$getAbiItem('event', 'OwnershipTransferRequested');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsOwnershipTransferred (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TLogOwnershipTransferred>[]> {
        let topic = '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0';
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    abi = [{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"},{"internalType":"address","name":"_accessController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"confirmAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"phaseAggregators","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"proposeAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proposedAggregator","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"proposedGetRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposedLatestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_accessController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

type TAccount = string | {
    address?: TAddress,
    key?: string,
    name?: string,
    value?: string | number | bigint
}

    type TLogAnswerUpdated = {
        current: bigint, roundId: bigint, updatedAt: bigint
    }
    type TLogNewRound = {
        roundId: bigint, startedBy: TAddress, startedAt: bigint
    }
    type TLogOwnershipTransferRequested = {
        from: TAddress, to: TAddress
    }
    type TLogOwnershipTransferred = {
        from: TAddress, to: TAddress
    }

