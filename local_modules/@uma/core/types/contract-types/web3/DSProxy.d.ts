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

export type LogNote = ContractEventLog<{
  sig: string;
  guy: string;
  foo: string;
  bar: string;
  fax: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type LogSetAuthority = ContractEventLog<{
  authority: string;
  0: string;
}>;
export type LogSetOwner = ContractEventLog<{
  owner: string;
  0: string;
}>;

export interface DSProxy extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DSProxy;
  clone(): DSProxy;
  methods: {
    authority(): NonPayableTransactionObject<string>;

    cache(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    setAuthority(authority_: string): NonPayableTransactionObject<void>;

    setOwner(owner_: string): NonPayableTransactionObject<void>;

    "execute(address,bytes)"(
      _target: string,
      _data: string | number[]
    ): PayableTransactionObject<string>;

    "execute(bytes,bytes)"(
      _code: string | number[],
      _data: string | number[]
    ): PayableTransactionObject<{
      target: string;
      response: string;
      0: string;
      1: string;
    }>;

    setCache(_cacheAddr: string): PayableTransactionObject<boolean>;
  };
  events: {
    LogSetAuthority(cb?: Callback<LogSetAuthority>): EventEmitter;
    LogSetAuthority(
      options?: EventOptions,
      cb?: Callback<LogSetAuthority>
    ): EventEmitter;

    LogSetOwner(cb?: Callback<LogSetOwner>): EventEmitter;
    LogSetOwner(
      options?: EventOptions,
      cb?: Callback<LogSetOwner>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "LogSetAuthority", cb: Callback<LogSetAuthority>): void;
  once(
    event: "LogSetAuthority",
    options: EventOptions,
    cb: Callback<LogSetAuthority>
  ): void;

  once(event: "LogSetOwner", cb: Callback<LogSetOwner>): void;
  once(
    event: "LogSetOwner",
    options: EventOptions,
    cb: Callback<LogSetOwner>
  ): void;
}
