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

export interface GenericHandler extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GenericHandler;
  clone(): GenericHandler;
  methods: {
    _bridgeAddress(): NonPayableTransactionObject<string>;

    _contractAddressToDepositFunctionSignature(
      arg0: string
    ): NonPayableTransactionObject<string>;

    _contractAddressToExecuteFunctionSignature(
      arg0: string
    ): NonPayableTransactionObject<string>;

    _contractAddressToResourceID(
      arg0: string
    ): NonPayableTransactionObject<string>;

    _contractWhitelist(arg0: string): NonPayableTransactionObject<boolean>;

    _depositRecords(
      arg0: number | string | BN,
      arg1: number | string | BN
    ): NonPayableTransactionObject<{
      _destinationChainID: string;
      _depositer: string;
      _resourceID: string;
      _metaData: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    _resourceIDToContractAddress(
      arg0: string | number[]
    ): NonPayableTransactionObject<string>;

    /**
     * @param depositNonce This ID will have been generated by the Bridge contract.
     * @param destId ID of chain deposit will be bridged to.
     */
    getDepositRecord(
      depositNonce: number | string | BN,
      destId: number | string | BN
    ): NonPayableTransactionObject<[string, string, string, string]>;

    /**
     * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
     * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource(
      resourceID: string | number[],
      contractAddress: string,
      depositFunctionSig: string | number[],
      executeFunctionSig: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
     * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
     * @param depositNonce This value is generated as an ID by the Bridge contract.
     * @param depositer Address of account making the deposit in the Bridge contract.
     * @param destinationChainID Chain ID deposit is expected to be bridged to.
     */
    deposit(
      resourceID: string | number[],
      destinationChainID: number | string | BN,
      depositNonce: number | string | BN,
      depositer: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
     * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
     */
    executeProposal(
      resourceID: string | number[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}