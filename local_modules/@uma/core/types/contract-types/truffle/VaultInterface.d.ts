/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface VaultInterfaceContract
  extends Truffle.Contract<VaultInterfaceInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<VaultInterfaceInstance>;
}

type AllEvents = never;

export interface VaultInterfaceInstance extends Truffle.ContractInstance {
  token(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    token(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;
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
