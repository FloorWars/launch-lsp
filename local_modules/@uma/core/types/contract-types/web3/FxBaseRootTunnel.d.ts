/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface FxBaseRootTunnel extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FxBaseRootTunnel;
  clone(): FxBaseRootTunnel;
  methods: {
    SEND_MESSAGE_EVENT_SIG(): NonPayableTransactionObject<string>;

    checkpointManager(): NonPayableTransactionObject<string>;

    fxChildTunnel(): NonPayableTransactionObject<string>;

    fxRoot(): NonPayableTransactionObject<string>;

    processedExits(
      arg0: string | number[]
    ): NonPayableTransactionObject<boolean>;

    setFxChildTunnel(_fxChildTunnel: string): NonPayableTransactionObject<void>;

    /**
     * This function verifies if the transaction actually happened on child chain
     * receive message from  L2 to L1, validated by proof
     * @param inputData RLP encoded data of the reference tx containing following list of fields  0 - headerNumber - Checkpoint header block number containing the reference tx  1 - blockProof - Proof that the block header (in the child chain) is a leaf in the submitted merkle root  2 - blockNumber - Block number containing the reference tx on child chain  3 - blockTime - Reference tx block time  4 - txRoot - Transactions root of block  5 - receiptRoot - Receipts root of block  6 - receipt - Receipt of the reference transaction  7 - receiptProof - Merkle proof of the reference receipt  8 - branchMask - 32 bits denoting the path of receipt in merkle tree  9 - receiptLogIndex - Log Index to read from the receipt
     */
    receiveMessage(
      inputData: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}