/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DepositBoxContract
  extends Truffle.Contract<DepositBoxInstance> {
  "new"(
    _collateralAddress: string,
    _finderAddress: string,
    _priceIdentifier: string,
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<DepositBoxInstance>;
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

export interface EndedDepositBox {
  name: "EndedDepositBox";
  args: {
    user: string;
    0: string;
  };
}

export interface FinalFeesPaid {
  name: "FinalFeesPaid";
  args: {
    amount: BN;
    0: BN;
  };
}

export interface NewDepositBox {
  name: "NewDepositBox";
  args: {
    user: string;
    0: string;
  };
}

export interface RegularFeesPaid {
  name: "RegularFeesPaid";
  args: {
    regularFee: BN;
    lateFee: BN;
    0: BN;
    1: BN;
  };
}

export interface RequestWithdrawal {
  name: "RequestWithdrawal";
  args: {
    user: string;
    collateralAmount: BN;
    requestPassTimestamp: BN;
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
    requestPassTimestamp: BN;
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
    requestPassTimestamp: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

type AllEvents =
  | Deposit
  | EndedDepositBox
  | FinalFeesPaid
  | NewDepositBox
  | RegularFeesPaid
  | RequestWithdrawal
  | RequestWithdrawalCanceled
  | RequestWithdrawalExecuted;

export interface DepositBoxInstance extends Truffle.ContractInstance {
  collateralCurrency(txDetails?: Truffle.TransactionDetails): Promise<string>;

  cumulativeFeeMultiplier(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * This returns 0 and exit early if there is no pfc, fees were already paid during the current block, or the fee rate is 0.
   * Fetch any regular fees that the contract has pending but has not yet paid. If the fees to be paid are more than the total collateral within the contract then the totalPaid returned is full contract collateral amount.
   */
  getOutstandingRegularFees(
    time: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: { rawValue: BN }; 1: { rawValue: BN }; 2: { rawValue: BN } }>;

  /**
   * Multiplying the `cumulativeFeeMultiplier` by the ratio of non-PfC-collateral :: PfC-collateral effectively pays all sponsors a pro-rata portion of the excess collateral.This will revert if PfC is 0 and this contract's collateral balance > 0.
   * Removes excess collateral balance not counted in the PfC by distributing it out pro-rata to all sponsors.
   */
  gulp: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * These must be paid periodically for the life of the contract. If the contract has not paid its regular fee in a week or more then a late penalty is applied which is sent to the caller. If the amount of fees owed are greater than the pfc, then this will pay as much as possible from the available collateral. An event is only fired if the fees charged are greater than 0.
   * Pays UMA DVM regular fees (as a % of the collateral pool) to the Store contract.
   */
  payRegularFees: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
   * Gets the current profit from corruption for this contract in terms of the collateral currency.
   */
  pfc(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;

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

  /**
   * This contract must hold the `ContractCreator` role with the Registry in order to register itself as a financial-template with the DVM. Note that `_registerContract` cannot be called from the constructor because this contract first needs to be given the `ContractCreator` role in order to register with the `Registry`. But, its address is not known until after deployment.
   * This should be called after construction of the DepositBox and handles registration with the Registry, which is required to make price requests in production environments.
   */
  initialize: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  deposit: {
    (
      collateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      collateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      collateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      collateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  requestWithdrawal: {
    (
      denominatedCollateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      denominatedCollateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      denominatedCollateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      denominatedCollateralAmount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Might not withdraw the full requested amount in order to account for precision loss or if the full requested amount exceeds the collateral in the position (due to paying fees).
   * After a passed withdrawal request (i.e., by a call to `requestWithdrawal` and subsequent DVM price resolution), withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
   */
  executeWithdrawal: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;
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
   * `emergencyShutdown` and `remargin` are required to be implemented by all financial contracts and exposed to the DVM, but because this is a minimal demo they will simply exit silently.
   */
  emergencyShutdown: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Same comment as `emergencyShutdown`. For the sake of simplicity, this will simply exit silently.
   */
  remargin: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * This is necessary because the struct returned by the depositBoxes() method shows rawCollateral, which isn't a user-readable value.
   * Accessor method for a user's collateral.
   * @param user address whose collateral amount is retrieved.
   */
  getCollateral(
    user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  /**
   * Accessor method for the total collateral stored within the entire contract.
   */
  totalDepositBoxCollateral(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  methods: {
    collateralCurrency(txDetails?: Truffle.TransactionDetails): Promise<string>;

    cumulativeFeeMultiplier(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * This returns 0 and exit early if there is no pfc, fees were already paid during the current block, or the fee rate is 0.
     * Fetch any regular fees that the contract has pending but has not yet paid. If the fees to be paid are more than the total collateral within the contract then the totalPaid returned is full contract collateral amount.
     */
    getOutstandingRegularFees(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { rawValue: BN };
      1: { rawValue: BN };
      2: { rawValue: BN };
    }>;

    /**
     * Multiplying the `cumulativeFeeMultiplier` by the ratio of non-PfC-collateral :: PfC-collateral effectively pays all sponsors a pro-rata portion of the excess collateral.This will revert if PfC is 0 and this contract's collateral balance > 0.
     * Removes excess collateral balance not counted in the PfC by distributing it out pro-rata to all sponsors.
     */
    gulp: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * These must be paid periodically for the life of the contract. If the contract has not paid its regular fee in a week or more then a late penalty is applied which is sent to the caller. If the amount of fees owed are greater than the pfc, then this will pay as much as possible from the available collateral. An event is only fired if the fees charged are greater than 0.
     * Pays UMA DVM regular fees (as a % of the collateral pool) to the Store contract.
     */
    payRegularFees: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;

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

    /**
     * This contract must hold the `ContractCreator` role with the Registry in order to register itself as a financial-template with the DVM. Note that `_registerContract` cannot be called from the constructor because this contract first needs to be given the `ContractCreator` role in order to register with the `Registry`. But, its address is not known until after deployment.
     * This should be called after construction of the DepositBox and handles registration with the Registry, which is required to make price requests in production environments.
     */
    initialize: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    deposit: {
      (
        collateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        collateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        collateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        collateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    requestWithdrawal: {
      (
        denominatedCollateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        denominatedCollateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        denominatedCollateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        denominatedCollateralAmount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Might not withdraw the full requested amount in order to account for precision loss or if the full requested amount exceeds the collateral in the position (due to paying fees).
     * After a passed withdrawal request (i.e., by a call to `requestWithdrawal` and subsequent DVM price resolution), withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;
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
     * `emergencyShutdown` and `remargin` are required to be implemented by all financial contracts and exposed to the DVM, but because this is a minimal demo they will simply exit silently.
     */
    emergencyShutdown: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Same comment as `emergencyShutdown`. For the sake of simplicity, this will simply exit silently.
     */
    remargin: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * This is necessary because the struct returned by the depositBoxes() method shows rawCollateral, which isn't a user-readable value.
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(
      user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    /**
     * Accessor method for the total collateral stored within the entire contract.
     */
    totalDepositBoxCollateral(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;
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
