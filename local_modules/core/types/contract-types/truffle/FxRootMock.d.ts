/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FxRootMockContract
  extends Truffle.Contract<FxRootMockInstance> {
  "new"(
    _stateSender: string,
    meta?: Truffle.TransactionDetails
  ): Promise<FxRootMockInstance>;
}

type AllEvents = never;

export interface FxRootMockInstance extends Truffle.ContractInstance {
  fxChild(txDetails?: Truffle.TransactionDetails): Promise<string>;

  stateSender(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setFxChild: {
    (_fxChild: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _fxChild: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _fxChild: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _fxChild: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  sendMessageToChild: {
    (
      _receiver: string,
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _receiver: string,
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _receiver: string,
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _receiver: string,
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    fxChild(txDetails?: Truffle.TransactionDetails): Promise<string>;

    stateSender(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setFxChild: {
      (_fxChild: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _fxChild: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _fxChild: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _fxChild: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    sendMessageToChild: {
      (
        _receiver: string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _receiver: string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _receiver: string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _receiver: string,
        _data: string,
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