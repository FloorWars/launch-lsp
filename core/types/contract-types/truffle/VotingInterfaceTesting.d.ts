/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface VotingInterfaceTestingContract
  extends Truffle.Contract<VotingInterfaceTestingInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<VotingInterfaceTestingInstance>;
}

export interface EncryptedVote {
  name: "EncryptedVote";
  args: {
    voter: string;
    roundId: BN;
    identifier: string;
    time: BN;
    ancillaryData: string;
    encryptedVote: string;
    0: string;
    1: BN;
    2: string;
    3: BN;
    4: string;
    5: string;
  };
}

export interface PriceRequestAdded {
  name: "PriceRequestAdded";
  args: {
    roundId: BN;
    identifier: string;
    time: BN;
    0: BN;
    1: string;
    2: BN;
  };
}

export interface PriceResolved {
  name: "PriceResolved";
  args: {
    roundId: BN;
    identifier: string;
    time: BN;
    price: BN;
    ancillaryData: string;
    0: BN;
    1: string;
    2: BN;
    3: BN;
    4: string;
  };
}

export interface RewardsRetrieved {
  name: "RewardsRetrieved";
  args: {
    voter: string;
    roundId: BN;
    identifier: string;
    time: BN;
    ancillaryData: string;
    numTokens: BN;
    0: string;
    1: BN;
    2: string;
    3: BN;
    4: string;
    5: BN;
  };
}

export interface VoteCommitted {
  name: "VoteCommitted";
  args: {
    voter: string;
    roundId: BN;
    identifier: string;
    time: BN;
    ancillaryData: string;
    0: string;
    1: BN;
    2: string;
    3: BN;
    4: string;
  };
}

export interface VoteRevealed {
  name: "VoteRevealed";
  args: {
    voter: string;
    roundId: BN;
    identifier: string;
    time: BN;
    price: BN;
    ancillaryData: string;
    numTokens: BN;
    0: string;
    1: BN;
    2: string;
    3: BN;
    4: BN;
    5: string;
    6: BN;
  };
}

type AllEvents =
  | EncryptedVote
  | PriceRequestAdded
  | PriceResolved
  | RewardsRetrieved
  | VoteCommitted
  | VoteRevealed;

export interface VotingInterfaceTestingInstance
  extends Truffle.ContractInstance {
  batchCommit: {
    (
      commits: {
        identifier: string;
        time: number | BN | string;
        hash: string;
        encryptedVote: string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      commits: {
        identifier: string;
        time: number | BN | string;
        hash: string;
        encryptedVote: string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      commits: {
        identifier: string;
        time: number | BN | string;
        hash: string;
        encryptedVote: string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      commits: {
        identifier: string;
        time: number | BN | string;
        hash: string;
        encryptedVote: string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  batchReveal: {
    (
      reveals: {
        identifier: string;
        time: number | BN | string;
        price: number | BN | string;
        salt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      reveals: {
        identifier: string;
        time: number | BN | string;
        price: number | BN | string;
        salt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      reveals: {
        identifier: string;
        time: number | BN | string;
        price: number | BN | string;
        salt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      reveals: {
        identifier: string;
        time: number | BN | string;
        price: number | BN | string;
        salt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * An encrypted version of the vote is emitted in an event `EncryptedVote` to allow off-chain infrastructure to retrieve the commit. The contents of `encryptedVote` are never used on chain: it is purely for convenience.
   * commits a vote and logs an event with a data blob, typically an encrypted version of the vote
   * @param encryptedVote offchain encrypted blob containing the voters amount, time and salt.
   * @param hash keccak256 hash of the price you want to vote for and a `int256 salt`.
   * @param identifier unique price pair identifier. Eg: BTC/USD price pair.
   * @param time unix timestamp of for the price request.
   */
  commitAndEmitEncryptedVote: {
    (
      identifier: string,
      time: number | BN | string,
      hash: string,
      encryptedVote: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      time: number | BN | string,
      hash: string,
      encryptedVote: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      time: number | BN | string,
      hash: string,
      encryptedVote: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      time: number | BN | string,
      hash: string,
      encryptedVote: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * `identifier`, `time` must correspond to a price request that's currently in the commit phase. Commits can be changed.Since transaction data is public, the salt will be revealed with the vote. While this is the system’s expected behavior, voters should never reuse salts. If someone else is able to guess the voted price and knows that a salt will be reused, then they can determine the vote pre-reveal.
   * Commit a vote for a price request for `identifier` at `time`.
   * @param hash keccak256 hash of the `price`, `salt`, voter `address`, `time`, current `roundId`, and `identifier`.
   * @param identifier uniquely identifies the committed vote. EG BTC/USD price pair.
   * @param time unix timestamp of the price being voted on.
   */
  commitVote: {
    (
      identifier: string,
      time: number | BN | string,
      hash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      time: number | BN | string,
      hash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      time: number | BN | string,
      hash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      time: number | BN | string,
      hash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns the current round ID, as a function of the current time.
   */
  getCurrentRoundId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
   */
  getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Gets the queries that are being voted on this round.
   */
  getPendingRequests(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ identifier: string; time: BN; ancillaryData: string }[]>;

  /**
   * If the price is not available, the method reverts.
   * Gets the price for `identifier` and `time` if it has already been requested and resolved.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  getPrice(
    identifier: string,
    time: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Returns the current voting phase, as a function of the current time.
   */
  getVotePhase(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Time must be in the past and the identifier must be supported.
   * Whether the price for `identifier` and `time` is available.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  hasPrice(
    identifier: string,
    time: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Time must be in the past and the identifier must be supported.
   * Enqueues a request (if a request isn't already present) for the given `identifier`, `time` pair.
   * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
   * @param time unix timestamp for the price request.
   */
  requestPrice: {
    (
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  retrieveRewards: {
    (
      voterAddress: string,
      roundId: number | BN | string,
      toRetrieve: { identifier: string; time: number | BN | string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      voterAddress: string,
      roundId: number | BN | string,
      toRetrieve: { identifier: string; time: number | BN | string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ rawValue: BN }>;
    sendTransaction(
      voterAddress: string,
      roundId: number | BN | string,
      toRetrieve: { identifier: string; time: number | BN | string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      voterAddress: string,
      roundId: number | BN | string,
      toRetrieve: { identifier: string; time: number | BN | string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * The revealed `price`, `salt`, `address`, `time`, `roundId`, and `identifier`, must hash to the latest `hash` that `commitVote()` was called with. Only the committer can reveal their vote.
   * Reveal a previously committed vote for `identifier` at `time`.
   * @param identifier voted on in the commit phase. EG BTC/USD price pair.
   * @param price voted on during the commit phase.
   * @param salt value used to hide the commitment price during the commit phase.
   * @param time specifies the unix timestamp of the price is being voted on.
   */
  revealVote: {
    (
      identifier: string,
      time: number | BN | string,
      price: number | BN | string,
      salt: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      identifier: string,
      time: number | BN | string,
      price: number | BN | string,
      salt: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      identifier: string,
      time: number | BN | string,
      price: number | BN | string,
      salt: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      identifier: string,
      time: number | BN | string,
      price: number | BN | string,
      salt: number | BN | string,
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

  setGatPercentage: {
    (
      newGatPercentage: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newGatPercentage: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newGatPercentage: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newGatPercentage: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setInflationRate: {
    (
      newInflationRate: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newInflationRate: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newInflationRate: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newInflationRate: { rawValue: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Can only be called by the contract owner.
   * Disables this Voting contract in favor of the migrated one.
   * @param newVotingAddress the newly migrated contract address.
   */
  setMigrated: {
    (newVotingAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newVotingAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newVotingAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newVotingAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * This change only applies to rounds that have not yet begun.
   * Resets the rewards expiration timeout.
   * @param NewRewardsExpirationTimeout how long a caller can wait before choosing to withdraw their rewards.
   */
  setRewardsExpirationTimeout: {
    (
      NewRewardsExpirationTimeout: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      NewRewardsExpirationTimeout: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      NewRewardsExpirationTimeout: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      NewRewardsExpirationTimeout: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * This function can be called multiple times but each round will only every have one snapshot at the time of calling `_freezeRoundVariables`.
   * snapshot the current round's token balances and lock in the inflation rate and GAT.
   * @param signature signature required to prove caller is an EOA to prevent flash loans from being included in the snapshot.
   */
  snapshotCurrentRound: {
    (signature: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  rounds(
    roundId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    snapshotId: BN;
    inflationRate: { rawValue: BN };
    gatPercentage: { rawValue: BN };
    rewardsExpirationTime: BN;
  }>;

  getPriceRequestStatuses(
    requests: { identifier: string; time: number | BN | string }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ status: BN; lastVotingRound: BN }[]>;

  getPendingPriceRequestsArray(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  methods: {
    batchCommit: {
      (
        commits: {
          identifier: string;
          time: number | BN | string;
          hash: string;
          encryptedVote: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        commits: {
          identifier: string;
          time: number | BN | string;
          hash: string;
          encryptedVote: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        commits: {
          identifier: string;
          time: number | BN | string;
          hash: string;
          encryptedVote: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        commits: {
          identifier: string;
          time: number | BN | string;
          hash: string;
          encryptedVote: string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    batchReveal: {
      (
        reveals: {
          identifier: string;
          time: number | BN | string;
          price: number | BN | string;
          salt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        reveals: {
          identifier: string;
          time: number | BN | string;
          price: number | BN | string;
          salt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        reveals: {
          identifier: string;
          time: number | BN | string;
          price: number | BN | string;
          salt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        reveals: {
          identifier: string;
          time: number | BN | string;
          price: number | BN | string;
          salt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * An encrypted version of the vote is emitted in an event `EncryptedVote` to allow off-chain infrastructure to retrieve the commit. The contents of `encryptedVote` are never used on chain: it is purely for convenience.
     * commits a vote and logs an event with a data blob, typically an encrypted version of the vote
     * @param encryptedVote offchain encrypted blob containing the voters amount, time and salt.
     * @param hash keccak256 hash of the price you want to vote for and a `int256 salt`.
     * @param identifier unique price pair identifier. Eg: BTC/USD price pair.
     * @param time unix timestamp of for the price request.
     */
    commitAndEmitEncryptedVote: {
      (
        identifier: string,
        time: number | BN | string,
        hash: string,
        encryptedVote: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        time: number | BN | string,
        hash: string,
        encryptedVote: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        time: number | BN | string,
        hash: string,
        encryptedVote: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        time: number | BN | string,
        hash: string,
        encryptedVote: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * `identifier`, `time` must correspond to a price request that's currently in the commit phase. Commits can be changed.Since transaction data is public, the salt will be revealed with the vote. While this is the system’s expected behavior, voters should never reuse salts. If someone else is able to guess the voted price and knows that a salt will be reused, then they can determine the vote pre-reveal.
     * Commit a vote for a price request for `identifier` at `time`.
     * @param hash keccak256 hash of the `price`, `salt`, voter `address`, `time`, current `roundId`, and `identifier`.
     * @param identifier uniquely identifies the committed vote. EG BTC/USD price pair.
     * @param time unix timestamp of the price being voted on.
     */
    commitVote: {
      (
        identifier: string,
        time: number | BN | string,
        hash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        time: number | BN | string,
        hash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        time: number | BN | string,
        hash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        time: number | BN | string,
        hash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns the current round ID, as a function of the current time.
     */
    getCurrentRoundId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Gets the current time. Will return the last time set in `setCurrentTime` if running in test mode. Otherwise, it will return the block timestamp.
     */
    getCurrentTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Gets the queries that are being voted on this round.
     */
    getPendingRequests(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ identifier: string; time: BN; ancillaryData: string }[]>;

    /**
     * If the price is not available, the method reverts.
     * Gets the price for `identifier` and `time` if it has already been requested and resolved.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    getPrice(
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Returns the current voting phase, as a function of the current time.
     */
    getVotePhase(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Time must be in the past and the identifier must be supported.
     * Whether the price for `identifier` and `time` is available.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    hasPrice(
      identifier: string,
      time: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Time must be in the past and the identifier must be supported.
     * Enqueues a request (if a request isn't already present) for the given `identifier`, `time` pair.
     * @param identifier uniquely identifies the price requested. eg BTC/USD (encoded as bytes32) could be requested.
     * @param time unix timestamp for the price request.
     */
    requestPrice: {
      (
        identifier: string,
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        time: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    retrieveRewards: {
      (
        voterAddress: string,
        roundId: number | BN | string,
        toRetrieve: { identifier: string; time: number | BN | string }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        voterAddress: string,
        roundId: number | BN | string,
        toRetrieve: { identifier: string; time: number | BN | string }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ rawValue: BN }>;
      sendTransaction(
        voterAddress: string,
        roundId: number | BN | string,
        toRetrieve: { identifier: string; time: number | BN | string }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        voterAddress: string,
        roundId: number | BN | string,
        toRetrieve: { identifier: string; time: number | BN | string }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * The revealed `price`, `salt`, `address`, `time`, `roundId`, and `identifier`, must hash to the latest `hash` that `commitVote()` was called with. Only the committer can reveal their vote.
     * Reveal a previously committed vote for `identifier` at `time`.
     * @param identifier voted on in the commit phase. EG BTC/USD price pair.
     * @param price voted on during the commit phase.
     * @param salt value used to hide the commitment price during the commit phase.
     * @param time specifies the unix timestamp of the price is being voted on.
     */
    revealVote: {
      (
        identifier: string,
        time: number | BN | string,
        price: number | BN | string,
        salt: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        identifier: string,
        time: number | BN | string,
        price: number | BN | string,
        salt: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        identifier: string,
        time: number | BN | string,
        price: number | BN | string,
        salt: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        identifier: string,
        time: number | BN | string,
        price: number | BN | string,
        salt: number | BN | string,
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

    setGatPercentage: {
      (
        newGatPercentage: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newGatPercentage: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newGatPercentage: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newGatPercentage: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setInflationRate: {
      (
        newInflationRate: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newInflationRate: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newInflationRate: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newInflationRate: { rawValue: number | BN | string },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Can only be called by the contract owner.
     * Disables this Voting contract in favor of the migrated one.
     * @param newVotingAddress the newly migrated contract address.
     */
    setMigrated: {
      (
        newVotingAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newVotingAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newVotingAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newVotingAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * This change only applies to rounds that have not yet begun.
     * Resets the rewards expiration timeout.
     * @param NewRewardsExpirationTimeout how long a caller can wait before choosing to withdraw their rewards.
     */
    setRewardsExpirationTimeout: {
      (
        NewRewardsExpirationTimeout: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        NewRewardsExpirationTimeout: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        NewRewardsExpirationTimeout: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        NewRewardsExpirationTimeout: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * This function can be called multiple times but each round will only every have one snapshot at the time of calling `_freezeRoundVariables`.
     * snapshot the current round's token balances and lock in the inflation rate and GAT.
     * @param signature signature required to prove caller is an EOA to prevent flash loans from being included in the snapshot.
     */
    snapshotCurrentRound: {
      (signature: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    timerAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    rounds(
      roundId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      snapshotId: BN;
      inflationRate: { rawValue: BN };
      gatPercentage: { rawValue: BN };
      rewardsExpirationTime: BN;
    }>;

    getPriceRequestStatuses(
      requests: { identifier: string; time: number | BN | string }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ status: BN; lastVotingRound: BN }[]>;

    getPendingPriceRequestsArray(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;
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
