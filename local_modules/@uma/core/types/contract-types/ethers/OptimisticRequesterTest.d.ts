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

interface OptimisticRequesterTestInterface extends ethers.utils.Interface {
  functions: {
    "ancillaryData()": FunctionFragment;
    "collateralCurrency()": FunctionFragment;
    "expirationTimestamp()": FunctionFragment;
    "identifier()": FunctionFragment;
    "price()": FunctionFragment;
    "refund()": FunctionFragment;
    "shouldRevert()": FunctionFragment;
    "timestamp()": FunctionFragment;
    "requestPrice(bytes32,uint256,bytes,address,uint256)": FunctionFragment;
    "settleAndGetPrice(bytes32,uint256,bytes)": FunctionFragment;
    "setBond(bytes32,uint256,bytes,uint256)": FunctionFragment;
    "setRefundOnDispute(bytes32,uint256,bytes)": FunctionFragment;
    "setCustomLiveness(bytes32,uint256,bytes,uint256)": FunctionFragment;
    "setRevert(bool)": FunctionFragment;
    "setExpirationTimestamp(uint256)": FunctionFragment;
    "clearState()": FunctionFragment;
    "priceProposed(bytes32,uint256,bytes)": FunctionFragment;
    "priceDisputed(bytes32,uint256,bytes,uint256)": FunctionFragment;
    "priceSettled(bytes32,uint256,bytes,int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ancillaryData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralCurrency",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expirationTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "identifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(functionFragment: "refund", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "shouldRevert",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestPrice",
    values: [BytesLike, BigNumberish, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settleAndGetPrice",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBond",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRefundOnDispute",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCustomLiveness",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setRevert", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setExpirationTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "clearState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceProposed",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceDisputed",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceSettled",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ancillaryData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expirationTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "identifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shouldRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleAndGetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBond", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRefundOnDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCustomLiveness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRevert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setExpirationTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clearState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceProposed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceDisputed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceSettled",
    data: BytesLike
  ): Result;

  events: {};
}

export class OptimisticRequesterTest extends Contract {
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

  interface: OptimisticRequesterTestInterface;

  functions: {
    ancillaryData(overrides?: CallOverrides): Promise<[string]>;

    "ancillaryData()"(overrides?: CallOverrides): Promise<[string]>;

    collateralCurrency(overrides?: CallOverrides): Promise<[string]>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<[string]>;

    expirationTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    identifier(overrides?: CallOverrides): Promise<[string]>;

    "identifier()"(overrides?: CallOverrides): Promise<[string]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    "price()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    refund(overrides?: CallOverrides): Promise<[BigNumber]>;

    "refund()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    shouldRevert(overrides?: CallOverrides): Promise<[boolean]>;

    "shouldRevert()"(overrides?: CallOverrides): Promise<[boolean]>;

    timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "timestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    requestPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "requestPrice(bytes32,uint256,bytes,address,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleAndGetPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "settleAndGetPrice(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBond(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setBond(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRefundOnDispute(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRefundOnDispute(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCustomLiveness(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setCustomLiveness(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRevert(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRevert(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExpirationTimestamp(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setExpirationTimestamp(uint256)"(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clearState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "clearState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    priceProposed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "priceProposed(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    priceDisputed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    priceSettled(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "priceSettled(bytes32,uint256,bytes,int256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ancillaryData(overrides?: CallOverrides): Promise<string>;

  "ancillaryData()"(overrides?: CallOverrides): Promise<string>;

  collateralCurrency(overrides?: CallOverrides): Promise<string>;

  "collateralCurrency()"(overrides?: CallOverrides): Promise<string>;

  expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  identifier(overrides?: CallOverrides): Promise<string>;

  "identifier()"(overrides?: CallOverrides): Promise<string>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  "price()"(overrides?: CallOverrides): Promise<BigNumber>;

  refund(overrides?: CallOverrides): Promise<BigNumber>;

  "refund()"(overrides?: CallOverrides): Promise<BigNumber>;

  shouldRevert(overrides?: CallOverrides): Promise<boolean>;

  "shouldRevert()"(overrides?: CallOverrides): Promise<boolean>;

  timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  requestPrice(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    currency: string,
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "requestPrice(bytes32,uint256,bytes,address,uint256)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    currency: string,
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleAndGetPrice(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "settleAndGetPrice(bytes32,uint256,bytes)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBond(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    bond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setBond(bytes32,uint256,bytes,uint256)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    bond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRefundOnDispute(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRefundOnDispute(bytes32,uint256,bytes)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCustomLiveness(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    customLiveness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setCustomLiveness(bytes32,uint256,bytes,uint256)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    customLiveness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRevert(
    _shouldRevert: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRevert(bool)"(
    _shouldRevert: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExpirationTimestamp(
    _expirationTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setExpirationTimestamp(uint256)"(
    _expirationTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clearState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "clearState()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  priceProposed(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "priceProposed(bytes32,uint256,bytes)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  priceDisputed(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    _refund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "priceDisputed(bytes32,uint256,bytes,uint256)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    _refund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  priceSettled(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "priceSettled(bytes32,uint256,bytes,int256)"(
    _identifier: BytesLike,
    _timestamp: BigNumberish,
    _ancillaryData: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ancillaryData(overrides?: CallOverrides): Promise<string>;

    "ancillaryData()"(overrides?: CallOverrides): Promise<string>;

    collateralCurrency(overrides?: CallOverrides): Promise<string>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<string>;

    expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    identifier(overrides?: CallOverrides): Promise<string>;

    "identifier()"(overrides?: CallOverrides): Promise<string>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    refund(overrides?: CallOverrides): Promise<BigNumber>;

    "refund()"(overrides?: CallOverrides): Promise<BigNumber>;

    shouldRevert(overrides?: CallOverrides): Promise<boolean>;

    "shouldRevert()"(overrides?: CallOverrides): Promise<boolean>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    requestPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "requestPrice(bytes32,uint256,bytes,address,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settleAndGetPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "settleAndGetPrice(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBond(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBond(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRefundOnDispute(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRefundOnDispute(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setCustomLiveness(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCustomLiveness(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRevert(_shouldRevert: boolean, overrides?: CallOverrides): Promise<void>;

    "setRevert(bool)"(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setExpirationTimestamp(
      _expirationTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setExpirationTimestamp(uint256)"(
      _expirationTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    clearState(overrides?: CallOverrides): Promise<void>;

    "clearState()"(overrides?: CallOverrides): Promise<void>;

    priceProposed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "priceProposed(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    priceDisputed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    priceSettled(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "priceSettled(bytes32,uint256,bytes,int256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ancillaryData(overrides?: CallOverrides): Promise<BigNumber>;

    "ancillaryData()"(overrides?: CallOverrides): Promise<BigNumber>;

    collateralCurrency(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralCurrency()"(overrides?: CallOverrides): Promise<BigNumber>;

    expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "expirationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    identifier(overrides?: CallOverrides): Promise<BigNumber>;

    "identifier()"(overrides?: CallOverrides): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    refund(overrides?: CallOverrides): Promise<BigNumber>;

    "refund()"(overrides?: CallOverrides): Promise<BigNumber>;

    shouldRevert(overrides?: CallOverrides): Promise<BigNumber>;

    "shouldRevert()"(overrides?: CallOverrides): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    requestPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "requestPrice(bytes32,uint256,bytes,address,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleAndGetPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "settleAndGetPrice(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBond(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setBond(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRefundOnDispute(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRefundOnDispute(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCustomLiveness(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setCustomLiveness(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRevert(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRevert(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExpirationTimestamp(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setExpirationTimestamp(uint256)"(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clearState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "clearState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    priceProposed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "priceProposed(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    priceDisputed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    priceSettled(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "priceSettled(bytes32,uint256,bytes,int256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ancillaryData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ancillaryData()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collateralCurrency(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralCurrency()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    expirationTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "expirationTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "identifier()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "price()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "refund()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shouldRevert(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "shouldRevert()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "requestPrice(bytes32,uint256,bytes,address,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      currency: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleAndGetPrice(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "settleAndGetPrice(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBond(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setBond(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      bond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRefundOnDispute(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRefundOnDispute(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCustomLiveness(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setCustomLiveness(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      customLiveness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRevert(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRevert(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExpirationTimestamp(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setExpirationTimestamp(uint256)"(
      _expirationTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clearState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "clearState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    priceProposed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "priceProposed(bytes32,uint256,bytes)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    priceDisputed(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    priceSettled(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "priceSettled(bytes32,uint256,bytes,int256)"(
      _identifier: BytesLike,
      _timestamp: BigNumberish,
      _ancillaryData: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
