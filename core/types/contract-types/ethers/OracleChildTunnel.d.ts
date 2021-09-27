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

interface OracleChildTunnelInterface extends ethers.utils.Interface {
  functions: {
    "ancillaryBytesLimit()": FunctionFragment;
    "finder()": FunctionFragment;
    "fxChild()": FunctionFragment;
    "fxRootTunnel()": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "setFxRootTunnel(address)": FunctionFragment;
    "requestPrice(bytes32,uint256,bytes)": FunctionFragment;
    "hasPrice(bytes32,uint256,bytes)": FunctionFragment;
    "getPrice(bytes32,uint256,bytes)": FunctionFragment;
    "stampAncillaryData(bytes,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ancillaryBytesLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fxRootTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRootTunnel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestPrice",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPrice",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stampAncillaryData",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ancillaryBytesLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stampAncillaryData",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
    "PriceRequestAdded(bytes32,uint256,bytes,bytes32)": EventFragment;
    "PushedPrice(bytes32,uint256,bytes,int256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceRequestAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PushedPrice"): EventFragment;
}

export class OracleChildTunnel extends Contract {
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

  interface: OracleChildTunnelInterface;

  functions: {
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    finder(overrides?: CallOverrides): Promise<[string]>;

    "finder()"(overrides?: CallOverrides): Promise<[string]>;

    fxChild(overrides?: CallOverrides): Promise<[string]>;

    "fxChild()"(overrides?: CallOverrides): Promise<[string]>;

    fxRootTunnel(overrides?: CallOverrides): Promise<[string]>;

    "fxRootTunnel()"(overrides?: CallOverrides): Promise<[string]>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "processMessageFromRoot(uint256,address,bytes)"(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFxRootTunnel(address)"(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "hasPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "getPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    stampAncillaryData(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    "stampAncillaryData(bytes,address)"(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  finder(overrides?: CallOverrides): Promise<string>;

  "finder()"(overrides?: CallOverrides): Promise<string>;

  fxChild(overrides?: CallOverrides): Promise<string>;

  "fxChild()"(overrides?: CallOverrides): Promise<string>;

  fxRootTunnel(overrides?: CallOverrides): Promise<string>;

  "fxRootTunnel()"(overrides?: CallOverrides): Promise<string>;

  processMessageFromRoot(
    stateId: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "processMessageFromRoot(uint256,address,bytes)"(
    stateId: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFxRootTunnel(
    _fxRootTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFxRootTunnel(address)"(
    _fxRootTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
   * This should be called to bridge a price request to mainnet.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request.
   */
  requestPrice(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
   * This should be called to bridge a price request to mainnet.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request.
   */
  "requestPrice(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns whether a price has resolved for the request.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request
   */
  hasPrice(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns whether a price has resolved for the request.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request
   */
  "hasPrice(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Reverts if price is not available.
   * Returns resolved price for the request.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request
   */
  getPrice(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Reverts if price is not available.
   * Returns resolved price for the request.
   * @param ancillaryData extra data of price request.
   * @param identifier Identifier of price request.
   * @param time Timestamp of price request
   */
  "getPrice(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    time: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Generates stamped ancillary data in the format that it would be used in the case of a price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param requester sender of the initial price request.
   */
  stampAncillaryData(
    ancillaryData: BytesLike,
    requester: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Generates stamped ancillary data in the format that it would be used in the case of a price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param requester sender of the initial price request.
   */
  "stampAncillaryData(bytes,address)"(
    ancillaryData: BytesLike,
    requester: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "ancillaryBytesLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    finder(overrides?: CallOverrides): Promise<string>;

    "finder()"(overrides?: CallOverrides): Promise<string>;

    fxChild(overrides?: CallOverrides): Promise<string>;

    "fxChild()"(overrides?: CallOverrides): Promise<string>;

    fxRootTunnel(overrides?: CallOverrides): Promise<string>;

    "fxRootTunnel()"(overrides?: CallOverrides): Promise<string>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "processMessageFromRoot(uint256,address,bytes)"(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFxRootTunnel(address)"(
      _fxRootTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "hasPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "getPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    stampAncillaryData(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    "stampAncillaryData(bytes,address)"(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    MessageSent(message: null): TypedEventFilter<[string], { message: string }>;

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

    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    "fxChild()"(overrides?: CallOverrides): Promise<BigNumber>;

    fxRootTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    "fxRootTunnel()"(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "processMessageFromRoot(uint256,address,bytes)"(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFxRootTunnel(address)"(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "hasPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "getPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    stampAncillaryData(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    "stampAncillaryData(bytes,address)"(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
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

    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fxChild()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRootTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fxRootTunnel()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "processMessageFromRoot(uint256,address,bytes)"(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFxRootTunnel(address)"(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Can be called only by a registered contract that is allowed to make DVM price requests. Will mark this price request as Requested, and therefore able to receive the price resolution data from mainnet. Emits a message that will be included in regular checkpoint of all sidechain transactions to mainnet.
     * This should be called to bridge a price request to mainnet.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request.
     */
    "requestPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns whether a price has resolved for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "hasPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Reverts if price is not available.
     * Returns resolved price for the request.
     * @param ancillaryData extra data of price request.
     * @param identifier Identifier of price request.
     * @param time Timestamp of price request
     */
    "getPrice(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      time: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    stampAncillaryData(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    "stampAncillaryData(bytes,address)"(
      ancillaryData: BytesLike,
      requester: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
