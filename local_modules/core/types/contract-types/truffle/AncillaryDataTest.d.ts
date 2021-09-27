/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AncillaryDataTestContract
  extends Truffle.Contract<AncillaryDataTestInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<AncillaryDataTestInstance>;
}

type AllEvents = never;

export interface AncillaryDataTestInstance extends Truffle.ContractInstance {
  toUtf8BytesAddress(
    x: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  toUtf8BytesUint(
    v: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  appendKeyValueAddress(
    currentAncillaryData: string,
    key: string,
    value: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  appendKeyValueUint(
    currentAncillaryData: string,
    key: string,
    value: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  constructPrefix(
    currentAncillaryData: string,
    key: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    toUtf8BytesAddress(
      x: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    toUtf8BytesUint(
      v: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    appendKeyValueAddress(
      currentAncillaryData: string,
      key: string,
      value: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    appendKeyValueUint(
      currentAncillaryData: string,
      key: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    constructPrefix(
      currentAncillaryData: string,
      key: string,
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
