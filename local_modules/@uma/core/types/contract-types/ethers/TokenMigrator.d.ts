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

interface TokenMigratorInterface extends ethers.utils.Interface {
  functions: {
    "hasMigrated(address)": FunctionFragment;
    "newToken()": FunctionFragment;
    "oldToken()": FunctionFragment;
    "rate()": FunctionFragment;
    "snapshotId()": FunctionFragment;
    "migrateTokens(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "hasMigrated", values: [string]): string;
  encodeFunctionData(functionFragment: "newToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "oldToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "snapshotId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrateTokens",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "hasMigrated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oldToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "snapshotId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrateTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class TokenMigrator extends Contract {
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

  interface: TokenMigratorInterface;

  functions: {
    hasMigrated(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "hasMigrated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    newToken(overrides?: CallOverrides): Promise<[string]>;

    "newToken()"(overrides?: CallOverrides): Promise<[string]>;

    oldToken(overrides?: CallOverrides): Promise<[string]>;

    "oldToken()"(overrides?: CallOverrides): Promise<[string]>;

    rate(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "rate()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    snapshotId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "snapshotId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    migrateTokens(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    "migrateTokens(address)"(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  hasMigrated(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "hasMigrated(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  newToken(overrides?: CallOverrides): Promise<string>;

  "newToken()"(overrides?: CallOverrides): Promise<string>;

  oldToken(overrides?: CallOverrides): Promise<string>;

  "oldToken()"(overrides?: CallOverrides): Promise<string>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

  snapshotId(overrides?: CallOverrides): Promise<BigNumber>;

  "snapshotId()"(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
   * Migrates the tokenHolder's old tokens to new tokens.
   * @param tokenHolder address of the token holder to migrate.
   */
  migrateTokens(
    tokenHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
   * Migrates the tokenHolder's old tokens to new tokens.
   * @param tokenHolder address of the token holder to migrate.
   */
  "migrateTokens(address)"(
    tokenHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    hasMigrated(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "hasMigrated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    newToken(overrides?: CallOverrides): Promise<string>;

    "newToken()"(overrides?: CallOverrides): Promise<string>;

    oldToken(overrides?: CallOverrides): Promise<string>;

    "oldToken()"(overrides?: CallOverrides): Promise<string>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

    snapshotId(overrides?: CallOverrides): Promise<BigNumber>;

    "snapshotId()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    migrateTokens(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    "migrateTokens(address)"(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    hasMigrated(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hasMigrated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newToken(overrides?: CallOverrides): Promise<BigNumber>;

    "newToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    oldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "oldToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

    snapshotId(overrides?: CallOverrides): Promise<BigNumber>;

    "snapshotId()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    migrateTokens(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    "migrateTokens(address)"(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hasMigrated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasMigrated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oldToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oldToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    snapshotId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "snapshotId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    migrateTokens(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    "migrateTokens(address)"(
      tokenHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
