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

export interface MockAdministratee extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockAdministratee;
  clone(): MockAdministratee;
  methods: {
    timesEmergencyShutdown(): NonPayableTransactionObject<string>;

    timesRemargined(): NonPayableTransactionObject<string>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(): NonPayableTransactionObject<void>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(): NonPayableTransactionObject<void>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(): NonPayableTransactionObject<[string]>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
