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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Snapshot = ContractEventLog<{
  id: string;
  0: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface ERC20Snapshot extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ERC20Snapshot;
  clone(): ERC20Snapshot;
  methods: {
    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * See {IERC20-balanceOf}.
     */
    balanceOf(account: string): NonPayableTransactionObject<string>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(): NonPayableTransactionObject<string>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Returns the name of the token.
     */
    name(): NonPayableTransactionObject<string>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-totalSupply}.
     */
    totalSupply(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Retrieves the balance of `account` at the time `snapshotId` was created.
     */
    balanceOfAt(
      account: string,
      snapshotId: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Retrieves the total supply at the time `snapshotId` was created.
     */
    totalSupplyAt(
      snapshotId: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Snapshot(cb?: Callback<Snapshot>): EventEmitter;
    Snapshot(options?: EventOptions, cb?: Callback<Snapshot>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Snapshot", cb: Callback<Snapshot>): void;
  once(event: "Snapshot", options: EventOptions, cb: Callback<Snapshot>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
