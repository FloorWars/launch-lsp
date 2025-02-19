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

export type Swap = ContractEventLog<{
  sender: string;
  recipient: string;
  amount0: string;
  amount1: string;
  sqrtPriceX96: string;
  liquidity: string;
  tick: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;

export interface UniswapV3 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): UniswapV3;
  clone(): UniswapV3;
  methods: {
    token0(): NonPayableTransactionObject<string>;

    token1(): NonPayableTransactionObject<string>;
  };
  events: {
    Swap(cb?: Callback<Swap>): EventEmitter;
    Swap(options?: EventOptions, cb?: Callback<Swap>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Swap", cb: Callback<Swap>): void;
  once(event: "Swap", options: EventOptions, cb: Callback<Swap>): void;
}
