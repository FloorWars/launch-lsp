/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DSGuardContract extends Truffle.Contract<DSGuardInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DSGuardInstance>;
}

export interface LogForbid {
  name: "LogForbid";
  args: {
    src: string;
    dst: string;
    sig: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface LogPermit {
  name: "LogPermit";
  args: {
    src: string;
    dst: string;
    sig: string;
    0: string;
    1: string;
    2: string;
  };
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

type AllEvents = LogForbid | LogPermit | LogSetAuthority | LogSetOwner;

export interface DSGuardInstance extends Truffle.ContractInstance {
  ANY(txDetails?: Truffle.TransactionDetails): Promise<string>;

  authority(txDetails?: Truffle.TransactionDetails): Promise<string>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

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

  canCall(
    src_: string,
    dst_: string,
    sig: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    ANY(txDetails?: Truffle.TransactionDetails): Promise<string>;

    authority(txDetails?: Truffle.TransactionDetails): Promise<string>;

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

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

    canCall(
      src_: string,
      dst_: string,
      sig: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    "permit(address,address,bytes32)": {
      (
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "permit(bytes32,bytes32,bytes32)": {
      (
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "forbid(address,address,bytes32)": {
      (
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "forbid(bytes32,bytes32,bytes32)": {
      (
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        src: string,
        dst: string,
        sig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        src: string,
        dst: string,
        sig: string,
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
