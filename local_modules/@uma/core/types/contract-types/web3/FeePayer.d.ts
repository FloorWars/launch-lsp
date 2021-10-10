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

export type FinalFeesPaid = ContractEventLog<{
  amount: string;
  0: string;
}>;
export type RegularFeesPaid = ContractEventLog<{
  regularFee: string;
  lateFee: string;
  0: string;
  1: string;
}>;

export interface FeePayer extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FeePayer;
  clone(): FeePayer;
  methods: {
    collateralCurrency(): NonPayableTransactionObject<string>;

    cumulativeFeeMultiplier(): NonPayableTransactionObject<string>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(): NonPayableTransactionObject<void>;

    finder(): NonPayableTransactionObject<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(): NonPayableTransactionObject<string>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(): NonPayableTransactionObject<void>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    timerAddress(): NonPayableTransactionObject<string>;

    /**
     * These must be paid periodically for the life of the contract. If the contract has not paid its regular fee in a week or more then a late penalty is applied which is sent to the caller. If the amount of fees owed are greater than the pfc, then this will pay as much as possible from the available collateral. An event is only fired if the fees charged are greater than 0.
     * Pays UMA DVM regular fees (as a % of the collateral pool) to the Store contract.
     */
    payRegularFees(): NonPayableTransactionObject<[string]>;

    /**
     * This returns 0 and exit early if there is no pfc, fees were already paid during the current block, or the fee rate is 0.
     * Fetch any regular fees that the contract has pending but has not yet paid. If the fees to be paid are more than the total collateral within the contract then the totalPaid returned is full contract collateral amount.
     */
    getOutstandingRegularFees(
      time: number | string | BN
    ): NonPayableTransactionObject<{
      regularFee: [string];
      latePenalty: [string];
      totalPaid: [string];
      0: [string];
      1: [string];
      2: [string];
    }>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(): NonPayableTransactionObject<[string]>;

    /**
     * Multiplying the `cumulativeFeeMultiplier` by the ratio of non-PfC-collateral :: PfC-collateral effectively pays all sponsors a pro-rata portion of the excess collateral.This will revert if PfC is 0 and this contract's collateral balance > 0.
     * Removes excess collateral balance not counted in the PfC by distributing it out pro-rata to all sponsors.
     */
    gulp(): NonPayableTransactionObject<void>;
  };
  events: {
    FinalFeesPaid(cb?: Callback<FinalFeesPaid>): EventEmitter;
    FinalFeesPaid(
      options?: EventOptions,
      cb?: Callback<FinalFeesPaid>
    ): EventEmitter;

    RegularFeesPaid(cb?: Callback<RegularFeesPaid>): EventEmitter;
    RegularFeesPaid(
      options?: EventOptions,
      cb?: Callback<RegularFeesPaid>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "FinalFeesPaid", cb: Callback<FinalFeesPaid>): void;
  once(
    event: "FinalFeesPaid",
    options: EventOptions,
    cb: Callback<FinalFeesPaid>
  ): void;

  once(event: "RegularFeesPaid", cb: Callback<RegularFeesPaid>): void;
  once(
    event: "RegularFeesPaid",
    options: EventOptions,
    cb: Callback<RegularFeesPaid>
  ): void;
}