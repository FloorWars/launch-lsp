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

export interface FinderInterface extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FinderInterface;
  clone(): FinderInterface;
  methods: {
    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the deployed contract that implements the interface.
     * @param interfaceName bytes32 encoding of the interface name that is either changed or registered.
     */
    changeImplementationAddress(
      interfaceName: string | number[],
      implementationAddress: string
    ): NonPayableTransactionObject<void>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    getImplementationAddress(
      interfaceName: string | number[]
    ): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}