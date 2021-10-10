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

interface FinderInterface extends ethers.utils.Interface {
  functions: {
    "interfacesImplemented(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "changeImplementationAddress(bytes32,address)": FunctionFragment;
    "getImplementationAddress(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "interfacesImplemented",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeImplementationAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementationAddress",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "interfacesImplemented",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeImplementationAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementationAddress",
    data: BytesLike
  ): Result;

  events: {
    "InterfaceImplementationChanged(bytes32,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "InterfaceImplementationChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Finder extends Contract {
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

  interface: FinderInterface;

  functions: {
    interfacesImplemented(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "interfacesImplemented(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    "changeImplementationAddress(bytes32,address)"(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    getImplementationAddress(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    "getImplementationAddress(bytes32)"(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  interfacesImplemented(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "interfacesImplemented(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Updates the address of the contract that implements `interfaceName`.
   * @param implementationAddress address of the implementation contract.
   * @param interfaceName bytes32 of the interface name that is either changed or registered.
   */
  changeImplementationAddress(
    interfaceName: BytesLike,
    implementationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Updates the address of the contract that implements `interfaceName`.
   * @param implementationAddress address of the implementation contract.
   * @param interfaceName bytes32 of the interface name that is either changed or registered.
   */
  "changeImplementationAddress(bytes32,address)"(
    interfaceName: BytesLike,
    implementationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Gets the address of the contract that implements the given `interfaceName`.
   * @param interfaceName queried interface.
   */
  getImplementationAddress(
    interfaceName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Gets the address of the contract that implements the given `interfaceName`.
   * @param interfaceName queried interface.
   */
  "getImplementationAddress(bytes32)"(
    interfaceName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    interfacesImplemented(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "interfacesImplemented(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    "changeImplementationAddress(bytes32,address)"(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    getImplementationAddress(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    "getImplementationAddress(bytes32)"(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    InterfaceImplementationChanged(
      interfaceName: BytesLike | null,
      newImplementationAddress: string | null
    ): TypedEventFilter<
      [string, string],
      { interfaceName: string; newImplementationAddress: string }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    interfacesImplemented(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interfacesImplemented(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    "changeImplementationAddress(bytes32,address)"(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    getImplementationAddress(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    "getImplementationAddress(bytes32)"(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    interfacesImplemented(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "interfacesImplemented(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the address of the contract that implements `interfaceName`.
     * @param implementationAddress address of the implementation contract.
     * @param interfaceName bytes32 of the interface name that is either changed or registered.
     */
    "changeImplementationAddress(bytes32,address)"(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    getImplementationAddress(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the contract that implements the given `interfaceName`.
     * @param interfaceName queried interface.
     */
    "getImplementationAddress(bytes32)"(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}