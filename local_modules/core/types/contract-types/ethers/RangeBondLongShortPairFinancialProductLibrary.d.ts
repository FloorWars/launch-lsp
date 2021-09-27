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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface RangeBondLongShortPairFinancialProductLibraryInterface
  extends ethers.utils.Interface {
  functions: {
    "longShortPairParameters(address)": FunctionFragment;
    "setLongShortPairParameters(address,uint256,uint256)": FunctionFragment;
    "percentageLongCollateralAtExpiry(int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "longShortPairParameters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLongShortPairParameters",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "percentageLongCollateralAtExpiry",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "longShortPairParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLongShortPairParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "percentageLongCollateralAtExpiry",
    data: BytesLike
  ): Result;

  events: {};
}

export class RangeBondLongShortPairFinancialProductLibrary extends Contract {
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

  interface: RangeBondLongShortPairFinancialProductLibraryInterface;

  functions: {
    longShortPairParameters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        highPriceRange: BigNumber;
        lowPriceRange: BigNumber;
      }
    >;

    "longShortPairParameters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        highPriceRange: BigNumber;
        lowPriceRange: BigNumber;
      }
    >;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    setLongShortPairParameters(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    "setLongShortPairParameters(address,uint256,uint256)"(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    "percentageLongCollateralAtExpiry(int256)"(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  longShortPairParameters(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      highPriceRange: BigNumber;
      lowPriceRange: BigNumber;
    }
  >;

  "longShortPairParameters(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      highPriceRange: BigNumber;
      lowPriceRange: BigNumber;
    }
  >;

  /**
   * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
   * Enables any address to set the parameters price for an associated financial product.
   * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
   * @param longShortPair address of the LSP contract.
   * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
   */
  setLongShortPairParameters(
    longShortPair: string,
    highPriceRange: BigNumberish,
    lowPriceRange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
   * Enables any address to set the parameters price for an associated financial product.
   * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
   * @param longShortPair address of the LSP contract.
   * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
   */
  "setLongShortPairParameters(address,uint256,uint256)"(
    longShortPair: string,
    highPriceRange: BigNumberish,
    lowPriceRange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
   * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
   */
  percentageLongCollateralAtExpiry(
    expiryPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
   * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
   */
  "percentageLongCollateralAtExpiry(int256)"(
    expiryPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    longShortPairParameters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        highPriceRange: BigNumber;
        lowPriceRange: BigNumber;
      }
    >;

    "longShortPairParameters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        highPriceRange: BigNumber;
        lowPriceRange: BigNumber;
      }
    >;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    setLongShortPairParameters(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    "setLongShortPairParameters(address,uint256,uint256)"(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    "percentageLongCollateralAtExpiry(int256)"(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    longShortPairParameters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "longShortPairParameters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    setLongShortPairParameters(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    "setLongShortPairParameters(address,uint256,uint256)"(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    "percentageLongCollateralAtExpiry(int256)"(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    longShortPairParameters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "longShortPairParameters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    setLongShortPairParameters(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * between highPriceRange and lowPriceRange the contract will payout a fixed amount of lowPriceRange*collateralPerPair (i.e the "notional" of the yield dollar).Note: a) Any address can set these parameters b) existing LSP parameters for address not set. c) highPriceRange > lowPriceRange. d) parameters price can only be set once to prevent the deployer from changing the parameters after the fact. e) For safety, a parameters should be set before depositing any synthetic tokens in a liquidity pool. f) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     * Enables any address to set the parameters price for an associated financial product.
     * @param highPriceRange high price range after which the payout transforms from a yield dollar to a call option.
     * @param longShortPair address of the LSP contract.
     * @param lowPriceRange low price range below which the payout transforms from a yield dollar to a short put option.
     */
    "setLongShortPairParameters(address,uint256,uint256)"(
      longShortPair: string,
      highPriceRange: BigNumberish,
      lowPriceRange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    percentageLongCollateralAtExpiry(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns a number between 0 and 1e18 to indicate how much collateral each long and short token are entitled to per collateralPerPair.
     * @param expiryPrice price from the optimistic oracle for the LSP price identifier.
     */
    "percentageLongCollateralAtExpiry(int256)"(
      expiryPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
