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

export type Approval = ContractEventLog<{
  src: string;
  guy: string;
  wad: string;
  0: string;
  1: string;
  2: string;
}>;
export type Deposit = ContractEventLog<{
  dst: string;
  wad: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  src: string;
  dst: string;
  wad: string;
  0: string;
  1: string;
  2: string;
}>;
export type Withdrawal = ContractEventLog<{
  src: string;
  wad: string;
  0: string;
  1: string;
}>;

export interface WETH9 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): WETH9;
  clone(): WETH9;
  methods: {
    allowance(arg0: string, arg1: string): NonPayableTransactionObject<string>;

    balanceOf(arg0: string): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    deposit(): PayableTransactionObject<void>;

    withdraw(wad: number | string | BN): NonPayableTransactionObject<void>;

    totalSupply(): NonPayableTransactionObject<string>;

    approve(
      guy: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transfer(
      dst: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      src: string,
      dst: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    Withdrawal(cb?: Callback<Withdrawal>): EventEmitter;
    Withdrawal(options?: EventOptions, cb?: Callback<Withdrawal>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "Withdrawal", cb: Callback<Withdrawal>): void;
  once(
    event: "Withdrawal",
    options: EventOptions,
    cb: Callback<Withdrawal>
  ): void;
}