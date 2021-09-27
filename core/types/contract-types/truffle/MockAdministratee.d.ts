/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface MockAdministrateeContract
  extends Truffle.Contract<MockAdministrateeInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MockAdministrateeInstance>;
}

type AllEvents = never;

export interface MockAdministrateeInstance extends Truffle.ContractInstance {
  timesEmergencyShutdown(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  timesRemargined(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
   * A core contract method called independently or as a part of other financial contract transactions.
   */
  remargin: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Initiates the shutdown process, in case of an emergency.
   */
  emergencyShutdown: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
   * Gets the current profit from corruption for this contract in terms of the collateral currency.
   */
  pfc(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;

  methods: {
    timesEmergencyShutdown(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    timesRemargined(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * It pays fees and moves money between margin accounts to make sure they reflect the NAV of the contract.
     * A core contract method called independently or as a part of other financial contract transactions.
     */
    remargin: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Initiates the shutdown process, in case of an emergency.
     */
    emergencyShutdown: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * This is equivalent to the collateral pool available from which to pay fees. Therefore, derived contracts are expected to implement this so that pay-fee methods can correctly compute the owed fees as a % of PfC.
     * Gets the current profit from corruption for this contract in terms of the collateral currency.
     */
    pfc(txDetails?: Truffle.TransactionDetails): Promise<{ rawValue: BN }>;
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
