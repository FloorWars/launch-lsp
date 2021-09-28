/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LongShortPairMockContract
  extends Truffle.Contract<LongShortPairMockInstance> {
  "new"(
    _expirationTimestamp: number | BN | string,
    _collateralPerPair: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<LongShortPairMockInstance>;
}

type AllEvents = never;

export interface LongShortPairMockInstance extends Truffle.ContractInstance {
  collateralPerPair(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  expirationTimestamp(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    collateralPerPair(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    expirationTimestamp(txDetails?: Truffle.TransactionDetails): Promise<BN>;
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