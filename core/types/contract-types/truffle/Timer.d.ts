/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface TimerContract extends Truffle.Contract<TimerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<TimerInstance>;
}

type AllEvents = never;

export interface TimerInstance extends Truffle.ContractInstance {
  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set `currentTime` to.
   */
  setCurrentTime: {
    (
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Gets the currentTime variable set in the Timer.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    setCurrentTime: {
      (
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Gets the currentTime variable set in the Timer.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;
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
