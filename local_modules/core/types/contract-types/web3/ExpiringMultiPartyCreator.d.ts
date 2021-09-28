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

export type CreatedExpiringMultiParty = ContractEventLog<{
  expiringMultiPartyAddress: string;
  deployerAddress: string;
  0: string;
  1: string;
}>;

export interface ExpiringMultiPartyCreator extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ExpiringMultiPartyCreator;
  clone(): ExpiringMultiPartyCreator;
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

    tokenFactoryAddress(): NonPayableTransactionObject<string>;

    createExpiringMultiParty(
      params: [
        number | string | BN,
        string,
        string | number[],
        string,
        string,
        [number | string | BN],
        [number | string | BN],
        [number | string | BN],
        [number | string | BN],
        [number | string | BN],
        number | string | BN,
        number | string | BN,
        string
      ]
    ): NonPayableTransactionObject<string>;

    _getSyntheticDecimals(
      _collateralAddress: string
    ): NonPayableTransactionObject<string>;
  };
  events: {
    CreatedExpiringMultiParty(
      cb?: Callback<CreatedExpiringMultiParty>
    ): EventEmitter;
    CreatedExpiringMultiParty(
      options?: EventOptions,
      cb?: Callback<CreatedExpiringMultiParty>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "CreatedExpiringMultiParty",
    cb: Callback<CreatedExpiringMultiParty>
  ): void;
  once(
    event: "CreatedExpiringMultiParty",
    options: EventOptions,
    cb: Callback<CreatedExpiringMultiParty>
  ): void;
}