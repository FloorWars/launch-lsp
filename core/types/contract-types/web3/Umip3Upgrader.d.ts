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

export interface Umip3Upgrader extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Umip3Upgrader;
  clone(): Umip3Upgrader;
  methods: {
    existingGovernor(): NonPayableTransactionObject<string>;

    existingVoting(): NonPayableTransactionObject<string>;

    financialContractsAdmin(): NonPayableTransactionObject<string>;

    finder(): NonPayableTransactionObject<string>;

    identifierWhitelist(): NonPayableTransactionObject<string>;

    newGovernor(): NonPayableTransactionObject<string>;

    registry(): NonPayableTransactionObject<string>;

    store(): NonPayableTransactionObject<string>;

    voting(): NonPayableTransactionObject<string>;

    upgrade(): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
