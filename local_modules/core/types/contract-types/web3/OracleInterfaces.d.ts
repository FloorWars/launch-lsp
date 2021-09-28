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

export interface OracleInterfaces extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): OracleInterfaces;
  clone(): OracleInterfaces;
  methods: {
    Bridge(): NonPayableTransactionObject<string>;

    CollateralWhitelist(): NonPayableTransactionObject<string>;

    FinancialContractsAdmin(): NonPayableTransactionObject<string>;

    GenericHandler(): NonPayableTransactionObject<string>;

    IdentifierWhitelist(): NonPayableTransactionObject<string>;

    OptimisticOracle(): NonPayableTransactionObject<string>;

    Oracle(): NonPayableTransactionObject<string>;

    Registry(): NonPayableTransactionObject<string>;

    Store(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}