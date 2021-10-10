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

export type Deposit = ContractEventLog<{
  user: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;
export type EndedOptimisticDepositBox = ContractEventLog<{
  user: string;
  0: string;
}>;
export type NewOptimisticDepositBox = ContractEventLog<{
  user: string;
  0: string;
}>;
export type RequestWithdrawal = ContractEventLog<{
  user: string;
  collateralAmount: string;
  withdrawalRequestTimestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type RequestWithdrawalCanceled = ContractEventLog<{
  user: string;
  collateralAmount: string;
  withdrawalRequestTimestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type RequestWithdrawalExecuted = ContractEventLog<{
  user: string;
  collateralAmount: string;
  exchangeRate: string;
  withdrawalRequestTimestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface OptimisticDepositBox extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): OptimisticDepositBox;
  clone(): OptimisticDepositBox;
  methods: {
    collateralCurrency(): NonPayableTransactionObject<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(): NonPayableTransactionObject<string>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    timerAddress(): NonPayableTransactionObject<string>;

    totalOptimisticDepositBoxCollateral(): NonPayableTransactionObject<string>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit(
      collateralAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal(
      denominatedCollateralAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal(): NonPayableTransactionObject<string>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(): NonPayableTransactionObject<void>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(user: string): NonPayableTransactionObject<string>;
  };
  events: {
    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    EndedOptimisticDepositBox(
      cb?: Callback<EndedOptimisticDepositBox>
    ): EventEmitter;
    EndedOptimisticDepositBox(
      options?: EventOptions,
      cb?: Callback<EndedOptimisticDepositBox>
    ): EventEmitter;

    NewOptimisticDepositBox(
      cb?: Callback<NewOptimisticDepositBox>
    ): EventEmitter;
    NewOptimisticDepositBox(
      options?: EventOptions,
      cb?: Callback<NewOptimisticDepositBox>
    ): EventEmitter;

    RequestWithdrawal(cb?: Callback<RequestWithdrawal>): EventEmitter;
    RequestWithdrawal(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawal>
    ): EventEmitter;

    RequestWithdrawalCanceled(
      cb?: Callback<RequestWithdrawalCanceled>
    ): EventEmitter;
    RequestWithdrawalCanceled(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawalCanceled>
    ): EventEmitter;

    RequestWithdrawalExecuted(
      cb?: Callback<RequestWithdrawalExecuted>
    ): EventEmitter;
    RequestWithdrawalExecuted(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawalExecuted>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(
    event: "EndedOptimisticDepositBox",
    cb: Callback<EndedOptimisticDepositBox>
  ): void;
  once(
    event: "EndedOptimisticDepositBox",
    options: EventOptions,
    cb: Callback<EndedOptimisticDepositBox>
  ): void;

  once(
    event: "NewOptimisticDepositBox",
    cb: Callback<NewOptimisticDepositBox>
  ): void;
  once(
    event: "NewOptimisticDepositBox",
    options: EventOptions,
    cb: Callback<NewOptimisticDepositBox>
  ): void;

  once(event: "RequestWithdrawal", cb: Callback<RequestWithdrawal>): void;
  once(
    event: "RequestWithdrawal",
    options: EventOptions,
    cb: Callback<RequestWithdrawal>
  ): void;

  once(
    event: "RequestWithdrawalCanceled",
    cb: Callback<RequestWithdrawalCanceled>
  ): void;
  once(
    event: "RequestWithdrawalCanceled",
    options: EventOptions,
    cb: Callback<RequestWithdrawalCanceled>
  ): void;

  once(
    event: "RequestWithdrawalExecuted",
    cb: Callback<RequestWithdrawalExecuted>
  ): void;
  once(
    event: "RequestWithdrawalExecuted",
    options: EventOptions,
    cb: Callback<RequestWithdrawalExecuted>
  ): void;
}