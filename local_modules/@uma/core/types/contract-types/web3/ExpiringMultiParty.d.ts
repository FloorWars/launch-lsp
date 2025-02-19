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

export type ContractExpired = ContractEventLog<{
  caller: string;
  0: string;
}>;
export type Deposit = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;
export type DisputeSettled = ContractEventLog<{
  caller: string;
  sponsor: string;
  liquidator: string;
  disputer: string;
  liquidationId: string;
  disputeSucceeded: boolean;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: boolean;
}>;
export type EmergencyShutdown = ContractEventLog<{
  caller: string;
  originalExpirationTimestamp: string;
  shutdownTimestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type EndedSponsorPosition = ContractEventLog<{
  sponsor: string;
  0: string;
}>;
export type FinalFeesPaid = ContractEventLog<{
  amount: string;
  0: string;
}>;
export type LiquidationCreated = ContractEventLog<{
  sponsor: string;
  liquidator: string;
  liquidationId: string;
  tokensOutstanding: string;
  lockedCollateral: string;
  liquidatedCollateral: string;
  liquidationTime: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type LiquidationDisputed = ContractEventLog<{
  sponsor: string;
  liquidator: string;
  disputer: string;
  liquidationId: string;
  disputeBondAmount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type LiquidationWithdrawn = ContractEventLog<{
  caller: string;
  paidToLiquidator: string;
  paidToDisputer: string;
  paidToSponsor: string;
  liquidationStatus: string;
  settlementPrice: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type NewSponsor = ContractEventLog<{
  sponsor: string;
  0: string;
}>;
export type PositionCreated = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  tokenAmount: string;
  0: string;
  1: string;
  2: string;
}>;
export type Redeem = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  tokenAmount: string;
  0: string;
  1: string;
  2: string;
}>;
export type RegularFeesPaid = ContractEventLog<{
  regularFee: string;
  lateFee: string;
  0: string;
  1: string;
}>;
export type Repay = ContractEventLog<{
  sponsor: string;
  numTokensRepaid: string;
  newTokenCount: string;
  0: string;
  1: string;
  2: string;
}>;
export type RequestTransferPosition = ContractEventLog<{
  oldSponsor: string;
  0: string;
}>;
export type RequestTransferPositionCanceled = ContractEventLog<{
  oldSponsor: string;
  0: string;
}>;
export type RequestTransferPositionExecuted = ContractEventLog<{
  oldSponsor: string;
  newSponsor: string;
  0: string;
  1: string;
}>;
export type RequestWithdrawal = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;
export type RequestWithdrawalCanceled = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;
export type RequestWithdrawalExecuted = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;
export type SettleExpiredPosition = ContractEventLog<{
  caller: string;
  collateralReturned: string;
  tokensBurned: string;
  0: string;
  1: string;
  2: string;
}>;
export type Withdrawal = ContractEventLog<{
  sponsor: string;
  collateralAmount: string;
  0: string;
  1: string;
}>;

export interface ExpiringMultiParty extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ExpiringMultiParty;
  clone(): ExpiringMultiParty;
  methods: {
    _getSyntheticDecimals(
      _collateralAddress: string
    ): NonPayableTransactionObject<string>;

    /**
     * Cancels a pending transfer position request.
     */
    cancelTransferPosition(): NonPayableTransactionObject<void>;

    /**
     * Cancels a pending withdrawal request.
     */
    cancelWithdrawal(): NonPayableTransactionObject<void>;

    collateralCurrency(): NonPayableTransactionObject<string>;

    collateralRequirement(): NonPayableTransactionObject<string>;

    contractState(): NonPayableTransactionObject<string>;

    create(
      collateralAmount: [number | string | BN],
      numTokens: [number | string | BN]
    ): NonPayableTransactionObject<void>;

    createLiquidation(
      sponsor: string,
      minCollateralPerToken: [number | string | BN],
      maxCollateralPerToken: [number | string | BN],
      maxTokensToLiquidate: [number | string | BN],
      deadline: number | string | BN
    ): NonPayableTransactionObject<{
      liquidationId: string;
      tokensLiquidated: [string];
      finalFeeBond: [string];
      0: string;
      1: [string];
      2: [string];
    }>;

    cumulativeFeeMultiplier(): NonPayableTransactionObject<string>;

    deposit(
      collateralAmount: [number | string | BN]
    ): NonPayableTransactionObject<void>;

    depositTo(
      sponsor: string,
      collateralAmount: [number | string | BN]
    ): NonPayableTransactionObject<void>;

    /**
     * Can only dispute a liquidation before the liquidation expires and if there are no other pending disputes. This contract must be approved to spend at least the dispute bond amount of `collateralCurrency`. This dispute bond amount is calculated from `disputeBondPercentage` times the collateral in the liquidation.
     * Disputes a liquidation, if the caller has enough collateral to post a dispute bond and pay a fixed final fee charged on each price request.
     * @param liquidationId of the disputed liquidation.
     * @param sponsor the address of the sponsor whose liquidation is being disputed.
     */
    dispute(
      liquidationId: number | string | BN,
      sponsor: string
    ): NonPayableTransactionObject<[string]>;

    disputeBondPercentage(): NonPayableTransactionObject<string>;

    disputerDisputeRewardPercentage(): NonPayableTransactionObject<string>;

    /**
     * Only the governor can call this function as they are permissioned within the `FinancialContractAdmin`. Upon emergency shutdown, the contract settlement time is set to the shutdown time. This enables withdrawal to occur via the standard `settleExpired` function. Contract state is set to `ExpiredPriceRequested` which prevents re-entry into this function or the `expire` function. No fees are paid when calling `emergencyShutdown` as the governor who would call the function would also receive the fees.
     * Premature contract settlement under emergency circumstances.
     */
    emergencyShutdown(): NonPayableTransactionObject<void>;

    expirationTimestamp(): NonPayableTransactionObject<string>;

    /**
     * this function can only be called once the contract is expired and can't be re-called.
     * Locks contract state in expired and requests oracle price.
     */
    expire(): NonPayableTransactionObject<void>;

    expiryPrice(): NonPayableTransactionObject<string>;

    financialProductLibrary(): NonPayableTransactionObject<string>;

    finder(): NonPayableTransactionObject<string>;

    /**
     * This is necessary because the struct returned by the positions() method shows rawCollateral, which isn't a user-readable value.This method accounts for pending regular fees that have not yet been withdrawn from this contract, for example if the `lastPaymentTime != currentTime`.
     * Accessor method for a sponsor's collateral.
     * @param sponsor address whose collateral amount is retrieved.
     */
    getCollateral(sponsor: string): NonPayableTransactionObject<[string]>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(): NonPayableTransactionObject<string>;

    /**
     * Gets all liquidation information for a given sponsor address.
     * @param sponsor address of the position sponsor.
     */
    getLiquidations(
      sponsor: string
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        string,
        [string],
        [string],
        [string],
        [string],
        string,
        [string],
        [string]
      ][]
    >;

    /**
     * This returns 0 and exit early if there is no pfc, fees were already paid during the current block, or the fee rate is 0.
     * Fetch any regular fees that the contract has pending but has not yet paid. If the fees to be paid are more than the total collateral within the contract then the totalPaid returned is full contract collateral amount.
     */
    getOutstandingRegularFees(
      time: number | string | BN
    ): NonPayableTransactionObject<{
      regularFee: [string];
      latePenalty: [string];
      totalPaid: [string];
      0: [string];
      1: [string];
      2: [string];
    }>;

    /**
     * Multiplying the `cumulativeFeeMultiplier` by the ratio of non-PfC-collateral :: PfC-collateral effectively pays all sponsors a pro-rata portion of the excess collateral.This will revert if PfC is 0 and this contract's collateral balance > 0.
     * Removes excess collateral balance not counted in the PfC by distributing it out pro-rata to all sponsors.
     */
    gulp(): NonPayableTransactionObject<void>;

    liquidationLiveness(): NonPayableTransactionObject<string>;

    liquidations(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<{
      sponsor: string;
      liquidator: string;
      state: string;
      liquidationTime: string;
      tokensOutstanding: [string];
      lockedCollateral: [string];
      liquidatedCollateral: [string];
      rawUnitCollateral: [string];
      disputer: string;
      settlementPrice: [string];
      finalFee: [string];
      0: string;
      1: string;
      2: string;
      3: string;
      4: [string];
      5: [string];
      6: [string];
      7: [string];
      8: string;
      9: [string];
      10: [string];
    }>;

    minSponsorTokens(): NonPayableTransactionObject<string>;

    /**
     * These must be paid periodically for the life of the contract. If the contract has not paid its regular fee in a week or more then a late penalty is applied which is sent to the caller. If the amount of fees owed are greater than the pfc, then this will pay as much as possible from the available collateral. An event is only fired if the fees charged are greater than 0.
     * Pays UMA DVM regular fees (as a % of the collateral pool) to the Store contract.
     */
    payRegularFees(): NonPayableTransactionObject<[string]>;

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(): NonPayableTransactionObject<[string]>;

    positions(
      arg0: string
    ): NonPayableTransactionObject<{
      tokensOutstanding: [string];
      withdrawalRequestPassTimestamp: string;
      withdrawalRequestAmount: [string];
      rawCollateral: [string];
      transferPositionRequestPassTimestamp: string;
      0: [string];
      1: string;
      2: [string];
      3: [string];
      4: string;
    }>;

    priceIdentifier(): NonPayableTransactionObject<string>;

    rawLiquidationCollateral(): NonPayableTransactionObject<string>;

    rawTotalPositionCollateral(): NonPayableTransactionObject<string>;

    redeem(
      numTokens: [number | string | BN]
    ): NonPayableTransactionObject<[string]>;

    /**
     * This is supposed to be implemented by any contract that inherits `AdministrateeInterface` and callable only by the Governor contract. This method is therefore minimally implemented in this contract and does nothing.
     * Theoretically supposed to pay fees and move money between margin accounts to make sure they reflect the NAV of the contract. However, this functionality doesn't apply to this contract.
     */
    remargin(): NonPayableTransactionObject<void>;

    repay(numTokens: [number | string | BN]): NonPayableTransactionObject<void>;

    /**
     * The liveness length is the same as the withdrawal liveness.
     * Requests to transfer ownership of the caller's current position to a new sponsor address. Once the request liveness is passed, the sponsor can execute the transfer and specify the new sponsor.
     */
    requestTransferPosition(): NonPayableTransactionObject<void>;

    requestWithdrawal(
      collateralAmount: [number | string | BN]
    ): NonPayableTransactionObject<void>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime(
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * This burns all tokens from the caller of `tokenCurrency` and sends back the proportional amount of `collateralCurrency`. Might not redeem the full proportional amount of collateral in order to account for precision loss. This contract must be approved to spend `tokenCurrency` at least up to the caller's full balance.This contract must have the Burner role for the `tokenCurrency`.
     * After a contract has passed expiry all token holders can redeem their tokens for underlying at the prevailing price defined by the DVM from the `expire` function.
     */
    settleExpired(): NonPayableTransactionObject<[string]>;

    sponsorDisputeRewardPercentage(): NonPayableTransactionObject<string>;

    timerAddress(): NonPayableTransactionObject<string>;

    tokenCurrency(): NonPayableTransactionObject<string>;

    /**
     * This method accounts for pending regular fees that have not yet been withdrawn from this contract, for example if the `lastPaymentTime != currentTime`.
     * Accessor method for the total collateral stored within the PricelessPositionManager.
     */
    totalPositionCollateral(): NonPayableTransactionObject<[string]>;

    totalTokensOutstanding(): NonPayableTransactionObject<string>;

    /**
     * Transferring positions can only occur if the recipient does not already have a position.
     * After a passed transfer position request (i.e., by a call to `requestTransferPosition` and waiting `withdrawalLiveness`), transfers ownership of the caller's current position to `newSponsorAddress`.
     * @param newSponsorAddress is the address to which the position will be transferred.
     */
    transferPositionPassedRequest(
      newSponsorAddress: string
    ): NonPayableTransactionObject<void>;

    transformCollateralRequirement(
      price: [number | string | BN]
    ): NonPayableTransactionObject<[string]>;

    transformPrice(
      price: [number | string | BN],
      requestTime: number | string | BN
    ): NonPayableTransactionObject<[string]>;

    /**
     * This method should never revert.
     * Accessor method to compute a transformed price identifier using the finanicalProductLibrary specified at contract deployment. If no library was provided then no modification to the identifier is done.
     * @param requestTime timestamp the identifier is to be used at.
     */
    transformPriceIdentifier(
      requestTime: number | string | BN
    ): NonPayableTransactionObject<string>;

    withdraw(
      collateralAmount: [number | string | BN]
    ): NonPayableTransactionObject<[string]>;

    /**
     * If the dispute SUCCEEDED: the sponsor, liquidator, and disputer are eligible for payment. If the dispute FAILED: only the liquidator can receive payment. This method will revert if rewards have already been dispersed.
     * After a dispute has settled or after a non-disputed liquidation has expired, anyone can call this method to disperse payments to the sponsor, liquidator, and disdputer.
     * @param liquidationId uniquely identifies the sponsor's liquidation.
     * @param sponsor address of the sponsor associated with the liquidation.
     */
    withdrawLiquidation(
      liquidationId: number | string | BN,
      sponsor: string
    ): NonPayableTransactionObject<
      [[string], [string], [string], [string], [string], [string]]
    >;

    /**
     * Might not withdraw the full requested amount in order to account for precision loss or if the full requested amount exceeds the collateral in the position (due to paying fees).
     * After a passed withdrawal request (i.e., by a call to `requestWithdrawal` and waiting `withdrawalLiveness`), withdraws `positionData.withdrawalRequestAmount` of collateral currency.
     */
    withdrawPassedRequest(): NonPayableTransactionObject<[string]>;

    withdrawalLiveness(): NonPayableTransactionObject<string>;
  };
  events: {
    ContractExpired(cb?: Callback<ContractExpired>): EventEmitter;
    ContractExpired(
      options?: EventOptions,
      cb?: Callback<ContractExpired>
    ): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    DisputeSettled(cb?: Callback<DisputeSettled>): EventEmitter;
    DisputeSettled(
      options?: EventOptions,
      cb?: Callback<DisputeSettled>
    ): EventEmitter;

    EmergencyShutdown(cb?: Callback<EmergencyShutdown>): EventEmitter;
    EmergencyShutdown(
      options?: EventOptions,
      cb?: Callback<EmergencyShutdown>
    ): EventEmitter;

    EndedSponsorPosition(cb?: Callback<EndedSponsorPosition>): EventEmitter;
    EndedSponsorPosition(
      options?: EventOptions,
      cb?: Callback<EndedSponsorPosition>
    ): EventEmitter;

    FinalFeesPaid(cb?: Callback<FinalFeesPaid>): EventEmitter;
    FinalFeesPaid(
      options?: EventOptions,
      cb?: Callback<FinalFeesPaid>
    ): EventEmitter;

    LiquidationCreated(cb?: Callback<LiquidationCreated>): EventEmitter;
    LiquidationCreated(
      options?: EventOptions,
      cb?: Callback<LiquidationCreated>
    ): EventEmitter;

    LiquidationDisputed(cb?: Callback<LiquidationDisputed>): EventEmitter;
    LiquidationDisputed(
      options?: EventOptions,
      cb?: Callback<LiquidationDisputed>
    ): EventEmitter;

    LiquidationWithdrawn(cb?: Callback<LiquidationWithdrawn>): EventEmitter;
    LiquidationWithdrawn(
      options?: EventOptions,
      cb?: Callback<LiquidationWithdrawn>
    ): EventEmitter;

    NewSponsor(cb?: Callback<NewSponsor>): EventEmitter;
    NewSponsor(options?: EventOptions, cb?: Callback<NewSponsor>): EventEmitter;

    PositionCreated(cb?: Callback<PositionCreated>): EventEmitter;
    PositionCreated(
      options?: EventOptions,
      cb?: Callback<PositionCreated>
    ): EventEmitter;

    Redeem(cb?: Callback<Redeem>): EventEmitter;
    Redeem(options?: EventOptions, cb?: Callback<Redeem>): EventEmitter;

    RegularFeesPaid(cb?: Callback<RegularFeesPaid>): EventEmitter;
    RegularFeesPaid(
      options?: EventOptions,
      cb?: Callback<RegularFeesPaid>
    ): EventEmitter;

    Repay(cb?: Callback<Repay>): EventEmitter;
    Repay(options?: EventOptions, cb?: Callback<Repay>): EventEmitter;

    RequestTransferPosition(
      cb?: Callback<RequestTransferPosition>
    ): EventEmitter;
    RequestTransferPosition(
      options?: EventOptions,
      cb?: Callback<RequestTransferPosition>
    ): EventEmitter;

    RequestTransferPositionCanceled(
      cb?: Callback<RequestTransferPositionCanceled>
    ): EventEmitter;
    RequestTransferPositionCanceled(
      options?: EventOptions,
      cb?: Callback<RequestTransferPositionCanceled>
    ): EventEmitter;

    RequestTransferPositionExecuted(
      cb?: Callback<RequestTransferPositionExecuted>
    ): EventEmitter;
    RequestTransferPositionExecuted(
      options?: EventOptions,
      cb?: Callback<RequestTransferPositionExecuted>
    ): EventEmitter;

    RequestWithdrawal(cb?: Callback<RequestWithdrawal>): EventEmitter;
    RequestWithdrawal(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawal>
    ): EventEmitter;

    RequestWithdrawalCanceled(
      cb?: Callback<RequestWithdrawalCanceled>
    ): EventEmitter;
    RequestWithdrawalCanceled(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawalCanceled>
    ): EventEmitter;

    RequestWithdrawalExecuted(
      cb?: Callback<RequestWithdrawalExecuted>
    ): EventEmitter;
    RequestWithdrawalExecuted(
      options?: EventOptions,
      cb?: Callback<RequestWithdrawalExecuted>
    ): EventEmitter;

    SettleExpiredPosition(cb?: Callback<SettleExpiredPosition>): EventEmitter;
    SettleExpiredPosition(
      options?: EventOptions,
      cb?: Callback<SettleExpiredPosition>
    ): EventEmitter;

    Withdrawal(cb?: Callback<Withdrawal>): EventEmitter;
    Withdrawal(options?: EventOptions, cb?: Callback<Withdrawal>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ContractExpired", cb: Callback<ContractExpired>): void;
  once(
    event: "ContractExpired",
    options: EventOptions,
    cb: Callback<ContractExpired>
  ): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "DisputeSettled", cb: Callback<DisputeSettled>): void;
  once(
    event: "DisputeSettled",
    options: EventOptions,
    cb: Callback<DisputeSettled>
  ): void;

  once(event: "EmergencyShutdown", cb: Callback<EmergencyShutdown>): void;
  once(
    event: "EmergencyShutdown",
    options: EventOptions,
    cb: Callback<EmergencyShutdown>
  ): void;

  once(event: "EndedSponsorPosition", cb: Callback<EndedSponsorPosition>): void;
  once(
    event: "EndedSponsorPosition",
    options: EventOptions,
    cb: Callback<EndedSponsorPosition>
  ): void;

  once(event: "FinalFeesPaid", cb: Callback<FinalFeesPaid>): void;
  once(
    event: "FinalFeesPaid",
    options: EventOptions,
    cb: Callback<FinalFeesPaid>
  ): void;

  once(event: "LiquidationCreated", cb: Callback<LiquidationCreated>): void;
  once(
    event: "LiquidationCreated",
    options: EventOptions,
    cb: Callback<LiquidationCreated>
  ): void;

  once(event: "LiquidationDisputed", cb: Callback<LiquidationDisputed>): void;
  once(
    event: "LiquidationDisputed",
    options: EventOptions,
    cb: Callback<LiquidationDisputed>
  ): void;

  once(event: "LiquidationWithdrawn", cb: Callback<LiquidationWithdrawn>): void;
  once(
    event: "LiquidationWithdrawn",
    options: EventOptions,
    cb: Callback<LiquidationWithdrawn>
  ): void;

  once(event: "NewSponsor", cb: Callback<NewSponsor>): void;
  once(
    event: "NewSponsor",
    options: EventOptions,
    cb: Callback<NewSponsor>
  ): void;

  once(event: "PositionCreated", cb: Callback<PositionCreated>): void;
  once(
    event: "PositionCreated",
    options: EventOptions,
    cb: Callback<PositionCreated>
  ): void;

  once(event: "Redeem", cb: Callback<Redeem>): void;
  once(event: "Redeem", options: EventOptions, cb: Callback<Redeem>): void;

  once(event: "RegularFeesPaid", cb: Callback<RegularFeesPaid>): void;
  once(
    event: "RegularFeesPaid",
    options: EventOptions,
    cb: Callback<RegularFeesPaid>
  ): void;

  once(event: "Repay", cb: Callback<Repay>): void;
  once(event: "Repay", options: EventOptions, cb: Callback<Repay>): void;

  once(
    event: "RequestTransferPosition",
    cb: Callback<RequestTransferPosition>
  ): void;
  once(
    event: "RequestTransferPosition",
    options: EventOptions,
    cb: Callback<RequestTransferPosition>
  ): void;

  once(
    event: "RequestTransferPositionCanceled",
    cb: Callback<RequestTransferPositionCanceled>
  ): void;
  once(
    event: "RequestTransferPositionCanceled",
    options: EventOptions,
    cb: Callback<RequestTransferPositionCanceled>
  ): void;

  once(
    event: "RequestTransferPositionExecuted",
    cb: Callback<RequestTransferPositionExecuted>
  ): void;
  once(
    event: "RequestTransferPositionExecuted",
    options: EventOptions,
    cb: Callback<RequestTransferPositionExecuted>
  ): void;

  once(event: "RequestWithdrawal", cb: Callback<RequestWithdrawal>): void;
  once(
    event: "RequestWithdrawal",
    options: EventOptions,
    cb: Callback<RequestWithdrawal>
  ): void;

  once(
    event: "RequestWithdrawalCanceled",
    cb: Callback<RequestWithdrawalCanceled>
  ): void;
  once(
    event: "RequestWithdrawalCanceled",
    options: EventOptions,
    cb: Callback<RequestWithdrawalCanceled>
  ): void;

  once(
    event: "RequestWithdrawalExecuted",
    cb: Callback<RequestWithdrawalExecuted>
  ): void;
  once(
    event: "RequestWithdrawalExecuted",
    options: EventOptions,
    cb: Callback<RequestWithdrawalExecuted>
  ): void;

  once(
    event: "SettleExpiredPosition",
    cb: Callback<SettleExpiredPosition>
  ): void;
  once(
    event: "SettleExpiredPosition",
    options: EventOptions,
    cb: Callback<SettleExpiredPosition>
  ): void;

  once(event: "Withdrawal", cb: Callback<Withdrawal>): void;
  once(
    event: "Withdrawal",
    options: EventOptions,
    cb: Callback<Withdrawal>
  ): void;
}
