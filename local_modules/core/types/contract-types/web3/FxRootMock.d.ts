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

export interface FxRootMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FxRootMock;
  clone(): FxRootMock;
  methods: {
    fxChild(): NonPayableTransactionObject<string>;

    stateSender(): NonPayableTransactionObject<string>;

    setFxChild(_fxChild: string): NonPayableTransactionObject<void>;

    sendMessageToChild(
      _receiver: string,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
