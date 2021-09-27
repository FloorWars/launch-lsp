/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type PriceRequestAdded = ContractEventLog<{
  requester: string;
  identifier: string;
  time: string;
  ancillaryData: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type PushedPrice = ContractEventLog<{
  pusher: string;
  identifier: string;
  time: string;
  ancillaryData: string;
  price: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;

export interface MockOracleAncillary extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockOracleAncillary;
  clone(): MockOracleAncillary;
  methods: {
    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(): NonPayableTransactionObject<string>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    timerAddress(): NonPayableTransactionObject<string>;

    /**
     * Time must be in the past and the identifier must be supported.
     * Enqueues a request (if a request isn't already present) for the given `identifier`, `time` pair.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    requestPrice(
      identifier: string | number[],
      time: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<void>;

    pushPrice(
      identifier: string | number[],
      time: number | string | BN,
      ancillaryData: string | number[],
      price: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Time must be in the past and the identifier must be supported.
     * Whether the price for `identifier` and `time` is available.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    hasPrice(
      identifier: string | number[],
      time: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<boolean>;

    /**
     * If the price is not available, the method reverts.
     * Gets the price for `identifier` and `time` if it has already been requested and resolved.
     * @param ancillaryData arbitrary data appended to a price request to give the voters more info from the caller.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    getPrice(
      identifier: string | number[],
      time: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    getPendingQueries(): NonPayableTransactionObject<
      [string, string, string][]
    >;
  };
  events: {
    PriceRequestAdded(cb?: Callback<PriceRequestAdded>): EventEmitter;
    PriceRequestAdded(
      options?: EventOptions,
      cb?: Callback<PriceRequestAdded>
    ): EventEmitter;

    PushedPrice(cb?: Callback<PushedPrice>): EventEmitter;
    PushedPrice(
      options?: EventOptions,
      cb?: Callback<PushedPrice>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "PriceRequestAdded", cb: Callback<PriceRequestAdded>): void;
  once(
    event: "PriceRequestAdded",
    options: EventOptions,
    cb: Callback<PriceRequestAdded>
  ): void;

  once(event: "PushedPrice", cb: Callback<PushedPrice>): void;
  once(
    event: "PushedPrice",
    options: EventOptions,
    cb: Callback<PushedPrice>
  ): void;
}
