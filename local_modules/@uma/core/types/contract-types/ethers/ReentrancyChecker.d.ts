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

interface ReentrancyCheckerInterface extends ethers.utils.Interface {
  functions: {
    "txnData()": FunctionFragment;
    "setTransactionData(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "txnData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setTransactionData",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "txnData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTransactionData",
    data: BytesLike
  ): Result;

  events: {};
}

export class ReentrancyChecker extends Contract {
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

  interface: ReentrancyCheckerInterface;

  functions: {
    txnData(overrides?: CallOverrides): Promise<[string]>;

    "txnData()"(overrides?: CallOverrides): Promise<[string]>;

    setTransactionData(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTransactionData(bytes)"(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  txnData(overrides?: CallOverrides): Promise<string>;

  "txnData()"(overrides?: CallOverrides): Promise<string>;

  setTransactionData(
    _txnData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTransactionData(bytes)"(
    _txnData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    txnData(overrides?: CallOverrides): Promise<string>;

    "txnData()"(overrides?: CallOverrides): Promise<string>;

    setTransactionData(
      _txnData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTransactionData(bytes)"(
      _txnData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    txnData(overrides?: CallOverrides): Promise<BigNumber>;

    "txnData()"(overrides?: CallOverrides): Promise<BigNumber>;

    setTransactionData(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTransactionData(bytes)"(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    txnData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "txnData()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setTransactionData(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTransactionData(bytes)"(
      _txnData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
