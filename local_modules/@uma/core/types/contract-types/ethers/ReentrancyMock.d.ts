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

interface ReentrancyMockInterface extends ethers.utils.Interface {
  functions: {
    "counter()": FunctionFragment;
    "callback()": FunctionFragment;
    "countAndSend(address)": FunctionFragment;
    "countAndCall(address)": FunctionFragment;
    "countLocalRecursive(uint256)": FunctionFragment;
    "countThisRecursive(uint256)": FunctionFragment;
    "countLocalCall()": FunctionFragment;
    "countThisCall()": FunctionFragment;
    "getCount()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(functionFragment: "callback", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "countAndSend",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "countAndCall",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "countLocalRecursive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "countThisRecursive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "countLocalCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "countThisCall",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;

  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "countAndSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countLocalRecursive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countThisRecursive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countLocalCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countThisCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;

  events: {};
}

export class ReentrancyMock extends Contract {
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

  interface: ReentrancyMockInterface;

  functions: {
    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    "counter()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callback()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countAndSend(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countAndSend(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countAndCall(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countAndCall(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countLocalRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countLocalRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countThisRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countThisRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countLocalCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countLocalCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countThisCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "countThisCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

  callback(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callback()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countAndSend(
    attacker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countAndSend(address)"(
    attacker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countAndCall(
    attacker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countAndCall(address)"(
    attacker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countLocalRecursive(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countLocalRecursive(uint256)"(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countThisRecursive(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countThisRecursive(uint256)"(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countLocalCall(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countLocalCall()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countThisCall(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "countThisCall()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    callback(overrides?: CallOverrides): Promise<void>;

    "callback()"(overrides?: CallOverrides): Promise<void>;

    countAndSend(attacker: string, overrides?: CallOverrides): Promise<void>;

    "countAndSend(address)"(
      attacker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    countAndCall(attacker: string, overrides?: CallOverrides): Promise<void>;

    "countAndCall(address)"(
      attacker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    countLocalRecursive(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "countLocalRecursive(uint256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    countThisRecursive(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "countThisRecursive(uint256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    countLocalCall(overrides?: CallOverrides): Promise<void>;

    "countLocalCall()"(overrides?: CallOverrides): Promise<void>;

    countThisCall(overrides?: CallOverrides): Promise<void>;

    "countThisCall()"(overrides?: CallOverrides): Promise<void>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callback()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countAndSend(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countAndSend(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countAndCall(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countAndCall(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countLocalRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countLocalRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countThisRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countThisRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countLocalCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countLocalCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countThisCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "countThisCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "counter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callback()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countAndSend(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countAndSend(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countAndCall(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countAndCall(address)"(
      attacker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countLocalRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countLocalRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countThisRecursive(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countThisRecursive(uint256)"(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countLocalCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countLocalCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countThisCall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "countThisCall()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}