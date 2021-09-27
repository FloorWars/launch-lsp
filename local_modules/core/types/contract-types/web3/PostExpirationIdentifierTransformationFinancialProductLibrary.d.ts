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

export interface PostExpirationIdentifierTransformationFinancialProductLibrary
  extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): PostExpirationIdentifierTransformationFinancialProductLibrary;
  clone(): PostExpirationIdentifierTransformationFinancialProductLibrary;
  methods: {
    transformCollateralRequirement(
      oraclePrice: [number | string | BN],
      collateralRequirement: [number | string | BN]
    ): NonPayableTransactionObject<[string]>;

    transformPrice(
      oraclePrice: [number | string | BN],
      requestTime: number | string | BN
    ): NonPayableTransactionObject<[string]>;

    /**
     * Note: a) Any address can set identifier transformations b) The identifier can't be set to blank. c) A transformed price can only be set once to prevent the deployer from changing it after the fact. d) financialProduct must expose an expirationTimestamp method.
     * Enables the deployer of the library to set the transformed identifier for an associated financial product.
     * @param financialProduct address of the financial product.
     * @param transformedIdentifier the identifier for the financial product to be used if the contract is post expiration.
     */
    setFinancialProductTransformedIdentifier(
      financialProduct: string,
      transformedIdentifier: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * Returns the transformed identifier associated with a given financial product address.
     * @param financialProduct address of the financial product.
     */
    getTransformedIdentifierForFinancialProduct(
      financialProduct: string
    ): NonPayableTransactionObject<string>;

    /**
     * Returns a transformed price identifier if the contract is post-expiration and no transformation if pre.
     * @param identifier input price identifier to be transformed.
     * @param requestTime timestamp the identifier is to be used at.
     */
    transformPriceIdentifier(
      identifier: string | number[],
      requestTime: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
