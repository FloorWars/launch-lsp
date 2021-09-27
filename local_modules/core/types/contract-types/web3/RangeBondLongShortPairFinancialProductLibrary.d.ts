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

export interface RangeBondLongShortPairFinancialProductLibrary
  extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): RangeBondLongShortPairFinancialProductLibrary;
  clone(): RangeBondLongShortPairFinancialProductLibrary;
  methods: {
    longShortPairParameters(
      arg0: string
    ): NonPayableTransactionObject<{
      highPriceRange: string;
      lowPriceRange: string;
      0: string;
      1: string;
    }>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    setLongShortPairParameters(
      longShortPair: string,
      highPriceRange: number | string | BN,
      lowPriceRange: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
