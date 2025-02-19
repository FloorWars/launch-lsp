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

export interface OptimisticRequester extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): OptimisticRequester;
  clone(): OptimisticRequester;
  methods: {
    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    priceProposed(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    priceDisputed(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      refund: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    priceSettled(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      price: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
