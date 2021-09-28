/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface OracleAncillaryInterfaceContract
  extends Truffle.Contract<OracleAncillaryInterfaceInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<OracleAncillaryInterfaceInstance>;
}

type AllEvents = never;

export interface OracleAncillaryInterfaceInstance
  extends Truffle.ContractInstance {
  /**
   * Time must be in the past and the identifier must be supported.
   * Enqueues a request (if a request isn't already present) for the given `identifier`, `time` pair.
   * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  requestPrice: {
    (
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Time must be in the past and the identifier must be supported.
   * Whether the price for `identifier` and `time` is available.
   * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  hasPrice(
    identifier: string,
    time: number | BN | string,
    ancillaryData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * If the price is not available, the method reverts.
   * Gets the price for `identifier` and `time` if it has already been requested and resolved.
   * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  getPrice(
    identifier: string,
    time: number | BN | string,
    ancillaryData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    /**
     * Time must be in the past and the identifier must be supported.
     * Enqueues a request (if a request isn't already present) for the given `identifier`, `time` pair.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    requestPrice: {
      (
        identifier: string,
        time: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        time: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        time: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        time: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Time must be in the past and the identifier must be supported.
     * Whether the price for `identifier` and `time` is available.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    hasPrice(
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * If the price is not available, the method reverts.
     * Gets the price for `identifier` and `time` if it has already been requested and resolved.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    getPrice(
      identifier: string,
      time: number | BN | string,
      ancillaryData: string,
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