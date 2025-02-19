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

export type AddedToWhitelist = ContractEventLog<{
  addedAddress: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type RemovedFromWhitelist = ContractEventLog<{
  removedAddress: string;
  0: string;
}>;

export interface AddressWhitelist extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AddressWhitelist;
  clone(): AddressWhitelist;
  methods: {
    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    whitelist(arg0: string): NonPayableTransactionObject<string>;

    whitelistIndices(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    addToWhitelist(newElement: string): NonPayableTransactionObject<void>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    removeFromWhitelist(
      elementToRemove: string
    ): NonPayableTransactionObject<void>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    isOnWhitelist(elementToCheck: string): NonPayableTransactionObject<boolean>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    getWhitelist(): NonPayableTransactionObject<string[]>;
  };
  events: {
    AddedToWhitelist(cb?: Callback<AddedToWhitelist>): EventEmitter;
    AddedToWhitelist(
      options?: EventOptions,
      cb?: Callback<AddedToWhitelist>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    RemovedFromWhitelist(cb?: Callback<RemovedFromWhitelist>): EventEmitter;
    RemovedFromWhitelist(
      options?: EventOptions,
      cb?: Callback<RemovedFromWhitelist>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddedToWhitelist", cb: Callback<AddedToWhitelist>): void;
  once(
    event: "AddedToWhitelist",
    options: EventOptions,
    cb: Callback<AddedToWhitelist>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "RemovedFromWhitelist", cb: Callback<RemovedFromWhitelist>): void;
  once(
    event: "RemovedFromWhitelist",
    options: EventOptions,
    cb: Callback<RemovedFromWhitelist>
  ): void;
}
