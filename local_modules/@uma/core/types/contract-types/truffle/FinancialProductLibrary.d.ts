/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FinancialProductLibraryContract
  extends Truffle.Contract<FinancialProductLibraryInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<FinancialProductLibraryInstance>;
}

type AllEvents = never;

export interface FinancialProductLibraryInstance
  extends Truffle.ContractInstance {
  transformPrice(
    oraclePrice: { rawValue: number | BN | string },
    requestTime: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  transformCollateralRequirement(
    oraclePrice: { rawValue: number | BN | string },
    collateralRequirement: { rawValue: number | BN | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  /**
   * Transforms a given price identifier using the financial product libraries transformation logic.
   * @param priceIdentifier input price identifier defined for the financial contract.
   * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
   */
  transformPriceIdentifier(
    priceIdentifier: string,
    requestTime: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    transformPrice(
      oraclePrice: { rawValue: number | BN | string },
      requestTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    transformCollateralRequirement(
      oraclePrice: { rawValue: number | BN | string },
      collateralRequirement: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    transformPriceIdentifier(
      priceIdentifier: string,
      requestTime: number | BN | string,
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
