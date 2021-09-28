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

export type EndedSponsorPosition = ContractEventLog<{}>;
export type LiquidationCreated = ContractEventLog<{}>;
export type NewSponsor = ContractEventLog<{
  sponsor: string;
  0: string;
}>;

export interface PerpetualMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): PerpetualMock;
  clone(): PerpetualMock;
  methods: {
    collateralRequirement(): NonPayableTransactionObject<string>;

    cumulativeFeeMultiplier(): NonPayableTransactionObject<string>;

    fundingRate(): NonPayableTransactionObject<{
      rate: [string];
      identifier: string;
      cumulativeMultiplier: [string];
      updateTime: string;
      applicationTime: string;
      proposalTime: string;
      0: [string];
      1: string;
      2: [string];
      3: string;
      4: string;
      5: string;
    }>;

    liquidationLiveness(): NonPayableTransactionObject<string>;

    liquidations(arg0: string): NonPayableTransactionObject<string>;

    positions(arg0: string): NonPayableTransactionObject<string>;

    getCurrentTime(): NonPayableTransactionObject<string>;

    setFundingRate(
      _fundingRate: [
        [number | string | BN],
        string | number[],
        [number | string | BN],
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<void>;

    applyFundingRate(): NonPayableTransactionObject<void>;
  };
  events: {
    EndedSponsorPosition(cb?: Callback<EndedSponsorPosition>): EventEmitter;
    EndedSponsorPosition(
      options?: EventOptions,
      cb?: Callback<EndedSponsorPosition>
    ): EventEmitter;

    LiquidationCreated(cb?: Callback<LiquidationCreated>): EventEmitter;
    LiquidationCreated(
      options?: EventOptions,
      cb?: Callback<LiquidationCreated>
    ): EventEmitter;

    NewSponsor(cb?: Callback<NewSponsor>): EventEmitter;
    NewSponsor(options?: EventOptions, cb?: Callback<NewSponsor>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "EndedSponsorPosition", cb: Callback<EndedSponsorPosition>): void;
  once(
    event: "EndedSponsorPosition",
    options: EventOptions,
    cb: Callback<EndedSponsorPosition>
  ): void;

  once(event: "LiquidationCreated", cb: Callback<LiquidationCreated>): void;
  once(
    event: "LiquidationCreated",
    options: EventOptions,
    cb: Callback<LiquidationCreated>
  ): void;

  once(event: "NewSponsor", cb: Callback<NewSponsor>): void;
  once(
    event: "NewSponsor",
    options: EventOptions,
    cb: Callback<NewSponsor>
  ): void;
}