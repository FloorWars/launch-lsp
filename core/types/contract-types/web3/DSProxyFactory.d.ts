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

export type Created = ContractEventLog<{
  sender: string;
  owner: string;
  proxy: string;
  cache: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface DSProxyFactory extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DSProxyFactory;
  clone(): DSProxyFactory;
  methods: {
    cache(): NonPayableTransactionObject<string>;

    isProxy(arg0: string): NonPayableTransactionObject<boolean>;

    "build()"(): NonPayableTransactionObject<string>;

    "build(address)"(owner: string): NonPayableTransactionObject<string>;
  };
  events: {
    Created(cb?: Callback<Created>): EventEmitter;
    Created(options?: EventOptions, cb?: Callback<Created>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Created", cb: Callback<Created>): void;
  once(event: "Created", options: EventOptions, cb: Callback<Created>): void;
}
