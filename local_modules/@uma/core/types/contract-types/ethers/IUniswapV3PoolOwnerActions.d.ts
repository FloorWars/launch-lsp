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

interface IUniswapV3PoolOwnerActionsInterface extends ethers.utils.Interface {
  functions: {
    "setFeeProtocol(uint8,uint8)": FunctionFragment;
    "collectProtocol(address,uint128,uint128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocol",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocol",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV3PoolOwnerActions extends Contract {
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

  interface: IUniswapV3PoolOwnerActionsInterface;

  functions: {
    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol0 new protocol fee for token0 of the pool
   * @param feeProtocol1 new protocol fee for token1 of the pool
   */
  setFeeProtocol(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol0 new protocol fee for token0 of the pool
   * @param feeProtocol1 new protocol fee for token1 of the pool
   */
  "setFeeProtocol(uint8,uint8)"(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Collect the protocol fee accrued to the pool
   * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
   * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
   * @param recipient The address to which collected protocol fees should be sent
   */
  collectProtocol(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Collect the protocol fee accrued to the pool
   * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
   * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
   * @param recipient The address to which collected protocol fees should be sent
   */
  "collectProtocol(address,uint128,uint128)"(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
