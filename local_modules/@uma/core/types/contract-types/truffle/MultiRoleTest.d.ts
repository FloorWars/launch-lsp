/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface MultiRoleTestContract
  extends Truffle.Contract<MultiRoleTestInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MultiRoleTestInstance>;
}

export interface AddedSharedMember {
  name: "AddedSharedMember";
  args: {
    roleId: BN;
    newMember: string;
    manager: string;
    0: BN;
    1: string;
    2: string;
  };
}

export interface RemovedSharedMember {
  name: "RemovedSharedMember";
  args: {
    roleId: BN;
    oldMember: string;
    manager: string;
    0: BN;
    1: string;
    2: string;
  };
}

export interface ResetExclusiveMember {
  name: "ResetExclusiveMember";
  args: {
    roleId: BN;
    newMember: string;
    manager: string;
    0: BN;
    1: string;
    2: string;
  };
}

type AllEvents = AddedSharedMember | RemovedSharedMember | ResetExclusiveMember;

export interface MultiRoleTestInstance extends Truffle.ContractInstance {
  /**
   * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
   * Adds `newMember` to the shared role, `roleId`.
   * @param newMember the new SharedRole member.
   * @param roleId the SharedRole membership to modify.
   */
  addMember: {
    (
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Reverts if `roleId` does not represent an initialized, exclusive role.
   * Gets the current holder of the exclusive role, `roleId`.
   * @param roleId the ExclusiveRole membership to check.
   */
  getMember(
    roleId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Reverts if roleId does not correspond to an initialized role.
   * Whether `memberToCheck` is a member of roleId.
   * @param memberToCheck the address to check.
   * @param roleId the Role to check.
   */
  holdsRole(
    roleId: number | BN | string,
    memberToCheck: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
   * Removes `memberToRemove` from the shared role, `roleId`.
   * @param memberToRemove the current SharedRole member to remove.
   * @param roleId the SharedRole membership to modify.
   */
  removeMember: {
    (
      roleId: number | BN | string,
      memberToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      memberToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      memberToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      memberToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Reverts if the caller is not a member of the role for `roleId` or if `roleId` is not an initialized, SharedRole.
   * Removes caller from the role, `roleId`.
   * @param roleId the SharedRole membership to modify.
   */
  renounceMembership: {
    (
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Reverts if the caller is not a member of the managing role for `roleId` or if `roleId` is not an initialized, ExclusiveRole.
   * Changes the exclusive role holder of `roleId` to `newMember`.
   * @param newMember the new ExclusiveRole member.
   * @param roleId the ExclusiveRole membership to modify.
   */
  resetMember: {
    (
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      newMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  createSharedRole: {
    (
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMembers: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMembers: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMembers: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMembers: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  createExclusiveRole: {
    (
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      roleId: number | BN | string,
      managingRoleId: number | BN | string,
      initialMember: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  revertIfNotHoldingRole(
    roleId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  methods: {
    /**
     * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
     * Adds `newMember` to the shared role, `roleId`.
     * @param newMember the new SharedRole member.
     * @param roleId the SharedRole membership to modify.
     */
    addMember: {
      (
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Reverts if `roleId` does not represent an initialized, exclusive role.
     * Gets the current holder of the exclusive role, `roleId`.
     * @param roleId the ExclusiveRole membership to check.
     */
    getMember(
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Reverts if roleId does not correspond to an initialized role.
     * Whether `memberToCheck` is a member of roleId.
     * @param memberToCheck the address to check.
     * @param roleId the Role to check.
     */
    holdsRole(
      roleId: number | BN | string,
      memberToCheck: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Reverts if `roleId` does not represent an initialized, SharedRole or if the caller is not a member of the managing role for `roleId`.
     * Removes `memberToRemove` from the shared role, `roleId`.
     * @param memberToRemove the current SharedRole member to remove.
     * @param roleId the SharedRole membership to modify.
     */
    removeMember: {
      (
        roleId: number | BN | string,
        memberToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        memberToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        memberToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        memberToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Reverts if the caller is not a member of the role for `roleId` or if `roleId` is not an initialized, SharedRole.
     * Removes caller from the role, `roleId`.
     * @param roleId the SharedRole membership to modify.
     */
    renounceMembership: {
      (
        roleId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Reverts if the caller is not a member of the managing role for `roleId` or if `roleId` is not an initialized, ExclusiveRole.
     * Changes the exclusive role holder of `roleId` to `newMember`.
     * @param newMember the new ExclusiveRole member.
     * @param roleId the ExclusiveRole membership to modify.
     */
    resetMember: {
      (
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        newMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    createSharedRole: {
      (
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMembers: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMembers: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMembers: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMembers: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    createExclusiveRole: {
      (
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        roleId: number | BN | string,
        managingRoleId: number | BN | string,
        initialMember: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    revertIfNotHoldingRole(
      roleId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
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