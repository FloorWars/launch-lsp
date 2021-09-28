/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface UniswapV3MockContract
  extends Truffle.Contract<UniswapV3MockInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<UniswapV3MockInstance>;
}

export interface Swap {
  name: "Swap";
  args: {
    sender: string;
    recipient: string;
    amount0: BN;
    amount1: BN;
    sqrtPriceX96: BN;
    liquidity: BN;
    tick: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
    6: BN;
  };
}

type AllEvents = Swap;

export interface UniswapV3MockInstance extends Truffle.ContractInstance {
  token0(txDetails?: Truffle.TransactionDetails): Promise<string>;

  token1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setTokens: {
    (
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setPrice: {
    (
      sender: string,
      recipient: string,
      amount0: number | BN | string,
      amount1: number | BN | string,
      sqrtPriceX96: number | BN | string,
      liquidity: number | BN | string,
      tick: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      sender: string,
      recipient: string,
      amount0: number | BN | string,
      amount1: number | BN | string,
      sqrtPriceX96: number | BN | string,
      liquidity: number | BN | string,
      tick: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      sender: string,
      recipient: string,
      amount0: number | BN | string,
      amount1: number | BN | string,
      sqrtPriceX96: number | BN | string,
      liquidity: number | BN | string,
      tick: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string,
      recipient: string,
      amount0: number | BN | string,
      amount1: number | BN | string,
      sqrtPriceX96: number | BN | string,
      liquidity: number | BN | string,
      tick: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    token0(txDetails?: Truffle.TransactionDetails): Promise<string>;

    token1(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setTokens: {
      (
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setPrice: {
      (
        sender: string,
        recipient: string,
        amount0: number | BN | string,
        amount1: number | BN | string,
        sqrtPriceX96: number | BN | string,
        liquidity: number | BN | string,
        tick: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        sender: string,
        recipient: string,
        amount0: number | BN | string,
        amount1: number | BN | string,
        sqrtPriceX96: number | BN | string,
        liquidity: number | BN | string,
        tick: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        sender: string,
        recipient: string,
        amount0: number | BN | string,
        amount1: number | BN | string,
        sqrtPriceX96: number | BN | string,
        liquidity: number | BN | string,
        tick: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        sender: string,
        recipient: string,
        amount0: number | BN | string,
        amount1: number | BN | string,
        sqrtPriceX96: number | BN | string,
        liquidity: number | BN | string,
        tick: number | BN | string,
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