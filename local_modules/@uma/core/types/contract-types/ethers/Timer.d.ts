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

interface TimerInterface extends ethers.utils.Interface {
  functions: {
    "setCurrentTime(uint256)": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;

  events: {};
}

export class Timer extends Contract {
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

  interface: TimerInterface;

  functions: {
    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set `currentTime` to.
   */
  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set `currentTime` to.
   */
  "setCurrentTime(uint256)"(
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Gets the currentTime variable set in the Timer.
   */
  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets the currentTime variable set in the Timer.
   */
  "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    "getCurrentTime()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set `currentTime` to.
     */
    "setCurrentTime(uint256)"(
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the currentTime variable set in the Timer.
     */
    "getCurrentTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
