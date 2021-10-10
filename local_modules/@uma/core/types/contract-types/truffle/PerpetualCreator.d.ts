/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface PerpetualCreatorContract
  extends Truffle.Contract<PerpetualCreatorInstance> {
  "new"(
    _finderAddress: string,
    _tokenFactoryAddress: string,
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<PerpetualCreatorInstance>;
}

export interface CreatedConfigStore {
  name: "CreatedConfigStore";
  args: {
    configStoreAddress: string;
    ownerAddress: string;
    0: string;
    1: string;
  };
}

export interface CreatedPerpetual {
  name: "CreatedPerpetual";
  args: {
    perpetualAddress: string;
    deployerAddress: string;
    0: string;
    1: string;
  };
}

type AllEvents = CreatedConfigStore | CreatedPerpetual;

export interface PerpetualCreatorInstance extends Truffle.ContractInstance {
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

  tokenFactoryAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  createPerpetual: {
    (
      params: {
        collateralAddress: string;
        priceFeedIdentifier: string;
        fundingRateIdentifier: string;
        syntheticName: string;
        syntheticSymbol: string;
        collateralRequirement: { rawValue: number | BN | string };
        disputeBondPercentage: { rawValue: number | BN | string };
        sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
        disputerDisputeRewardPercentage: { rawValue: number | BN | string };
        minSponsorTokens: { rawValue: number | BN | string };
        tokenScaling: { rawValue: number | BN | string };
        withdrawalLiveness: number | BN | string;
        liquidationLiveness: number | BN | string;
      },
      configSettings: {
        timelockLiveness: number | BN | string;
        rewardRatePerSecond: { rawValue: number | BN | string };
        proposerBondPercentage: { rawValue: number | BN | string };
        maxFundingRate: { rawValue: number | BN | string };
        minFundingRate: { rawValue: number | BN | string };
        proposalTimePastLimit: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        collateralAddress: string;
        priceFeedIdentifier: string;
        fundingRateIdentifier: string;
        syntheticName: string;
        syntheticSymbol: string;
        collateralRequirement: { rawValue: number | BN | string };
        disputeBondPercentage: { rawValue: number | BN | string };
        sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
        disputerDisputeRewardPercentage: { rawValue: number | BN | string };
        minSponsorTokens: { rawValue: number | BN | string };
        tokenScaling: { rawValue: number | BN | string };
        withdrawalLiveness: number | BN | string;
        liquidationLiveness: number | BN | string;
      },
      configSettings: {
        timelockLiveness: number | BN | string;
        rewardRatePerSecond: { rawValue: number | BN | string };
        proposerBondPercentage: { rawValue: number | BN | string };
        maxFundingRate: { rawValue: number | BN | string };
        minFundingRate: { rawValue: number | BN | string };
        proposalTimePastLimit: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      params: {
        collateralAddress: string;
        priceFeedIdentifier: string;
        fundingRateIdentifier: string;
        syntheticName: string;
        syntheticSymbol: string;
        collateralRequirement: { rawValue: number | BN | string };
        disputeBondPercentage: { rawValue: number | BN | string };
        sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
        disputerDisputeRewardPercentage: { rawValue: number | BN | string };
        minSponsorTokens: { rawValue: number | BN | string };
        tokenScaling: { rawValue: number | BN | string };
        withdrawalLiveness: number | BN | string;
        liquidationLiveness: number | BN | string;
      },
      configSettings: {
        timelockLiveness: number | BN | string;
        rewardRatePerSecond: { rawValue: number | BN | string };
        proposerBondPercentage: { rawValue: number | BN | string };
        maxFundingRate: { rawValue: number | BN | string };
        minFundingRate: { rawValue: number | BN | string };
        proposalTimePastLimit: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        collateralAddress: string;
        priceFeedIdentifier: string;
        fundingRateIdentifier: string;
        syntheticName: string;
        syntheticSymbol: string;
        collateralRequirement: { rawValue: number | BN | string };
        disputeBondPercentage: { rawValue: number | BN | string };
        sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
        disputerDisputeRewardPercentage: { rawValue: number | BN | string };
        minSponsorTokens: { rawValue: number | BN | string };
        tokenScaling: { rawValue: number | BN | string };
        withdrawalLiveness: number | BN | string;
        liquidationLiveness: number | BN | string;
      },
      configSettings: {
        timelockLiveness: number | BN | string;
        rewardRatePerSecond: { rawValue: number | BN | string };
        proposerBondPercentage: { rawValue: number | BN | string };
        maxFundingRate: { rawValue: number | BN | string };
        minFundingRate: { rawValue: number | BN | string };
        proposalTimePastLimit: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  _getSyntheticDecimals(
    _collateralAddress: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
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

    tokenFactoryAddress(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    createPerpetual: {
      (
        params: {
          collateralAddress: string;
          priceFeedIdentifier: string;
          fundingRateIdentifier: string;
          syntheticName: string;
          syntheticSymbol: string;
          collateralRequirement: { rawValue: number | BN | string };
          disputeBondPercentage: { rawValue: number | BN | string };
          sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
          disputerDisputeRewardPercentage: { rawValue: number | BN | string };
          minSponsorTokens: { rawValue: number | BN | string };
          tokenScaling: { rawValue: number | BN | string };
          withdrawalLiveness: number | BN | string;
          liquidationLiveness: number | BN | string;
        },
        configSettings: {
          timelockLiveness: number | BN | string;
          rewardRatePerSecond: { rawValue: number | BN | string };
          proposerBondPercentage: { rawValue: number | BN | string };
          maxFundingRate: { rawValue: number | BN | string };
          minFundingRate: { rawValue: number | BN | string };
          proposalTimePastLimit: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          collateralAddress: string;
          priceFeedIdentifier: string;
          fundingRateIdentifier: string;
          syntheticName: string;
          syntheticSymbol: string;
          collateralRequirement: { rawValue: number | BN | string };
          disputeBondPercentage: { rawValue: number | BN | string };
          sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
          disputerDisputeRewardPercentage: { rawValue: number | BN | string };
          minSponsorTokens: { rawValue: number | BN | string };
          tokenScaling: { rawValue: number | BN | string };
          withdrawalLiveness: number | BN | string;
          liquidationLiveness: number | BN | string;
        },
        configSettings: {
          timelockLiveness: number | BN | string;
          rewardRatePerSecond: { rawValue: number | BN | string };
          proposerBondPercentage: { rawValue: number | BN | string };
          maxFundingRate: { rawValue: number | BN | string };
          minFundingRate: { rawValue: number | BN | string };
          proposalTimePastLimit: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        params: {
          collateralAddress: string;
          priceFeedIdentifier: string;
          fundingRateIdentifier: string;
          syntheticName: string;
          syntheticSymbol: string;
          collateralRequirement: { rawValue: number | BN | string };
          disputeBondPercentage: { rawValue: number | BN | string };
          sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
          disputerDisputeRewardPercentage: { rawValue: number | BN | string };
          minSponsorTokens: { rawValue: number | BN | string };
          tokenScaling: { rawValue: number | BN | string };
          withdrawalLiveness: number | BN | string;
          liquidationLiveness: number | BN | string;
        },
        configSettings: {
          timelockLiveness: number | BN | string;
          rewardRatePerSecond: { rawValue: number | BN | string };
          proposerBondPercentage: { rawValue: number | BN | string };
          maxFundingRate: { rawValue: number | BN | string };
          minFundingRate: { rawValue: number | BN | string };
          proposalTimePastLimit: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          collateralAddress: string;
          priceFeedIdentifier: string;
          fundingRateIdentifier: string;
          syntheticName: string;
          syntheticSymbol: string;
          collateralRequirement: { rawValue: number | BN | string };
          disputeBondPercentage: { rawValue: number | BN | string };
          sponsorDisputeRewardPercentage: { rawValue: number | BN | string };
          disputerDisputeRewardPercentage: { rawValue: number | BN | string };
          minSponsorTokens: { rawValue: number | BN | string };
          tokenScaling: { rawValue: number | BN | string };
          withdrawalLiveness: number | BN | string;
          liquidationLiveness: number | BN | string;
        },
        configSettings: {
          timelockLiveness: number | BN | string;
          rewardRatePerSecond: { rawValue: number | BN | string };
          proposerBondPercentage: { rawValue: number | BN | string };
          maxFundingRate: { rawValue: number | BN | string };
          minFundingRate: { rawValue: number | BN | string };
          proposalTimePastLimit: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    _getSyntheticDecimals(
      _collateralAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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