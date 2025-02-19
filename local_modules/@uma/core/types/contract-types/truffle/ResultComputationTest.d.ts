/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ResultComputationTestContract
  extends Truffle.Contract<ResultComputationTestInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ResultComputationTestInstance>;
}

type AllEvents = never;

export interface ResultComputationTestInstance
  extends Truffle.ContractInstance {
  data(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: { rawValue: BN }; 1: BN }>;

  wrapAddVote: {
    (
      votePrice: number | BN | string,
      numberTokens: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      votePrice: number | BN | string,
      numberTokens: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      votePrice: number | BN | string,
      numberTokens: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      votePrice: number | BN | string,
      numberTokens: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  wrapGetResolvedPrice(
    minVoteThreshold: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: boolean; 1: BN }>;

  wrapWasVoteCorrect(
    revealHash: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  wrapGetTotalCorrectlyVotedTokens(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    data(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: { rawValue: BN }; 1: BN }>;

    wrapAddVote: {
      (
        votePrice: number | BN | string,
        numberTokens: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        votePrice: number | BN | string,
        numberTokens: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        votePrice: number | BN | string,
        numberTokens: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        votePrice: number | BN | string,
        numberTokens: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    wrapGetResolvedPrice(
      minVoteThreshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: boolean; 1: BN }>;

    wrapWasVoteCorrect(
      revealHash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    wrapGetTotalCorrectlyVotedTokens(
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
