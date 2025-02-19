/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LongShortPairCreatorContract
  extends Truffle.Contract<LongShortPairCreatorInstance> {
  "new"(
    _finder: string,
    _tokenFactory: string,
    _timer: string,
    meta?: Truffle.TransactionDetails
  ): Promise<LongShortPairCreatorInstance>;
}

export interface CreatedLongShortPair {
  name: "CreatedLongShortPair";
  args: {
    longShortPair: string;
    deployerAddress: string;
    longToken: string;
    shortToken: string;
    0: string;
    1: string;
    2: string;
    3: string;
  };
}

type AllEvents = CreatedLongShortPair;

export interface LongShortPairCreatorInstance extends Truffle.ContractInstance {
  finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  setCurrentTime: {
    (
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  tokenFactory(txDetails?: Truffle.TransactionDetails): Promise<string>;

  createLongShortPair: {
    (
      params: {
        pairName: string;
        expirationTimestamp: number | BN | string;
        collateralPerPair: number | BN | string;
        priceIdentifier: string;
        longSynthName: string;
        longSynthSymbol: string;
        shortSynthName: string;
        shortSynthSymbol: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: string;
        prepaidProposerReward: number | BN | string;
        optimisticOracleLivenessTime: number | BN | string;
        optimisticOracleProposerBond: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        pairName: string;
        expirationTimestamp: number | BN | string;
        collateralPerPair: number | BN | string;
        priceIdentifier: string;
        longSynthName: string;
        longSynthSymbol: string;
        shortSynthName: string;
        shortSynthSymbol: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: string;
        prepaidProposerReward: number | BN | string;
        optimisticOracleLivenessTime: number | BN | string;
        optimisticOracleProposerBond: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      params: {
        pairName: string;
        expirationTimestamp: number | BN | string;
        collateralPerPair: number | BN | string;
        priceIdentifier: string;
        longSynthName: string;
        longSynthSymbol: string;
        shortSynthName: string;
        shortSynthSymbol: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: string;
        prepaidProposerReward: number | BN | string;
        optimisticOracleLivenessTime: number | BN | string;
        optimisticOracleProposerBond: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        pairName: string;
        expirationTimestamp: number | BN | string;
        collateralPerPair: number | BN | string;
        priceIdentifier: string;
        longSynthName: string;
        longSynthSymbol: string;
        shortSynthName: string;
        shortSynthSymbol: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: string;
        prepaidProposerReward: number | BN | string;
        optimisticOracleLivenessTime: number | BN | string;
        optimisticOracleProposerBond: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    finder(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime: {
      (
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    tokenFactory(txDetails?: Truffle.TransactionDetails): Promise<string>;

    createLongShortPair: {
      (
        params: {
          pairName: string;
          expirationTimestamp: number | BN | string;
          collateralPerPair: number | BN | string;
          priceIdentifier: string;
          longSynthName: string;
          longSynthSymbol: string;
          shortSynthName: string;
          shortSynthSymbol: string;
          collateralToken: string;
          financialProductLibrary: string;
          customAncillaryData: string;
          prepaidProposerReward: number | BN | string;
          optimisticOracleLivenessTime: number | BN | string;
          optimisticOracleProposerBond: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          pairName: string;
          expirationTimestamp: number | BN | string;
          collateralPerPair: number | BN | string;
          priceIdentifier: string;
          longSynthName: string;
          longSynthSymbol: string;
          shortSynthName: string;
          shortSynthSymbol: string;
          collateralToken: string;
          financialProductLibrary: string;
          customAncillaryData: string;
          prepaidProposerReward: number | BN | string;
          optimisticOracleLivenessTime: number | BN | string;
          optimisticOracleProposerBond: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        params: {
          pairName: string;
          expirationTimestamp: number | BN | string;
          collateralPerPair: number | BN | string;
          priceIdentifier: string;
          longSynthName: string;
          longSynthSymbol: string;
          shortSynthName: string;
          shortSynthSymbol: string;
          collateralToken: string;
          financialProductLibrary: string;
          customAncillaryData: string;
          prepaidProposerReward: number | BN | string;
          optimisticOracleLivenessTime: number | BN | string;
          optimisticOracleProposerBond: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          pairName: string;
          expirationTimestamp: number | BN | string;
          collateralPerPair: number | BN | string;
          priceIdentifier: string;
          longSynthName: string;
          longSynthSymbol: string;
          shortSynthName: string;
          shortSynthSymbol: string;
          collateralToken: string;
          financialProductLibrary: string;
          customAncillaryData: string;
          prepaidProposerReward: number | BN | string;
          optimisticOracleLivenessTime: number | BN | string;
          optimisticOracleProposerBond: number | BN | string;
        },
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
