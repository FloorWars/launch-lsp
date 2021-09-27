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

interface AddressWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelist(address)": FunctionFragment;
    "whitelistIndices(uint256)": FunctionFragment;
    "addToWhitelist(address)": FunctionFragment;
    "removeFromWhitelist(address)": FunctionFragment;
    "isOnWhitelist(address)": FunctionFragment;
    "getWhitelist()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
  encodeFunctionData(
    functionFragment: "whitelistIndices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOnWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelist",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOnWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelist",
    data: BytesLike
  ): Result;

  events: {
    "AddedToWhitelist(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemovedFromWhitelist(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedToWhitelist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedFromWhitelist"): EventFragment;
}

export class AddressWhitelist extends Contract {
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

  interface: AddressWhitelistInterface;

  functions: {
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

    whitelist(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    "whitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    whitelistIndices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "whitelistIndices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    addToWhitelist(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    "addToWhitelist(address)"(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    removeFromWhitelist(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    "removeFromWhitelist(address)"(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    isOnWhitelist(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    "isOnWhitelist(address)"(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    getWhitelist(
      overrides?: CallOverrides
    ): Promise<[string[]] & { activeWhitelist: string[] }>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    "getWhitelist()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { activeWhitelist: string[] }>;
  };

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

  whitelist(arg0: string, overrides?: CallOverrides): Promise<number>;

  "whitelist(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<number>;

  whitelistIndices(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "whitelistIndices(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Adds an address to the whitelist.
   * @param newElement the new address to add.
   */
  addToWhitelist(
    newElement: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Adds an address to the whitelist.
   * @param newElement the new address to add.
   */
  "addToWhitelist(address)"(
    newElement: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Removes an address from the whitelist.
   * @param elementToRemove the existing address to remove.
   */
  removeFromWhitelist(
    elementToRemove: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Removes an address from the whitelist.
   * @param elementToRemove the existing address to remove.
   */
  "removeFromWhitelist(address)"(
    elementToRemove: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Checks whether an address is on the whitelist.
   * @param elementToCheck the address to check.
   */
  isOnWhitelist(
    elementToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Checks whether an address is on the whitelist.
   * @param elementToCheck the address to check.
   */
  "isOnWhitelist(address)"(
    elementToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
   * Gets all addresses that are currently included in the whitelist.
   */
  getWhitelist(overrides?: CallOverrides): Promise<string[]>;

  /**
   * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
   * Gets all addresses that are currently included in the whitelist.
   */
  "getWhitelist()"(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
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

    whitelist(arg0: string, overrides?: CallOverrides): Promise<number>;

    "whitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    whitelistIndices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "whitelistIndices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    addToWhitelist(
      newElement: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    "addToWhitelist(address)"(
      newElement: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    removeFromWhitelist(
      elementToRemove: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    "removeFromWhitelist(address)"(
      elementToRemove: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    isOnWhitelist(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    "isOnWhitelist(address)"(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    getWhitelist(overrides?: CallOverrides): Promise<string[]>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    "getWhitelist()"(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    AddedToWhitelist(
      addedAddress: string | null
    ): TypedEventFilter<[string], { addedAddress: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RemovedFromWhitelist(
      removedAddress: string | null
    ): TypedEventFilter<[string], { removedAddress: string }>;
  };

  estimateGas: {
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

    whitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "whitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistIndices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "whitelistIndices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    addToWhitelist(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    "addToWhitelist(address)"(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    removeFromWhitelist(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    "removeFromWhitelist(address)"(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    isOnWhitelist(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    "isOnWhitelist(address)"(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    getWhitelist(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    "getWhitelist()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
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

    whitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "whitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistIndices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "whitelistIndices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    addToWhitelist(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Adds an address to the whitelist.
     * @param newElement the new address to add.
     */
    "addToWhitelist(address)"(
      newElement: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    removeFromWhitelist(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Removes an address from the whitelist.
     * @param elementToRemove the existing address to remove.
     */
    "removeFromWhitelist(address)"(
      elementToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    isOnWhitelist(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Checks whether an address is on the whitelist.
     * @param elementToCheck the address to check.
     */
    "isOnWhitelist(address)"(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    getWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Note: This method skips over, but still iterates through addresses. It is possible for this call to run out of gas if a large number of addresses have been removed. To reduce the likelihood of this unlikely scenario, we can modify the implementation so that when addresses are removed, the last addresses in the array is moved to the empty index.
     * Gets all addresses that are currently included in the whitelist.
     */
    "getWhitelist()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
