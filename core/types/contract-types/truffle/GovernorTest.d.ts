/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface GovernorTestContract
  extends Truffle.Contract<GovernorTestInstance> {
  "new"(
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<GovernorTestInstance>;
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

export interface NewProposal {
  name: "NewProposal";
  args: {
    id: BN;
    transactions: { to: string; value: BN; data: string }[];
    0: BN;
    1: { to: string; value: BN; data: string }[];
  };
}

export interface ProposalExecuted {
  name: "ProposalExecuted";
  args: {
    id: BN;
    transactionIndex: BN;
    0: BN;
    1: BN;
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

type AllEvents =
  | AddedSharedMember
  | NewProposal
  | ProposalExecuted
  | RemovedSharedMember
  | ResetExclusiveMember;

export interface GovernorTestInstance extends Truffle.ContractInstance {
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
   * This can be called by any address. Caller is expected to send enough ETH to execute payable transactions.
   * Executes a proposed governance action that has been approved by voters.
   * @param id unique id for the executed proposal.
   * @param transactionIndex unique transaction index for the executed proposal.
   */
  executeProposal: {
    (
      id: number | BN | string,
      transactionIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      id: number | BN | string,
      transactionIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      id: number | BN | string,
      transactionIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      id: number | BN | string,
      transactionIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

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
   * after a proposal is executed, its data will be zeroed out, except for the request time.
   * Gets the proposal data for a particular id.
   * @param id uniquely identify the identity of the proposal.
   */
  getProposal(
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    transactions: { to: string; value: BN; data: string }[];
    requestTime: BN;
  }>;

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
   * Gets the total number of proposals (includes executed and non-executed).
   */
  numProposals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  proposals(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  propose: {
    (
      transactions: { to: string; value: number | BN | string; data: string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      transactions: { to: string; value: number | BN | string; data: string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      transactions: { to: string; value: number | BN | string; data: string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      transactions: { to: string; value: number | BN | string; data: string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

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

  /**
   * Will revert if not running in test mode.
   * Sets the current time.
   * @param time timestamp to set current Testable time to.
   */
  setCurrentTime: {
    (
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  addPrefix(
    input: string,
    prefix: string,
    prefixLength: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  uintToUtf8(
    v: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  constructIdentifier(
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

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
     * This can be called by any address. Caller is expected to send enough ETH to execute payable transactions.
     * Executes a proposed governance action that has been approved by voters.
     * @param id unique id for the executed proposal.
     * @param transactionIndex unique transaction index for the executed proposal.
     */
    executeProposal: {
      (
        id: number | BN | string,
        transactionIndex: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        id: number | BN | string,
        transactionIndex: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        id: number | BN | string,
        transactionIndex: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        id: number | BN | string,
        transactionIndex: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

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
     * after a proposal is executed, its data will be zeroed out, except for the request time.
     * Gets the proposal data for a particular id.
     * @param id uniquely identify the identity of the proposal.
     */
    getProposal(
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      transactions: { to: string; value: BN; data: string }[];
      requestTime: BN;
    }>;

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
     * Gets the total number of proposals (includes executed and non-executed).
     */
    numProposals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    proposals(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    propose: {
      (
        transactions: {
          to: string;
          value: number | BN | string;
          data: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        transactions: {
          to: string;
          value: number | BN | string;
          data: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        transactions: {
          to: string;
          value: number | BN | string;
          data: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        transactions: {
          to: string;
          value: number | BN | string;
          data: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

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

    /**
     * Will revert if not running in test mode.
     * Sets the current time.
     * @param time timestamp to set current Testable time to.
     */
    setCurrentTime: {
      (
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    addPrefix(
      input: string,
      prefix: string,
      prefixLength: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    uintToUtf8(
      v: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    constructIdentifier(
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
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
