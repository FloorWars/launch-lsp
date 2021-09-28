/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface SourceGovernorContract
  extends Truffle.Contract<SourceGovernorInstance> {
  "new"(
    _finder: string,
    _currentChainId: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<SourceGovernorInstance>;
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface RelayedGovernanceRequest {
  name: "RelayedGovernanceRequest";
  args: {
    destinationChainId: BN;
    to: string;
    data: string;
    0: BN;
    1: string;
    2: string;
  };
}

type AllEvents = OwnershipTransferred | RelayedGovernanceRequest;

export interface SourceGovernorInstance extends Truffle.ContractInstance {
  currentChainId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * The transaction submitted to `to` on the sidechain with the calldata `data` is assumed to have 0 `value` in order to avoid the added complexity of sending cross-chain transactions with positive value.
   * This is the first method that should be called in order to relay a governance request to another network marked by `destinationChainId`. Note: this can only be called by the owner (presumably the L1 governor).
   * @param data Calldata to include in governance transaction.
   * @param destinationChainId Chain ID of SinkGovernor that this governance request should ultimately be sent to.
   * @param to Contract on network with chain ID `destinationChainId` to send governance transaction to.
   */
  relayGovernance: {
    (
      destinationChainId: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      destinationChainId: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      destinationChainId: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      destinationChainId: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * This method should basically check that the `Bridge.deposit()` was triggered by a valid relay event.
   * This method will ultimately be called after `relayGovernance` calls `Bridge.deposit()`, which will call `GenericHandler.deposit()` and ultimately this method.
   * @param data Calldata to include in governance transaction.
   * @param to Contract on network with chain ID `destinationChainId` to send governance transaction to.
   */
  verifyRequest(
    to: string,
    data: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  /**
   * More details about Resource ID's here: https://chainbridge.chainsafe.io/spec/#resource-id
   * Gets the resource id to send to the bridge.
   */
  getResourceId(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    currentChainId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * The transaction submitted to `to` on the sidechain with the calldata `data` is assumed to have 0 `value` in order to avoid the added complexity of sending cross-chain transactions with positive value.
     * This is the first method that should be called in order to relay a governance request to another network marked by `destinationChainId`. Note: this can only be called by the owner (presumably the L1 governor).
     * @param data Calldata to include in governance transaction.
     * @param destinationChainId Chain ID of SinkGovernor that this governance request should ultimately be sent to.
     * @param to Contract on network with chain ID `destinationChainId` to send governance transaction to.
     */
    relayGovernance: {
      (
        destinationChainId: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        destinationChainId: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        destinationChainId: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        destinationChainId: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * This method should basically check that the `Bridge.deposit()` was triggered by a valid relay event.
     * This method will ultimately be called after `relayGovernance` calls `Bridge.deposit()`, which will call `GenericHandler.deposit()` and ultimately this method.
     * @param data Calldata to include in governance transaction.
     * @param to Contract on network with chain ID `destinationChainId` to send governance transaction to.
     */
    verifyRequest(
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;

    /**
     * More details about Resource ID's here: https://chainbridge.chainsafe.io/spec/#resource-id
     * Gets the resource id to send to the bridge.
     */
    getResourceId(txDetails?: Truffle.TransactionDetails): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}