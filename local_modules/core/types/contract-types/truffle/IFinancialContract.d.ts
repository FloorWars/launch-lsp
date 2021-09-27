/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IFinancialContractContract
  extends Truffle.Contract<IFinancialContractInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IFinancialContractInstance>;
}

type AllEvents = never;

export interface IFinancialContractInstance extends Truffle.ContractInstance {
  redeem: {
    (
      numTokens: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      numTokens: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;
    sendTransaction(
      numTokens: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      numTokens: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  tokenCurrency: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<string>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    redeem: {
      (
        numTokens: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        numTokens: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ rawValue: BN }>;
      sendTransaction(
        numTokens: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        numTokens: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    tokenCurrency: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<string>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
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
