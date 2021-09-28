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

interface OptimisticRequesterInterface extends ethers.utils.Interface {
  functions: {
    "priceProposed(bytes32,uint256,bytes)": FunctionFragment;
    "priceDisputed(bytes32,uint256,bytes,uint256)": FunctionFragment;
    "priceSettled(bytes32,uint256,bytes,int256)": FunctionFragment;
  };

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

export class OptimisticRequester extends Contract {
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

  interface: OptimisticRequesterInterface;

  functions: {
    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    priceProposed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    "priceProposed(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    priceDisputed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    priceSettled(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    "priceSettled(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Callback for proposals.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param timestamp timestamp of the price being requested.
   */
  priceProposed(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Callback for proposals.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param timestamp timestamp of the price being requested.
   */
  "priceProposed(bytes32,uint256,bytes)"(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Callback for disputes.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param refund refund received in the case that refundOnDispute was enabled.
   * @param timestamp timestamp of the price being requested.
   */
  priceDisputed(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    refund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Callback for disputes.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param refund refund received in the case that refundOnDispute was enabled.
   * @param timestamp timestamp of the price being requested.
   */
  "priceDisputed(bytes32,uint256,bytes,uint256)"(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    refund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Callback for settlement.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param price price that was resolved by the escalation process.
   * @param timestamp timestamp of the price being requested.
   */
  priceSettled(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Callback for settlement.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier being requested.
   * @param price price that was resolved by the escalation process.
   * @param timestamp timestamp of the price being requested.
   */
  "priceSettled(bytes32,uint256,bytes,int256)"(
    identifier: BytesLike,
    timestamp: BigNumberish,
    ancillaryData: BytesLike,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    priceProposed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    "priceProposed(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    priceDisputed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    priceSettled(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    "priceSettled(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    priceProposed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    "priceProposed(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    priceDisputed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    priceSettled(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    "priceSettled(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    priceProposed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback for proposals.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param timestamp timestamp of the price being requested.
     */
    "priceProposed(bytes32,uint256,bytes)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    priceDisputed(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback for disputes.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param refund refund received in the case that refundOnDispute was enabled.
     * @param timestamp timestamp of the price being requested.
     */
    "priceDisputed(bytes32,uint256,bytes,uint256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      refund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    priceSettled(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback for settlement.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier being requested.
     * @param price price that was resolved by the escalation process.
     * @param timestamp timestamp of the price being requested.
     */
    "priceSettled(bytes32,uint256,bytes,int256)"(
      identifier: BytesLike,
      timestamp: BigNumberish,
      ancillaryData: BytesLike,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}