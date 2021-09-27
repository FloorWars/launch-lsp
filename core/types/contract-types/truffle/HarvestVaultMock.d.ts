/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface HarvestVaultMockContract
  extends Truffle.Contract<HarvestVaultMockInstance> {
  "new"(
    _underlying: string,
    meta?: Truffle.TransactionDetails
  ): Promise<HarvestVaultMockInstance>;
}

type AllEvents = never;

export interface HarvestVaultMockInstance extends Truffle.ContractInstance {
  underlying(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  setPricePerFullShare: {
    (
      _pricePerFullShare: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _pricePerFullShare: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _pricePerFullShare: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _pricePerFullShare: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    underlying(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    setPricePerFullShare: {
      (
        _pricePerFullShare: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _pricePerFullShare: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _pricePerFullShare: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _pricePerFullShare: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
