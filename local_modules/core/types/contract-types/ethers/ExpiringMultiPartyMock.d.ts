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

interface ExpiringMultiPartyMockInterface extends ethers.utils.Interface {
  functions: {
    "collateralRequirement()": FunctionFragment;
    "expirationTimestamp()": FunctionFragment;
    "financialProductLibrary()": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "priceIdentifier()": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "timerAddress()": FunctionFragment;
    "transformPrice(tuple,uint256)": FunctionFragment;
    "transformCollateralRequirement(tuple)": FunctionFragment;
    "transformPriceIdentifier(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collateralRequirement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expirationTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "financialProductLibrary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceIdentifier",
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
    functionFragment: "transformPrice",
    values: [{ rawValue: BigNumberish }, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transformCollateralRequirement",
    values: [{ rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "transformPriceIdentifier",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "collateralRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expirationTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "financialProductLibrary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceIdentifier",
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
    functionFragment: "transformPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transformCollateralRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transformPriceIdentifier",
    data: BytesLike
  ): Result;

  events: {};
}

export class ExpiringMultiPartyMock extends Contract {
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

  interface: ExpiringMultiPartyMockInterface;

  functions: {
    collateralRequirement(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "collateralRequirement()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    expirationTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    financialProductLibrary(overrides?: CallOverrides): Promise<[string]>;

    "financialProductLibrary()"(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceIdentifier(overrides?: CallOverrides): Promise<[string]>;

    "priceIdentifier()"(overrides?: CallOverrides): Promise<[string]>;

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

    transformPrice(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    "transformPrice((uint256),uint256)"(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    transformCollateralRequirement(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    "transformCollateralRequirement((uint256))"(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    transformPriceIdentifier(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "transformPriceIdentifier(uint256)"(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  collateralRequirement(overrides?: CallOverrides): Promise<BigNumber>;

  "collateralRequirement()"(overrides?: CallOverrides): Promise<BigNumber>;

  expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  financialProductLibrary(overrides?: CallOverrides): Promise<string>;

  "financialProductLibrary()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  priceIdentifier(overrides?: CallOverrides): Promise<string>;

  "priceIdentifier()"(overrides?: CallOverrides): Promise<string>;

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

  transformPrice(
    price: { rawValue: BigNumberish },
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  "transformPrice((uint256),uint256)"(
    price: { rawValue: BigNumberish },
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  transformCollateralRequirement(
    price: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  "transformCollateralRequirement((uint256))"(
    price: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  transformPriceIdentifier(
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "transformPriceIdentifier(uint256)"(
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    collateralRequirement(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralRequirement()"(overrides?: CallOverrides): Promise<BigNumber>;

    expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    financialProductLibrary(overrides?: CallOverrides): Promise<string>;

    "financialProductLibrary()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceIdentifier(overrides?: CallOverrides): Promise<string>;

    "priceIdentifier()"(overrides?: CallOverrides): Promise<string>;

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

    transformPrice(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "transformPrice((uint256),uint256)"(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    transformCollateralRequirement(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "transformCollateralRequirement((uint256))"(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    transformPriceIdentifier(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "transformPriceIdentifier(uint256)"(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    collateralRequirement(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralRequirement()"(overrides?: CallOverrides): Promise<BigNumber>;

    expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    financialProductLibrary(overrides?: CallOverrides): Promise<BigNumber>;

    "financialProductLibrary()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceIdentifier(overrides?: CallOverrides): Promise<BigNumber>;

    "priceIdentifier()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    transformPrice(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transformPrice((uint256),uint256)"(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transformCollateralRequirement(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transformCollateralRequirement((uint256))"(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transformPriceIdentifier(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transformPriceIdentifier(uint256)"(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collateralRequirement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralRequirement()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    expirationTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "expirationTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    financialProductLibrary(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "financialProductLibrary()"(
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

    priceIdentifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "priceIdentifier()"(
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

    transformPrice(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transformPrice((uint256),uint256)"(
      price: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transformCollateralRequirement(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transformCollateralRequirement((uint256))"(
      price: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transformPriceIdentifier(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transformPriceIdentifier(uint256)"(
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}