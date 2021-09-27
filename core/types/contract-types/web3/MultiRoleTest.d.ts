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

export type AddedSharedMember = ContractEventLog<{
  roleId: string;
  newMember: string;
  manager: string;
  0: string;
  1: string;
  2: string;
}>;
export type RemovedSharedMember = ContractEventLog<{
  roleId: string;
  oldMember: string;
  manager: string;
  0: string;
  1: string;
  2: string;
}>;
export type ResetExclusiveMember = ContractEventLog<{
  roleId: string;
  newMember: string;
  manager: string;
  0: string;
  1: string;
  2: string;
}>;

export interface MultiRoleTest extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MultiRoleTest;
  clone(): MultiRoleTest;
  methods: {
    /**
     * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
     * Adds `newMember` to the shared role, `roleId`.
     * @param newMember the new SharedRole member.
     * @param roleId the SharedRole membership to modify.
     */
    addMember(
      roleId: number | string | BN,
      newMember: string
    ): NonPayableTransactionObject<void>;

    /**
     * Reverts if `roleId` does not represent an initialized, exclusive role.
     * Gets the current holder of the exclusive role, `roleId`.
     * @param roleId the ExclusiveRole membership to check.
     */
    getMember(
      roleId: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Reverts if roleId does not correspond to an initialized role.
     * Whether `memberToCheck` is a member of roleId.
     * @param memberToCheck the address to check.
     * @param roleId the Role to check.
     */
    holdsRole(
      roleId: number | string | BN,
      memberToCheck: string
    ): NonPayableTransactionObject<boolean>;

    /**
     * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
     * Removes `memberToRemove` from the shared role, `roleId`.
     * @param memberToRemove the current SharedRole member to remove.
     * @param roleId the SharedRole membership to modify.
     */
    removeMember(
      roleId: number | string | BN,
      memberToRemove: string
    ): NonPayableTransactionObject<void>;

    /**
     * Reverts if the caller is not a member of the role for `roleId` or if `roleId` is not an initialized, SharedRole.
     * Removes caller from the role, `roleId`.
     * @param roleId the SharedRole membership to modify.
     */
    renounceMembership(
      roleId: number | string | BN
    ): NonPayableTransactionObject<void>;

    /**
     * Reverts if the caller is not a member of the managing role for `roleId` or if `roleId` is not an initialized, ExclusiveRole.
     * Changes the exclusive role holder of `roleId` to `newMember`.
     * @param newMember the new ExclusiveRole member.
     * @param roleId the ExclusiveRole membership to modify.
     */
    resetMember(
      roleId: number | string | BN,
      newMember: string
    ): NonPayableTransactionObject<void>;

    createSharedRole(
      roleId: number | string | BN,
      managingRoleId: number | string | BN,
      initialMembers: string[]
    ): NonPayableTransactionObject<void>;

    createExclusiveRole(
      roleId: number | string | BN,
      managingRoleId: number | string | BN,
      initialMember: string
    ): NonPayableTransactionObject<void>;

    revertIfNotHoldingRole(
      roleId: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AddedSharedMember(cb?: Callback<AddedSharedMember>): EventEmitter;
    AddedSharedMember(
      options?: EventOptions,
      cb?: Callback<AddedSharedMember>
    ): EventEmitter;

    RemovedSharedMember(cb?: Callback<RemovedSharedMember>): EventEmitter;
    RemovedSharedMember(
      options?: EventOptions,
      cb?: Callback<RemovedSharedMember>
    ): EventEmitter;

    ResetExclusiveMember(cb?: Callback<ResetExclusiveMember>): EventEmitter;
    ResetExclusiveMember(
      options?: EventOptions,
      cb?: Callback<ResetExclusiveMember>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddedSharedMember", cb: Callback<AddedSharedMember>): void;
  once(
    event: "AddedSharedMember",
    options: EventOptions,
    cb: Callback<AddedSharedMember>
  ): void;

  once(event: "RemovedSharedMember", cb: Callback<RemovedSharedMember>): void;
  once(
    event: "RemovedSharedMember",
    options: EventOptions,
    cb: Callback<RemovedSharedMember>
  ): void;

  once(event: "ResetExclusiveMember", cb: Callback<ResetExclusiveMember>): void;
  once(
    event: "ResetExclusiveMember",
    options: EventOptions,
    cb: Callback<ResetExclusiveMember>
  ): void;
}
