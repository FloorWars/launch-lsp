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

export interface CoveredCallLongShortPairFinancialProductLibrary
  extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CoveredCallLongShortPairFinancialProductLibrary;
  clone(): CoveredCallLongShortPairFinancialProductLibrary;
  methods: {
    longShortPairStrikePrices(
      arg0: string
    ): NonPayableTransactionObject<string>;

    /**
     * Note: a) Any address can set the initial strike price b) A strike price cannot be 0. c) A strike price can only be set once to prevent the deployer from changing the strike after the fact. d) For safety, a strike price should be set before depositing any synthetic tokens in a liquidity pool. e) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the strike price for an associated LSP.
     * @param longShortPair address of the LSP.
     * @param strikePrice the strike price for the covered call for the associated LSP.
     */
    setLongShortPairParameters(
      longShortPair: string,
      strikePrice: number | string | BN
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
