/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ExpiringMultiPartyMockContract
  extends Truffle.Contract<ExpiringMultiPartyMockInstance> {
  "new"(
    _financialProductLibraryAddress: string,
    _expirationTimestamp: number | BN | string,
    _collateralRequirement: { rawValue: number | BN | string },
    _priceIdentifier: string,
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ExpiringMultiPartyMockInstance>;
}

type AllEvents = never;

export interface ExpiringMultiPartyMockInstance
  extends Truffle.ContractInstance {
  collateralRequirement(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  expirationTimestamp(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  financialProductLibrary(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  priceIdentifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  setCurrentTime: {
    (
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  transformPrice(
    price: { rawValue: number | BN | string },
    requestTime: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  transformCollateralRequirement(
    price: { rawValue: number | BN | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  transformPriceIdentifier(
    requestTime: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    collateralRequirement(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    expirationTimestamp(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    financialProductLibrary(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    priceIdentifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime: {
      (
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    transformPrice(
      price: { rawValue: number | BN | string },
      requestTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    transformCollateralRequirement(
      price: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    transformPriceIdentifier(
      requestTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
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
