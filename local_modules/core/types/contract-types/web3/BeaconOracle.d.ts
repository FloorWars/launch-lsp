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
  chainID: string;
  identifier: string;
  time: string;
  ancillaryData: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type PushedPrice = ContractEventLog<{
  chainID: string;
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

export interface BeaconOracle extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): BeaconOracle;
  clone(): BeaconOracle;
  methods: {
    currentChainID(): NonPayableTransactionObject<string>;

    finder(): NonPayableTransactionObject<string>;
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
