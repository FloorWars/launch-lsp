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

interface VotingUpgraderInterface extends ethers.utils.Interface {
  functions: {
    "existingVoting()": FunctionFragment;
    "finder()": FunctionFragment;
    "governor()": FunctionFragment;
    "newVoting()": FunctionFragment;
    "setMigratedAddress()": FunctionFragment;
    "upgrade()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "existingVoting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "newVoting", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMigratedAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "existingVoting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newVoting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMigratedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {};
}

export class VotingUpgrader extends Contract {
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

  interface: VotingUpgraderInterface;

  functions: {
    existingVoting(overrides?: CallOverrides): Promise<[string]>;

    "existingVoting()"(overrides?: CallOverrides): Promise<[string]>;

    finder(overrides?: CallOverrides): Promise<[string]>;

    "finder()"(overrides?: CallOverrides): Promise<[string]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    "governor()"(overrides?: CallOverrides): Promise<[string]>;

    newVoting(overrides?: CallOverrides): Promise<[string]>;

    "newVoting()"(overrides?: CallOverrides): Promise<[string]>;

    setMigratedAddress(overrides?: CallOverrides): Promise<[string]>;

    "setMigratedAddress()"(overrides?: CallOverrides): Promise<[string]>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    "upgrade()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  existingVoting(overrides?: CallOverrides): Promise<string>;

  "existingVoting()"(overrides?: CallOverrides): Promise<string>;

  finder(overrides?: CallOverrides): Promise<string>;

  "finder()"(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  newVoting(overrides?: CallOverrides): Promise<string>;

  "newVoting()"(overrides?: CallOverrides): Promise<string>;

  setMigratedAddress(overrides?: CallOverrides): Promise<string>;

  "setMigratedAddress()"(overrides?: CallOverrides): Promise<string>;

  /**
   * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
   * Performs the atomic portion of the upgrade process.
   */
  upgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
   * Performs the atomic portion of the upgrade process.
   */
  "upgrade()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    existingVoting(overrides?: CallOverrides): Promise<string>;

    "existingVoting()"(overrides?: CallOverrides): Promise<string>;

    finder(overrides?: CallOverrides): Promise<string>;

    "finder()"(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    newVoting(overrides?: CallOverrides): Promise<string>;

    "newVoting()"(overrides?: CallOverrides): Promise<string>;

    setMigratedAddress(overrides?: CallOverrides): Promise<string>;

    "setMigratedAddress()"(overrides?: CallOverrides): Promise<string>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    upgrade(overrides?: CallOverrides): Promise<void>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    "upgrade()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    existingVoting(overrides?: CallOverrides): Promise<BigNumber>;

    "existingVoting()"(overrides?: CallOverrides): Promise<BigNumber>;

    finder(overrides?: CallOverrides): Promise<BigNumber>;

    "finder()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    newVoting(overrides?: CallOverrides): Promise<BigNumber>;

    "newVoting()"(overrides?: CallOverrides): Promise<BigNumber>;

    setMigratedAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "setMigratedAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    "upgrade()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    existingVoting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "existingVoting()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "finder()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newVoting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newVoting()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMigratedAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "setMigratedAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This method updates the Voting address in the finder, sets the old voting contract to migrated state, and returns ownership of the existing Voting contract and Finder back to the Governor.
     * Performs the atomic portion of the upgrade process.
     */
    "upgrade()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
