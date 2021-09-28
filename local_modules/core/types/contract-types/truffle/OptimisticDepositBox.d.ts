/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface OptimisticDepositBoxContract
  extends Truffle.Contract<OptimisticDepositBoxInstance> {
  "new"(
    _collateralAddress: string,
    _finderAddress: string,
    _priceIdentifier: string,
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<OptimisticDepositBoxInstance>;
}

export interface Deposit {
  name: "Deposit";
  args: {
    user: string;
    collateralAmount: BN;
    0: string;
    1: BN;
  };
}

export interface EndedOptimisticDepositBox {
  name: "EndedOptimisticDepositBox";
  args: {
    user: string;
    0: string;
  };
}

export interface NewOptimisticDepositBox {
  name: "NewOptimisticDepositBox";
  args: {
    user: string;
    0: string;
  };
}

export interface RequestWithdrawal {
  name: "RequestWithdrawal";
  args: {
    user: string;
    collateralAmount: BN;
    withdrawalRequestTimestamp: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface RequestWithdrawalCanceled {
  name: "RequestWithdrawalCanceled";
  args: {
    user: string;
    collateralAmount: BN;
    withdrawalRequestTimestamp: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface RequestWithdrawalExecuted {
  name: "RequestWithdrawalExecuted";
  args: {
    user: string;
    collateralAmount: BN;
    exchangeRate: BN;
    withdrawalRequestTimestamp: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

type AllEvents =
  | Deposit
  | EndedOptimisticDepositBox
  | NewOptimisticDepositBox
  | RequestWithdrawal
  | RequestWithdrawalCanceled
  | RequestWithdrawalExecuted;

export interface OptimisticDepositBoxInstance extends Truffle.ContractInstance {
  collateralCurrency(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  setCurrentTime: {
    (
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalOptimisticDepositBoxCollateral(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
   * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
   * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
   */
  deposit: {
    (
      collateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      collateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      collateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      collateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
   * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
   * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
   */
  requestWithdrawal: {
    (
      denominatedCollateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      denominatedCollateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      denominatedCollateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      denominatedCollateralAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Might not withdraw the full requested amount in order to account for precision loss.
   * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
   */
  executeWithdrawal: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Cancels a pending withdrawal request.
   */
  cancelWithdrawal: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Accessor method for a user's collateral.
   * @param user address whose collateral amount is retrieved.
   */
  getCollateral(
    user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    collateralCurrency(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime: {
      (
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    totalOptimisticDepositBoxCollateral(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit: {
      (
        collateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        collateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        collateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        collateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal: {
      (
        denominatedCollateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        denominatedCollateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        denominatedCollateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        denominatedCollateralAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(
      user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}