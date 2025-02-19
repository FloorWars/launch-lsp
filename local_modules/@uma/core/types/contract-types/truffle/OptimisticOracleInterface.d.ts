/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface OptimisticOracleInterfaceContract
  extends Truffle.Contract<OptimisticOracleInterfaceInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<OptimisticOracleInterfaceInstance>;
}

type AllEvents = never;

export interface OptimisticOracleInterfaceInstance
  extends Truffle.ContractInstance {
  ancillaryBytesLimit(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Requests a new price.
   * @param ancillaryData ancillary data representing additional args being passed with the price request.
   * @param currency ERC20 token used for payment of rewards and fees. Must be approved for use with the DVM.
   * @param identifier price identifier being requested.
   * @param reward reward offered to a successful proposer. Will be pulled from the caller. Note: this can be 0,               which could make sense if the contract requests and proposes the value in the same call or               provides its own reward system.
   * @param timestamp timestamp of the price being requested.
   */
  requestPrice: {
    (
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      currency: string,
      reward: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      currency: string,
      reward: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      currency: string,
      reward: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      currency: string,
      reward: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Set the proposal bond associated with a price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param bond custom bond amount to set.
   * @param identifier price identifier to identify the existing request.
   * @param timestamp timestamp to identify the existing request.
   */
  setBond: {
    (
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      bond: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      bond: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      bond: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      bond: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Sets the request to refund the reward if the proposal is disputed. This can help to "hedge" the caller in the event of a dispute-caused delay. Note: in the event of a dispute, the winner still receives the other's bond, so there is still profit to be made even if the reward is refunded.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param timestamp timestamp to identify the existing request.
   */
  setRefundOnDispute: {
    (
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Sets a custom liveness value for the request. Liveness is the amount of time a proposal must wait before being auto-resolved.
   * @param ancillaryData ancillary data of the price being requested.
   * @param customLiveness new custom liveness.
   * @param identifier price identifier to identify the existing request.
   * @param timestamp timestamp to identify the existing request.
   */
  setCustomLiveness: {
    (
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      customLiveness: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      customLiveness: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      customLiveness: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      customLiveness: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Proposes a price value on another address' behalf. Note: this address will receive any rewards that come from this proposal. However, any bonds are pulled from the caller.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param proposedPrice price being proposed.
   * @param proposer address to set as the proposer.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  proposePriceFor: {
    (
      proposer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      proposer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      proposer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      proposer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Proposes a price value for an existing price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param proposedPrice price being proposed.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  proposePrice: {
    (
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      proposedPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Disputes a price request with an active proposal on another address' behalf. Note: this address will receive any rewards that come from this dispute. However, any bonds are pulled from the caller.
   * @param ancillaryData ancillary data of the price being requested.
   * @param disputer address to set as the disputer.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  disputePriceFor: {
    (
      disputer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      disputer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      disputer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      disputer: string,
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Disputes a price value for an existing price request with an active proposal.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  disputePrice: {
    (
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Retrieves a price that was previously requested by a caller. Reverts if the request is not settled or settleable. Note: this method is not view so that this call may actually settle the price request if it hasn't been settled.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param timestamp timestamp to identify the existing request.
   */
  settleAndGetPrice: {
    (
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Attempts to settle an outstanding price request. Will revert if it isn't settleable.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  settle: {
    (
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Gets the current data structure containing all information about a price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  getRequest(
    requester: string,
    identifier: string,
    timestamp: number | BN | string,
    ancillaryData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    proposer: string;
    disputer: string;
    currency: string;
    settled: boolean;
    refundOnDispute: boolean;
    proposedPrice: BN;
    resolvedPrice: BN;
    expirationTime: BN;
    reward: BN;
    finalFee: BN;
    bond: BN;
    customLiveness: BN;
  }>;

  /**
   * Returns the state of a price request.
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  getState(
    requester: string,
    identifier: string,
    timestamp: number | BN | string,
    ancillaryData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Checks if a given request has resolved or been settled (i.e the optimistic oracle has a price).
   * @param ancillaryData ancillary data of the price being requested.
   * @param identifier price identifier to identify the existing request.
   * @param requester sender of the initial price request.
   * @param timestamp timestamp to identify the existing request.
   */
  hasPrice(
    requester: string,
    identifier: string,
    timestamp: number | BN | string,
    ancillaryData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  stampAncillaryData(
    ancillaryData: string,
    requester: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    ancillaryBytesLimit(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Requests a new price.
     * @param ancillaryData ancillary data representing additional args being passed with the price request.
     * @param currency ERC20 token used for payment of rewards and fees. Must be approved for use with the DVM.
     * @param identifier price identifier being requested.
     * @param reward reward offered to a successful proposer. Will be pulled from the caller. Note: this can be 0,               which could make sense if the contract requests and proposes the value in the same call or               provides its own reward system.
     * @param timestamp timestamp of the price being requested.
     */
    requestPrice: {
      (
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        currency: string,
        reward: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        currency: string,
        reward: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        currency: string,
        reward: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        currency: string,
        reward: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Set the proposal bond associated with a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param bond custom bond amount to set.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setBond: {
      (
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        bond: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        bond: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        bond: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        bond: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Sets the request to refund the reward if the proposal is disputed. This can help to "hedge" the caller in the event of a dispute-caused delay. Note: in the event of a dispute, the winner still receives the other's bond, so there is still profit to be made even if the reward is refunded.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setRefundOnDispute: {
      (
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Sets a custom liveness value for the request. Liveness is the amount of time a proposal must wait before being auto-resolved.
     * @param ancillaryData ancillary data of the price being requested.
     * @param customLiveness new custom liveness.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setCustomLiveness: {
      (
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        customLiveness: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        customLiveness: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        customLiveness: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        customLiveness: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Proposes a price value on another address' behalf. Note: this address will receive any rewards that come from this proposal. However, any bonds are pulled from the caller.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param proposedPrice price being proposed.
     * @param proposer address to set as the proposer.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    proposePriceFor: {
      (
        proposer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        proposer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        proposer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        proposer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Proposes a price value for an existing price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param proposedPrice price being proposed.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    proposePrice: {
      (
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        proposedPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Disputes a price request with an active proposal on another address' behalf. Note: this address will receive any rewards that come from this dispute. However, any bonds are pulled from the caller.
     * @param ancillaryData ancillary data of the price being requested.
     * @param disputer address to set as the disputer.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    disputePriceFor: {
      (
        disputer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        disputer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        disputer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        disputer: string,
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Disputes a price value for an existing price request with an active proposal.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    disputePrice: {
      (
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Retrieves a price that was previously requested by a caller. Reverts if the request is not settled or settleable. Note: this method is not view so that this call may actually settle the price request if it hasn't been settled.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    settleAndGetPrice: {
      (
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Attempts to settle an outstanding price request. Will revert if it isn't settleable.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    settle: {
      (
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        requester: string,
        identifier: string,
        timestamp: number | BN | string,
        ancillaryData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Gets the current data structure containing all information about a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    getRequest(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      proposer: string;
      disputer: string;
      currency: string;
      settled: boolean;
      refundOnDispute: boolean;
      proposedPrice: BN;
      resolvedPrice: BN;
      expirationTime: BN;
      reward: BN;
      finalFee: BN;
      bond: BN;
      customLiveness: BN;
    }>;

    /**
     * Returns the state of a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    getState(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Checks if a given request has resolved or been settled (i.e the optimistic oracle has a price).
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    hasPrice(
      requester: string,
      identifier: string,
      timestamp: number | BN | string,
      ancillaryData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    stampAncillaryData(
      ancillaryData: string,
      requester: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
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
