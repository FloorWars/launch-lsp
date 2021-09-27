/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FinancialProductLibraryTestContract
  extends Truffle.Contract<FinancialProductLibraryTestInstance> {
  "new"(
    _priceTransformationScalar: { rawValue: number | BN | string },
    _collateralRequirementTransformationScalar: {
      rawValue: number | BN | string;
    },
    _transformedPriceIdentifier: string,
    meta?: Truffle.TransactionDetails
  ): Promise<FinancialProductLibraryTestInstance>;
}

type AllEvents = never;

export interface FinancialProductLibraryTestInstance
  extends Truffle.ContractInstance {
  collateralRequirementTransformationScalar(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  priceTransformationScalar(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  shouldRevert(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  transformedPriceIdentifier(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setShouldRevert: {
    (_shouldRevert: boolean, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _shouldRevert: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _shouldRevert: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _shouldRevert: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transformPrice(
    oraclePrice: { rawValue: number | BN | string },
    requestTime: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  transformCollateralRequirement(
    price: { rawValue: number | BN | string },
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
    collateralRequirementTransformationScalar(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    priceTransformationScalar(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    shouldRevert(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    transformedPriceIdentifier(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setShouldRevert: {
      (_shouldRevert: boolean, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _shouldRevert: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _shouldRevert: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _shouldRevert: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transformPrice(
      oraclePrice: { rawValue: number | BN | string },
      requestTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    transformCollateralRequirement(
      price: { rawValue: number | BN | string },
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
