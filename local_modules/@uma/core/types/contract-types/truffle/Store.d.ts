/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface StoreContract extends Truffle.Contract<StoreInstance> {
  "new"(
    _fixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
    _weeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
    _timerAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<StoreInstance>;
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

export interface NewFinalFee {
  name: "NewFinalFee";
  args: {
    newFinalFee: { rawValue: BN };
    0: { rawValue: BN };
  };
}

export interface NewFixedOracleFeePerSecondPerPfc {
  name: "NewFixedOracleFeePerSecondPerPfc";
  args: {
    newOracleFee: { rawValue: BN };
    0: { rawValue: BN };
  };
}

export interface NewWeeklyDelayFeePerSecondPerPfc {
  name: "NewWeeklyDelayFeePerSecondPerPfc";
  args: {
    newWeeklyDelayFeePerSecondPerPfc: { rawValue: BN };
    0: { rawValue: BN };
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
  | NewFinalFee
  | NewFixedOracleFeePerSecondPerPfc
  | NewWeeklyDelayFeePerSecondPerPfc
  | RemovedSharedMember
  | ResetExclusiveMember;

export interface StoreInstance extends Truffle.ContractInstance {
  SECONDS_PER_WEEK(txDetails?: Truffle.TransactionDetails): Promise<BN>;

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

  finalFees(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  fixedOracleFeePerSecondPerPfc(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

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

  weeklyDelayFeePerSecondPerPfc(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Withdraws ETH from the contract.
   */
  withdraw: {
    (
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Withdraws ERC20 tokens from the contract.
   * @param amount amount of tokens to withdraw.
   * @param erc20Address ERC20 token to withdraw.
   */
  withdrawErc20: {
    (
      erc20Address: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      erc20Address: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      erc20Address: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      erc20Address: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * To be used by contracts whose margin currency is ETH.
   * Pays Oracle fees in ETH to the store.
   */
  payOracleFees: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  payOracleFeesErc20: {
    (
      erc20Address: string,
      amount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      erc20Address: string,
      amount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      erc20Address: string,
      amount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      erc20Address: string,
      amount: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  computeRegularFee(
    startTime: number | BN | string,
    endTime: number | BN | string,
    pfc: { rawValue: number | BN | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: { rawValue: BN }; 1: { rawValue: BN } }>;

  /**
   * Computes the final oracle fees that a contract should pay at settlement.
   * @param currency token used to pay the final fee.
   */
  computeFinalFee(
    currency: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ rawValue: BN }>;

  setFixedOracleFeePerSecondPerPfc: {
    (
      newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setWeeklyDelayFeePerSecondPerPfc: {
    (
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setFinalFee: {
    (
      currency: string,
      newFinalFee: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      currency: string,
      newFinalFee: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      currency: string,
      newFinalFee: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      currency: string,
      newFinalFee: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    SECONDS_PER_WEEK(txDetails?: Truffle.TransactionDetails): Promise<BN>;

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

    finalFees(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    fixedOracleFeePerSecondPerPfc(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

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

    weeklyDelayFeePerSecondPerPfc(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Withdraws ETH from the contract.
     */
    withdraw: {
      (
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Withdraws ERC20 tokens from the contract.
     * @param amount amount of tokens to withdraw.
     * @param erc20Address ERC20 token to withdraw.
     */
    withdrawErc20: {
      (
        erc20Address: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        erc20Address: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        erc20Address: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        erc20Address: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * To be used by contracts whose margin currency is ETH.
     * Pays Oracle fees in ETH to the store.
     */
    payOracleFees: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    payOracleFeesErc20: {
      (
        erc20Address: string,
        amount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        erc20Address: string,
        amount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        erc20Address: string,
        amount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        erc20Address: string,
        amount: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    computeRegularFee(
      startTime: number | BN | string,
      endTime: number | BN | string,
      pfc: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: { rawValue: BN }; 1: { rawValue: BN } }>;

    /**
     * Computes the final oracle fees that a contract should pay at settlement.
     * @param currency token used to pay the final fee.
     */
    computeFinalFee(
      currency: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;

    setFixedOracleFeePerSecondPerPfc: {
      (
        newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newFixedOracleFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setWeeklyDelayFeePerSecondPerPfc: {
      (
        newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newWeeklyDelayFeePerSecondPerPfc: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setFinalFee: {
      (
        currency: string,
        newFinalFee: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        currency: string,
        newFinalFee: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        currency: string,
        newFinalFee: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        currency: string,
        newFinalFee: { rawValue: number | BN | string },
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