/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AddressWhitelistInterfaceContract
  extends Truffle.Contract<AddressWhitelistInterfaceInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<AddressWhitelistInterfaceInstance>;
}

type AllEvents = never;

export interface AddressWhitelistInterfaceInstance
  extends Truffle.ContractInstance {
  addToWhitelist: {
    (newElement: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeFromWhitelist: {
    (newElement: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isOnWhitelist(
    newElement: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getWhitelist(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  methods: {
    addToWhitelist: {
      (newElement: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeFromWhitelist: {
      (newElement: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newElement: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isOnWhitelist(
      newElement: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    getWhitelist(txDetails?: Truffle.TransactionDetails): Promise<string[]>;
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
