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

interface FxRootMockInterface extends ethers.utils.Interface {
  functions: {
    "fxChild()": FunctionFragment;
    "stateSender()": FunctionFragment;
    "setFxChild(address)": FunctionFragment;
    "sendMessageToChild(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stateSender",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setFxChild", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sendMessageToChild",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stateSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageToChild",
    data: BytesLike
  ): Result;

  events: {};
}

export class FxRootMock extends Contract {
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

  interface: FxRootMockInterface;

  functions: {
    fxChild(overrides?: CallOverrides): Promise<[string]>;

    "fxChild()"(overrides?: CallOverrides): Promise<[string]>;

    stateSender(overrides?: CallOverrides): Promise<[string]>;

    "stateSender()"(overrides?: CallOverrides): Promise<[string]>;

    setFxChild(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFxChild(address)"(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessageToChild(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendMessageToChild(address,bytes)"(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fxChild(overrides?: CallOverrides): Promise<string>;

  "fxChild()"(overrides?: CallOverrides): Promise<string>;

  stateSender(overrides?: CallOverrides): Promise<string>;

  "stateSender()"(overrides?: CallOverrides): Promise<string>;

  setFxChild(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFxChild(address)"(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessageToChild(
    _receiver: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendMessageToChild(address,bytes)"(
    _receiver: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxChild(overrides?: CallOverrides): Promise<string>;

    "fxChild()"(overrides?: CallOverrides): Promise<string>;

    stateSender(overrides?: CallOverrides): Promise<string>;

    "stateSender()"(overrides?: CallOverrides): Promise<string>;

    setFxChild(_fxChild: string, overrides?: CallOverrides): Promise<void>;

    "setFxChild(address)"(
      _fxChild: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageToChild(
      _receiver: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendMessageToChild(address,bytes)"(
      _receiver: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    "fxChild()"(overrides?: CallOverrides): Promise<BigNumber>;

    stateSender(overrides?: CallOverrides): Promise<BigNumber>;

    "stateSender()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFxChild(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFxChild(address)"(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessageToChild(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendMessageToChild(address,bytes)"(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fxChild()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stateSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stateSender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFxChild(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFxChild(address)"(
      _fxChild: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageToChild(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendMessageToChild(address,bytes)"(
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}