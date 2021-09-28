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

export type ExecutedGovernanceTransaction = ContractEventLog<{
  to: string;
  data: string;
  0: string;
  1: string;
}>;
export type MessageSent = ContractEventLog<{
  message: string;
  0: string;
}>;

export interface GovernorChildTunnel extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GovernorChildTunnel;
  clone(): GovernorChildTunnel;
  methods: {
    fxChild(): NonPayableTransactionObject<string>;

    fxRootTunnel(): NonPayableTransactionObject<string>;

    processMessageFromRoot(
      stateId: number | string | BN,
      rootMessageSender: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    setFxRootTunnel(_fxRootTunnel: string): NonPayableTransactionObject<void>;
  };
  events: {
    ExecutedGovernanceTransaction(
      cb?: Callback<ExecutedGovernanceTransaction>
    ): EventEmitter;
    ExecutedGovernanceTransaction(
      options?: EventOptions,
      cb?: Callback<ExecutedGovernanceTransaction>
    ): EventEmitter;

    MessageSent(cb?: Callback<MessageSent>): EventEmitter;
    MessageSent(
      options?: EventOptions,
      cb?: Callback<MessageSent>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "ExecutedGovernanceTransaction",
    cb: Callback<ExecutedGovernanceTransaction>
  ): void;
  once(
    event: "ExecutedGovernanceTransaction",
    options: EventOptions,
    cb: Callback<ExecutedGovernanceTransaction>
  ): void;

  once(event: "MessageSent", cb: Callback<MessageSent>): void;
  once(
    event: "MessageSent",
    options: EventOptions,
    cb: Callback<MessageSent>
  ): void;
}