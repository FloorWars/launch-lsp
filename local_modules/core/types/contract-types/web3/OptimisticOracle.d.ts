/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type DisputePrice = ContractEventLog<{
  requester: string;
  proposer: string;
  disputer: string;
  identifier: string;
  timestamp: string;
  ancillaryData: string;
  proposedPrice: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type ProposePrice = ContractEventLog<{
  requester: string;
  proposer: string;
  identifier: string;
  timestamp: string;
  ancillaryData: string;
  proposedPrice: string;
  expirationTimestamp: string;
  currency: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
}>;
export type RequestPrice = ContractEventLog<{
  requester: string;
  identifier: string;
  timestamp: string;
  ancillaryData: string;
  currency: string;
  reward: string;
  finalFee: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type Settle = ContractEventLog<{
  requester: string;
  proposer: string;
  disputer: string;
  identifier: string;
  timestamp: string;
  ancillaryData: string;
  price: string;
  payout: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
}>;

export interface OptimisticOracle extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): OptimisticOracle;
  clone(): OptimisticOracle;
  methods: {
    ancillaryBytesLimit(): NonPayableTransactionObject<string>;

    defaultLiveness(): NonPayableTransactionObject<string>;

    finder(): NonPayableTransactionObject<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(): NonPayableTransactionObject<string>;

    requests(
      arg0: string | number[]
    ): NonPayableTransactionObject<{
      proposer: string;
      disputer: string;
      currency: string;
      settled: boolean;
      refundOnDispute: boolean;
      proposedPrice: string;
      resolvedPrice: string;
      expirationTime: string;
      reward: string;
      finalFee: string;
      bond: string;
      customLiveness: string;
      0: string;
      1: string;
      2: string;
      3: boolean;
      4: boolean;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    timerAddress(): NonPayableTransactionObject<string>;

    /**
     * Requests a new price.
     * @param ancillaryData ancillary data representing additional args being passed with the price request.
     * @param currency ERC20 token used for payment of rewards and fees. Must be approved for use with the DVM.
     * @param identifier price identifier being requested.
     * @param reward reward offered to a successful proposer. Will be pulled from the caller. Note: this can be 0,               which could make sense if the contract requests and proposes the value in the same call or               provides its own reward system.
     * @param timestamp timestamp of the price being requested.
     */
    requestPrice(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      currency: string,
      reward: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Set the proposal bond associated with a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param bond custom bond amount to set.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setBond(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      bond: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Sets the request to refund the reward if the proposal is disputed. This can help to "hedge" the caller in the event of a dispute-caused delay. Note: in the event of a dispute, the winner still receives the other's bond, so there is still profit to be made even if the reward is refunded.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setRefundOnDispute(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * Sets a custom liveness value for the request. Liveness is the amount of time a proposal must wait before being auto-resolved.
     * @param ancillaryData ancillary data of the price being requested.
     * @param customLiveness new custom liveness.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    setCustomLiveness(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      customLiveness: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Proposes a price value on another address' behalf. Note: this address will receive any rewards that come from this proposal. However, any bonds are pulled from the caller.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param proposedPrice price being proposed.
     * @param proposer address to set as the proposer.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    proposePriceFor(
      proposer: string,
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      proposedPrice: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Proposes a price value for an existing price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param proposedPrice price being proposed.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    proposePrice(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[],
      proposedPrice: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Disputes a price request with an active proposal on another address' behalf. Note: this address will receive any rewards that come from this dispute. However, any bonds are pulled from the caller.
     * @param ancillaryData ancillary data of the price being requested.
     * @param disputer address to set as the disputer.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    disputePriceFor(
      disputer: string,
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * Disputes a price value for an existing price request with an active proposal.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    disputePrice(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * Retrieves a price that was previously requested by a caller. Reverts if the request is not settled or settleable. Note: this method is not view so that this call may actually settle the price request if it hasn't been settled.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param timestamp timestamp to identify the existing request.
     */
    settleAndGetPrice(
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * Attempts to settle an outstanding price request. Will revert if it isn't settleable.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    settle(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * Gets the current data structure containing all information about a price request.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    getRequest(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        boolean,
        boolean,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    >;

    /**
     * Computes the current state of a price request. See the State enum for more details.
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    getState(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * Checks if a given request has resolved, expired or been settled (i.e the optimistic oracle has a price).
     * @param ancillaryData ancillary data of the price being requested.
     * @param identifier price identifier to identify the existing request.
     * @param requester sender of the initial price request.
     * @param timestamp timestamp to identify the existing request.
     */
    hasPrice(
      requester: string,
      identifier: string | number[],
      timestamp: number | string | BN,
      ancillaryData: string | number[]
    ): NonPayableTransactionObject<boolean>;

    /**
     * Generates stamped ancillary data in the format that it would be used in the case of a price dispute.
     * @param ancillaryData ancillary data of the price being requested.
     * @param requester sender of the initial price request.
     */
    stampAncillaryData(
      ancillaryData: string | number[],
      requester: string
    ): NonPayableTransactionObject<string>;
  };
  events: {
    DisputePrice(cb?: Callback<DisputePrice>): EventEmitter;
    DisputePrice(
      options?: EventOptions,
      cb?: Callback<DisputePrice>
    ): EventEmitter;

    ProposePrice(cb?: Callback<ProposePrice>): EventEmitter;
    ProposePrice(
      options?: EventOptions,
      cb?: Callback<ProposePrice>
    ): EventEmitter;

    RequestPrice(cb?: Callback<RequestPrice>): EventEmitter;
    RequestPrice(
      options?: EventOptions,
      cb?: Callback<RequestPrice>
    ): EventEmitter;

    Settle(cb?: Callback<Settle>): EventEmitter;
    Settle(options?: EventOptions, cb?: Callback<Settle>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "DisputePrice", cb: Callback<DisputePrice>): void;
  once(
    event: "DisputePrice",
    options: EventOptions,
    cb: Callback<DisputePrice>
  ): void;

  once(event: "ProposePrice", cb: Callback<ProposePrice>): void;
  once(
    event: "ProposePrice",
    options: EventOptions,
    cb: Callback<ProposePrice>
  ): void;

  once(event: "RequestPrice", cb: Callback<RequestPrice>): void;
  once(
    event: "RequestPrice",
    options: EventOptions,
    cb: Callback<RequestPrice>
  ): void;

  once(event: "Settle", cb: Callback<Settle>): void;
  once(event: "Settle", options: EventOptions, cb: Callback<Settle>): void;
}