/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface FinancialProductLibraryInterface extends ethers.utils.Interface {
  functions: {
    "transformPrice(tuple,uint256)": FunctionFragment;
    "transformCollateralRequirement(tuple,tuple)": FunctionFragment;
    "transformPriceIdentifier(bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "transformPrice",
    values: [{ rawValue: BigNumberish }, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transformCollateralRequirement",
    values: [{ rawValue: BigNumberish }, { rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "transformPriceIdentifier",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "transformPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transformCollateralRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transformPriceIdentifier",
    data: BytesLike
  ): Result;

  events: {};
}

export class FinancialProductLibrary extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FinancialProductLibraryInterface;

  functions: {
    transformPrice(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    "transformPrice((uint256),uint256)"(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    transformCollateralRequirement(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    "transformCollateralRequirement((uint256),(uint256))"(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { rawValue: BigNumber }]>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    transformPriceIdentifier(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    "transformPriceIdentifier(bytes32,uint256)"(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  transformPrice(
    oraclePrice: { rawValue: BigNumberish },
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  "transformPrice((uint256),uint256)"(
    oraclePrice: { rawValue: BigNumberish },
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  transformCollateralRequirement(
    oraclePrice: { rawValue: BigNumberish },
    collateralRequirement: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  "transformCollateralRequirement((uint256),(uint256))"(
    oraclePrice: { rawValue: BigNumberish },
    collateralRequirement: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { rawValue: BigNumber }>;

  /**
   * Transforms a given price identifier using the financial product libraries transformation logic.
   * @param priceIdentifier input price identifier defined for the financial contract.
   * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
   */
  transformPriceIdentifier(
    priceIdentifier: BytesLike,
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Transforms a given price identifier using the financial product libraries transformation logic.
   * @param priceIdentifier input price identifier defined for the financial contract.
   * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
   */
  "transformPriceIdentifier(bytes32,uint256)"(
    priceIdentifier: BytesLike,
    requestTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    transformPrice(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "transformPrice((uint256),uint256)"(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    transformCollateralRequirement(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    "transformCollateralRequirement((uint256),(uint256))"(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawValue: BigNumber }>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    transformPriceIdentifier(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    "transformPriceIdentifier(bytes32,uint256)"(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    transformPrice(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transformPrice((uint256),uint256)"(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transformCollateralRequirement(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transformCollateralRequirement((uint256),(uint256))"(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    transformPriceIdentifier(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    "transformPriceIdentifier(bytes32,uint256)"(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transformPrice(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transformPrice((uint256),uint256)"(
      oraclePrice: { rawValue: BigNumberish },
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transformCollateralRequirement(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transformCollateralRequirement((uint256),(uint256))"(
      oraclePrice: { rawValue: BigNumberish },
      collateralRequirement: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    transformPriceIdentifier(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transforms a given price identifier using the financial product libraries transformation logic.
     * @param priceIdentifier input price identifier defined for the financial contract.
     * @param requestTime timestamp the identifier is to be used at. EG the time that a price request would be sent using this identifier.
     */
    "transformPriceIdentifier(bytes32,uint256)"(
      priceIdentifier: BytesLike,
      requestTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
