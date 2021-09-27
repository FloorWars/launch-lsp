/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface TokenMigratorContract
  extends Truffle.Contract<TokenMigratorInstance> {
  "new"(
    _rate: { rawValue: number | BN | string },
    _oldToken: string,
    _newToken: string,
    meta?: Truffle.TransactionDetails
  ): Promise<TokenMigratorInstance>;
}

type AllEvents = never;

export interface TokenMigratorInstance extends Truffle.ContractInstance {
  hasMigrated(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  newToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  oldToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  rate(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  snapshotId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
   * Migrates the tokenHolder's old tokens to new tokens.
   * @param tokenHolder address of the token holder to migrate.
   */
  migrateTokens: {
    (tokenHolder: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      tokenHolder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      tokenHolder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenHolder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    hasMigrated(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    newToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    oldToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    rate(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    snapshotId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * This function can only be called once per `tokenHolder`. Anyone can call this method on behalf of any other token holder since there is no disadvantage to receiving the tokens earlier.
     * Migrates the tokenHolder's old tokens to new tokens.
     * @param tokenHolder address of the token holder to migrate.
     */
    migrateTokens: {
      (tokenHolder: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        tokenHolder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        tokenHolder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenHolder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
