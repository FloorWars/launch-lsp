/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IGenericHandlerContract
  extends Truffle.Contract<IGenericHandlerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IGenericHandlerInstance>;
}

type AllEvents = never;

export interface IGenericHandlerInstance extends Truffle.ContractInstance {
  /**
   * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
   * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
   * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
   * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
   * @param resourceID ResourceID to be used when making deposits.
   */
  setResource: {
    (
      resourceID: string,
      contractAddress: string,
      depositFunctionSig: string,
      executeFunctionSig: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      resourceID: string,
      contractAddress: string,
      depositFunctionSig: string,
      executeFunctionSig: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      resourceID: string,
      contractAddress: string,
      depositFunctionSig: string,
      executeFunctionSig: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      resourceID: string,
      contractAddress: string,
      depositFunctionSig: string,
      executeFunctionSig: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
     * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource: {
      (
        resourceID: string,
        contractAddress: string,
        depositFunctionSig: string,
        executeFunctionSig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        resourceID: string,
        contractAddress: string,
        depositFunctionSig: string,
        executeFunctionSig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        resourceID: string,
        contractAddress: string,
        depositFunctionSig: string,
        executeFunctionSig: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        resourceID: string,
        contractAddress: string,
        depositFunctionSig: string,
        executeFunctionSig: string,
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
