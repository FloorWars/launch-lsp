/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IUniswapV3PoolOwnerActionsContract
  extends Truffle.Contract<IUniswapV3PoolOwnerActionsInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IUniswapV3PoolOwnerActionsInstance>;
}

type AllEvents = never;

export interface IUniswapV3PoolOwnerActionsInstance
  extends Truffle.ContractInstance {
  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol0 new protocol fee for token0 of the pool
   * @param feeProtocol1 new protocol fee for token1 of the pool
   */
  setFeeProtocol: {
    (
      feeProtocol0: number | BN | string,
      feeProtocol1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      feeProtocol0: number | BN | string,
      feeProtocol1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      feeProtocol0: number | BN | string,
      feeProtocol1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      feeProtocol0: number | BN | string,
      feeProtocol1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Collect the protocol fee accrued to the pool
   * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
   * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
   * @param recipient The address to which collected protocol fees should be sent
   */
  collectProtocol: {
    (
      recipient: string,
      amount0Requested: number | BN | string,
      amount1Requested: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      recipient: string,
      amount0Requested: number | BN | string,
      amount1Requested: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN }>;
    sendTransaction(
      recipient: string,
      amount0Requested: number | BN | string,
      amount1Requested: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string,
      amount0Requested: number | BN | string,
      amount1Requested: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol0 new protocol fee for token0 of the pool
     * @param feeProtocol1 new protocol fee for token1 of the pool
     */
    setFeeProtocol: {
      (
        feeProtocol0: number | BN | string,
        feeProtocol1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        feeProtocol0: number | BN | string,
        feeProtocol1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        feeProtocol0: number | BN | string,
        feeProtocol1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        feeProtocol0: number | BN | string,
        feeProtocol1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Collect the protocol fee accrued to the pool
     * @param amount0Requested The maximum amount of token0 to send, can be 0 to collect fees in only token1
     * @param amount1Requested The maximum amount of token1 to send, can be 0 to collect fees in only token0
     * @param recipient The address to which collected protocol fees should be sent
     */
    collectProtocol: {
      (
        recipient: string,
        amount0Requested: number | BN | string,
        amount1Requested: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        recipient: string,
        amount0Requested: number | BN | string,
        amount1Requested: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ 0: BN; 1: BN }>;
      sendTransaction(
        recipient: string,
        amount0Requested: number | BN | string,
        amount1Requested: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        recipient: string,
        amount0Requested: number | BN | string,
        amount1Requested: number | BN | string,
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