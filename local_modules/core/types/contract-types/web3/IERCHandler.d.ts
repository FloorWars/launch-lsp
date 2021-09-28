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

export interface IERCHandler extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IERCHandler;
  clone(): IERCHandler;
  methods: {
    /**
     * Correlates {resourceID} with {contractAddress}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource(
      resourceID: string | number[],
      contractAddress: string
    ): NonPayableTransactionObject<void>;

    /**
     * Marks {contractAddress} as mintable/burnable.
     * @param contractAddress Address of contract to be used when making or executing deposits.
     */
    setBurnable(contractAddress: string): NonPayableTransactionObject<void>;

    /**
     * Used to manually release funds from ERC safes.
     * @param amountOrTokenID Either the amount of ERC20 tokens or the ERC721 token ID to release.
     * @param recipient Address to release tokens to.
     * @param tokenAddress Address of token contract to release.
     */
    withdraw(
      tokenAddress: string,
      recipient: string,
      amountOrTokenID: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}