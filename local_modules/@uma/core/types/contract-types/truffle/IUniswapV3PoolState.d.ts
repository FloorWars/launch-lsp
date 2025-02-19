/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IUniswapV3PoolStateContract
  extends Truffle.Contract<IUniswapV3PoolStateInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IUniswapV3PoolStateInstance>;
}

type AllEvents = never;

export interface IUniswapV3PoolStateInstance extends Truffle.ContractInstance {
  /**
   * The 0th storage slot in the pool stores many values, and is exposed as a single method to save gas when accessed externally.
   */
  slot0(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN; 5: BN; 6: boolean }>;

  /**
   * This value can overflow the uint256
   * The fee growth as a Q128.128 fees of token0 collected per unit of liquidity for the entire life of the pool
   */
  feeGrowthGlobal0X128(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * This value can overflow the uint256
   * The fee growth as a Q128.128 fees of token1 collected per unit of liquidity for the entire life of the pool
   */
  feeGrowthGlobal1X128(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Protocol fees will never exceed uint128 max in either token
   * The amounts of token0 and token1 that are owed to the protocol
   */
  protocolFees(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN }>;

  /**
   * This value has no relationship to the total liquidity across all ticks
   * The currently in range liquidity available to the pool
   */
  liquidity(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Look up information about a specific tick in the pool
   * @param tick The tick to look up
   */
  ticks(
    tick: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN; 5: BN; 6: BN; 7: boolean }>;

  /**
   * Returns 256 packed tick initialized boolean values. See TickBitmap for more information
   */
  tickBitmap(
    wordPosition: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Returns the information about a position by the position's key
   * @param key The position's key is a hash of a preimage composed by the owner, tickLower and tickUpper
   */
  positions(
    key: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN }>;

  /**
   * You most likely want to use #observe() instead of this method to get an observation as of some amount of time ago, rather than at a specific index in the array.
   * Returns data about a specific observation index
   * @param index The element of the observations array to fetch
   */
  observations(
    index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: boolean }>;

  methods: {
    /**
     * The 0th storage slot in the pool stores many values, and is exposed as a single method to save gas when accessed externally.
     */
    slot0(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN; 5: BN; 6: boolean }>;

    /**
     * This value can overflow the uint256
     * The fee growth as a Q128.128 fees of token0 collected per unit of liquidity for the entire life of the pool
     */
    feeGrowthGlobal0X128(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * This value can overflow the uint256
     * The fee growth as a Q128.128 fees of token1 collected per unit of liquidity for the entire life of the pool
     */
    feeGrowthGlobal1X128(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Protocol fees will never exceed uint128 max in either token
     * The amounts of token0 and token1 that are owed to the protocol
     */
    protocolFees(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN }>;

    /**
     * This value has no relationship to the total liquidity across all ticks
     * The currently in range liquidity available to the pool
     */
    liquidity(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Look up information about a specific tick in the pool
     * @param tick The tick to look up
     */
    ticks(
      tick: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN; 5: BN; 6: BN; 7: boolean }>;

    /**
     * Returns 256 packed tick initialized boolean values. See TickBitmap for more information
     */
    tickBitmap(
      wordPosition: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Returns the information about a position by the position's key
     * @param key The position's key is a hash of a preimage composed by the owner, tickLower and tickUpper
     */
    positions(
      key: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN; 4: BN }>;

    /**
     * You most likely want to use #observe() instead of this method to get an observation as of some amount of time ago, rather than at a specific index in the array.
     * Returns data about a specific observation index
     * @param index The element of the observations array to fetch
     */
    observations(
      index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: boolean }>;
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
