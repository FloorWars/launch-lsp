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

export interface LspUniswapV2Broker extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): LspUniswapV2Broker;
  clone(): LspUniswapV2Broker;
  methods: {
    /**
     * The caller of this method needs to approve `amountCollateral` collateral to be spent by this contract.
     * Mint long and short tokens and deposit them all into a UniV2 Pool.
     * @param amountCollateral Amount of collateral to deposit and mint long and short tokens against.
     * @param callingAsEOA If True, caller has balance of collateral and expects to receive back all LP  tokens + dust.
     * @param deadline Unix timestamp that will force the transaction to revert if minded after this time.
     * @param longShortPair LSP contract address to mint position on.
     * @param minLpTokens Minimum number of LP tokens to mint
     * @param router Contract to call to exchange long and short tokens.
     */
    atomicMintAddLiquidity(
      callingAsEOA: boolean,
      longShortPair: string,
      router: string,
      amountCollateral: number | string | BN,
      minLpTokens: number | string | BN,
      deadline: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * The caller of this method needs to approve `amountCollateral` collateral to be spent by this contract.
     * Mint long and short tokens and convert all of one side into the other.
     * @param amountCollateral Amount of collateral to deposit and mint long and short tokens against.
     * @param callingAsEOA If True, caller has balance of collateral and expects to receive back all long/short tokens.
     * @param deadline `Router.swapExactTokensForTokens` param: time before transaction must be mined.
     * @param longShortPair LSP contract address to mint position on.
     * @param router Contract to call to exchange long and short tokens.
     * @param sellLong If True, converts all long tokens into short, else the opposite.
     * @param swapPath `Router.swapExactTokensForTokens` param: path with which to swap token to sell for the other.
     */
    atomicMintSellOneSide(
      callingAsEOA: boolean,
      sellLong: boolean,
      longShortPair: string,
      router: string,
      amountCollateral: number | string | BN,
      swapPath: string[],
      deadline: number | string | BN
    ): NonPayableTransactionObject<void>;

    getReserves(
      factory: string,
      tokenA: string,
      tokenB: string
    ): NonPayableTransactionObject<{
      reserveA: string;
      reserveB: string;
      0: string;
      1: string;
    }>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
