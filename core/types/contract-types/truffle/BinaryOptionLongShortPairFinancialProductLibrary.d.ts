/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface BinaryOptionLongShortPairFinancialProductLibraryContract
  extends Truffle.Contract<BinaryOptionLongShortPairFinancialProductLibraryInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<BinaryOptionLongShortPairFinancialProductLibraryInstance>;
}

type AllEvents = never;

export interface BinaryOptionLongShortPairFinancialProductLibraryInstance
  extends Truffle.ContractInstance {
  longShortPairParameters(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: boolean; 1: BN }>;

  /**
   * Note: a) Any address can set the initial strike price b) A strike can be 0. c) A strike price can only be set once to prevent the deployer from changing the strike after the fact. d) For safety, a strike price should be set before depositing any synthetic tokens in a liquidity pool. e) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
   * Enables any address to set the strike price for an associated binary option.
   * @param longShortPair address of the LSP.
   * @param strikePrice the strike price for the binary option.
   */
  setLongShortPairParameters: {
    (
      longShortPair: string,
      strikePrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      longShortPair: string,
      strikePrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      longShortPair: string,
      strikePrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      longShortPair: string,
      strikePrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
   * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
   */
  percentageLongCollateralAtExpiry(
    expiryPrice: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    longShortPairParameters(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: boolean; 1: BN }>;

    /**
     * Note: a) Any address can set the initial strike price b) A strike can be 0. c) A strike price can only be set once to prevent the deployer from changing the strike after the fact. d) For safety, a strike price should be set before depositing any synthetic tokens in a liquidity pool. e) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the strike price for an associated binary option.
     * @param longShortPair address of the LSP.
     * @param strikePrice the strike price for the binary option.
     */
    setLongShortPairParameters: {
      (
        longShortPair: string,
        strikePrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        longShortPair: string,
        strikePrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        longShortPair: string,
        strikePrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        longShortPair: string,
        strikePrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
