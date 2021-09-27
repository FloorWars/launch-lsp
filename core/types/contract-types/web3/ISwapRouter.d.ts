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

export interface ISwapRouter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ISwapRouter;
  clone(): ISwapRouter;
  methods: {
    /**
     * In the implementation you must pay the pool tokens owed for the swap. The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory. amount0Delta and amount1Delta can both be 0 if no tokens were swapped.
     * Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.
     * @param amount0Delta The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
     * @param amount1Delta The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.
     * @param data Any data passed through by the caller via the IUniswapV3PoolActions#swap call
     */
    uniswapV3SwapCallback(
      amount0Delta: number | string | BN,
      amount1Delta: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    exactInputSingle(
      params: [
        string,
        string,
        number | string | BN,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): PayableTransactionObject<string>;

    exactInput(
      params: [
        string | number[],
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): PayableTransactionObject<string>;

    exactOutputSingle(
      params: [
        string,
        string,
        number | string | BN,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): PayableTransactionObject<string>;

    exactOutput(
      params: [
        string | number[],
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): PayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
