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

interface OracleBaseTunnelMockInterface extends ethers.utils.Interface {
  functions: {
    "ancillaryBytesLimit()": FunctionFragment;
    "finder()": FunctionFragment;
    "requestPrice(bytes32,uint256,bytes)": FunctionFragment;
    "encodePriceRequest(bytes32,uint256,bytes)": FunctionFragment;
    "publishPrice(bytes32,uint256,bytes,int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ancillaryBytesLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestPrice",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodePriceRequest",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "publishPrice",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ancillaryBytesLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodePriceRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishPrice",
    data: BytesLike
  ): Result;

  events: {
    "PriceRequestAdded(bytes32,uint256,bytes,bytes32)": EventFragment;
    "PushedPrice(bytes32,uint256,bytes,int256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PriceRequestAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PushedPrice"): EventFragment;
}

export class OracleBaseTunnelMock extends Contract {
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

  interface: OracleBaseTunnelMockInterface;

  functions: {
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    finder(overrides?: CallOverrides): Promise<[string]>;

    "finder()"(overrides?: CallOverrides): Promise<[string]>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    encodePriceRequest(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "encodePriceRequest(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    publishPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "publishPrice(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  finder(overrides?: CallOverrides): Promise<string>;

  "finder()"(overrides?: CallOverrides): Promise<string>;

  requestPrice(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "requestPrice(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  encodePriceRequest(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "encodePriceRequest(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  publishPrice(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "publishPrice(bytes32,uint256,bytes,int256)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    finder(overrides?: CallOverrides): Promise<string>;

    "finder()"(overrides?: CallOverrides): Promise<string>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    encodePriceRequest(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "encodePriceRequest(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    publishPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "publishPrice(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PriceRequestAdded(
      identifier: BytesLike | null,
      time: null,
      ancillaryData: null,
      requestHash: BytesLike | null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        identifier: string;
        time: BigNumber;
        ancillaryData: string;
        requestHash: string;
      }
    >;

    PushedPrice(
      identifier: BytesLike | null,
      time: null,
      ancillaryData: null,
      price: null,
      requestHash: BytesLike | null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        identifier: string;
        time: BigNumber;
        ancillaryData: string;
        price: BigNumber;
        requestHash: string;
      }
    >;
  };

  estimateGas: {
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    finder(overrides?: CallOverrides): Promise<BigNumber>;

    "finder()"(overrides?: CallOverrides): Promise<BigNumber>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    encodePriceRequest(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encodePriceRequest(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publishPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "publishPrice(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ancillaryBytesLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ancillaryBytesLimit()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "finder()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    encodePriceRequest(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encodePriceRequest(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publishPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "publishPrice(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}