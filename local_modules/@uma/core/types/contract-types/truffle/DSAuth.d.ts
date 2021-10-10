/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DSAuthContract extends Truffle.Contract<DSAuthInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DSAuthInstance>;
}

export interface LogSetAuthority {
  name: "LogSetAuthority";
  args: {
    authority: string;
    0: string;
  };
}

export interface LogSetOwner {
  name: "LogSetOwner";
  args: {
    owner: string;
    0: string;
  };
}

type AllEvents = LogSetAuthority | LogSetOwner;

export interface DSAuthInstance extends Truffle.ContractInstance {
  authority(txDetails?: Truffle.TransactionDetails): Promise<string>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setOwner: {
    (owner_: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(owner_: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      owner_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      owner_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setAuthority: {
    (authority_: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      authority_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      authority_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      authority_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    authority(txDetails?: Truffle.TransactionDetails): Promise<string>;

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setOwner: {
      (owner_: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        owner_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        owner_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        owner_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setAuthority: {
      (authority_: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        authority_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        authority_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        authority_: string,
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