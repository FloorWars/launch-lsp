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

interface AdministrateeInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "emergencyShutdown()": FunctionFragment;
    "remargin()": FunctionFragment;
    "pfc()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emergencyShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "remargin", values?: undefined): string;
  encodeFunctionData(functionFragment: "pfc", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "emergencyShutdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remargin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pfc", data: BytesLike): Result;

  events: {};
}

export class AdministrateeInterface extends Contract {
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

  interface: AdministrateeInterfaceInterface;

  functions: {
    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    "emergencyShutdown()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    "remargin()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    "pfc()"(
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;
  };

  /**
   * Initiates the shutdown process, in case of an emergency.
   */
  emergencyShutdown(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Initiates the shutdown process, in case of an emergency.
   */
  "emergencyShutdown()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
   * A core contract method called independently or as a part of other financial contract transactions.
   */
  remargin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
   * A core contract method called independently or as a part of other financial contract transactions.
   */
  "remargin()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
   * Gets the current profit from corruption for this contract in terms of the collateral currency.
   */
  pfc(
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  /**
   * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
   * Gets the current profit from corruption for this contract in terms of the collateral currency.
   */
  "pfc()"(
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  callStatic: {
    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(overrides?: CallOverrides): Promise<void>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    "emergencyShutdown()"(overrides?: CallOverrides): Promise<void>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(overrides?: CallOverrides): Promise<void>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    "remargin()"(overrides?: CallOverrides): Promise<void>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    "pfc()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    "emergencyShutdown()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    "remargin()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    "pfc()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    "emergencyShutdown()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    "remargin()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    "pfc()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
