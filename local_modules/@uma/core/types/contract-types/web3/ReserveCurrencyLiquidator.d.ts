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

export interface ReserveCurrencyLiquidator extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ReserveCurrencyLiquidator;
  clone(): ReserveCurrencyLiquidator;
  methods: {
    swapMintLiquidate(
      uniswapRouter: string,
      financialContract: string,
      reserveCurrency: string,
      liquidatedSponsor: string,
      minCollateralPerTokenLiquidated: [number | string | BN],
      maxCollateralPerTokenLiquidated: [number | string | BN],
      maxTokensToLiquidate: [number | string | BN],
      maxSlippage: number | string | BN,
      deadline: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}