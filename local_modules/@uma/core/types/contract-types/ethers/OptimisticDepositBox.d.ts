/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface OptimisticDepositBoxInterface extends ethers.utils.Interface {
  functions: {
    "collateralCurrency()": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "timerAddress()": FunctionFragment;
    "totalOptimisticDepositBoxCollateral()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "requestWithdrawal(uint256)": FunctionFragment;
    "executeWithdrawal()": FunctionFragment;
    "cancelWithdrawal()": FunctionFragment;
    "getCollateral(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collateralCurrency",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalOptimisticDepositBoxCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "collateralCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalOptimisticDepositBoxCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "EndedOptimisticDepositBox(address)": EventFragment;
    "NewOptimisticDepositBox(address)": EventFragment;
    "RequestWithdrawal(address,uint256,uint256)": EventFragment;
    "RequestWithdrawalCanceled(address,uint256,uint256)": EventFragment;
    "RequestWithdrawalExecuted(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndedOptimisticDepositBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOptimisticDepositBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalExecuted"): EventFragment;
}

export class OptimisticDepositBox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OptimisticDepositBoxInterface;

  functions: {
    collateralCurrency(overrides?: CallOverrides): Promise<[string]>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timerAddress(overrides?: CallOverrides): Promise<[string]>;

    "timerAddress()"(overrides?: CallOverrides): Promise<[string]>;

    totalOptimisticDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalOptimisticDepositBoxCollateral()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    "deposit(uint256)"(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    "requestWithdrawal(uint256)"(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    "executeWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Cancels a pending withdrawal request.
     */
    "cancelWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    "getCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  collateralCurrency(overrides?: CallOverrides): Promise<string>;

  "collateralCurrency()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  "setCurrentTime(uint256)"(
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timerAddress(overrides?: CallOverrides): Promise<string>;

  "timerAddress()"(overrides?: CallOverrides): Promise<string>;

  totalOptimisticDepositBoxCollateral(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalOptimisticDepositBoxCollateral()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
   * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
   * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
   */
  deposit(
    collateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
   * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
   * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
   */
  "deposit(uint256)"(
    collateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
   * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
   * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
   */
  requestWithdrawal(
    denominatedCollateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
   * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
   * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
   */
  "requestWithdrawal(uint256)"(
    denominatedCollateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Might not withdraw the full requested amount in order to account for precision loss.
   * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
   */
  executeWithdrawal(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Might not withdraw the full requested amount in order to account for precision loss.
   * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
   */
  "executeWithdrawal()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Cancels a pending withdrawal request.
   */
  cancelWithdrawal(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Cancels a pending withdrawal request.
   */
  "cancelWithdrawal()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Accessor method for a user's collateral.
   * @param user address whose collateral amount is retrieved.
   */
  getCollateral(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Accessor method for a user's collateral.
   * @param user address whose collateral amount is retrieved.
   */
  "getCollateral(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    collateralCurrency(overrides?: CallOverrides): Promise<string>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timerAddress(overrides?: CallOverrides): Promise<string>;

    "timerAddress()"(overrides?: CallOverrides): Promise<string>;

    totalOptimisticDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalOptimisticDepositBoxCollateral()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit(
      collateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    "deposit(uint256)"(
      collateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal(
      denominatedCollateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    "requestWithdrawal(uint256)"(
      denominatedCollateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    "executeWithdrawal()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(overrides?: CallOverrides): Promise<void>;

    /**
     * Cancels a pending withdrawal request.
     */
    "cancelWithdrawal()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    "getCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Deposit(
      user: string | null,
      collateralAmount: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; collateralAmount: BigNumber }
    >;

    EndedOptimisticDepositBox(
      user: string | null
    ): TypedEventFilter<[string], { user: string }>;

    NewOptimisticDepositBox(
      user: string | null
    ): TypedEventFilter<[string], { user: string }>;

    RequestWithdrawal(
      user: string | null,
      collateralAmount: BigNumberish | null,
      withdrawalRequestTimestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      {
        user: string;
        collateralAmount: BigNumber;
        withdrawalRequestTimestamp: BigNumber;
      }
    >;

    RequestWithdrawalCanceled(
      user: string | null,
      collateralAmount: BigNumberish | null,
      withdrawalRequestTimestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      {
        user: string;
        collateralAmount: BigNumber;
        withdrawalRequestTimestamp: BigNumber;
      }
    >;

    RequestWithdrawalExecuted(
      user: string | null,
      collateralAmount: BigNumberish | null,
      exchangeRate: null,
      withdrawalRequestTimestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        collateralAmount: BigNumber;
        exchangeRate: BigNumber;
        withdrawalRequestTimestamp: BigNumber;
      }
    >;
  };

  estimateGas: {
    collateralCurrency(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "timerAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalOptimisticDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalOptimisticDepositBoxCollateral()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    "deposit(uint256)"(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    "requestWithdrawal(uint256)"(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    "executeWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Cancels a pending withdrawal request.
     */
    "cancelWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    "getCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collateralCurrency(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralCurrency()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timerAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalOptimisticDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalOptimisticDepositBoxCollateral()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    deposit(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This contract must be approved to spend at least `collateralAmount` of `collateralCurrency`.
     * Transfers `collateralAmount` of `collateralCurrency` into caller's deposit box.
     * @param collateralAmount total amount of collateral tokens to be sent to the sponsor's position.
     */
    "deposit(uint256)"(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    requestWithdrawal(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The request will be pending for the duration of the liveness period and can be cancelled at any time. Only one withdrawal request can exist for the user.
     * Starts a withdrawal request that allows the sponsor to withdraw `denominatedCollateralAmount` from their position denominated in the quote asset of the price identifier, following a Optimistic Oracle price resolution.
     * @param denominatedCollateralAmount the quote-asset denominated amount of collateral requested to withdraw.
     */
    "requestWithdrawal(uint256)"(
      denominatedCollateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    executeWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss.
     * After a withdrawal request (i.e., by a call to `requestWithdrawal`) and optimistic oracle price resolution, withdraws `depositBoxData.withdrawalRequestAmount` of collateral currency denominated in the quote asset.
     */
    "executeWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Cancels a pending withdrawal request.
     */
    "cancelWithdrawal()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    getCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Accessor method for a user's collateral.
     * @param user address whose collateral amount is retrieved.
     */
    "getCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
