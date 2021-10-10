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

export type NewFxMessage = ContractEventLog<{
  rootMessageSender: string;
  receiver: string;
  data: string;
  0: string;
  1: string;
  2: string;
}>;

export interface FxChildMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FxChildMock;
  clone(): FxChildMock;
  methods: {
    fxRoot(): NonPayableTransactionObject<string>;

    systemCaller(): NonPayableTransactionObject<string>;

    setFxRoot(_fxRoot: string): NonPayableTransactionObject<void>;

    onStateReceive(
      stateId: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    NewFxMessage(cb?: Callback<NewFxMessage>): EventEmitter;
    NewFxMessage(
      options?: EventOptions,
      cb?: Callback<NewFxMessage>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewFxMessage", cb: Callback<NewFxMessage>): void;
  once(
    event: "NewFxMessage",
    options: EventOptions,
    cb: Callback<NewFxMessage>
  ): void;
}