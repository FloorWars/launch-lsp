import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VotingTest } from "../VotingTest";
export declare class VotingTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_phaseLength: BigNumberish, _gatPercentage: {
        rawValue: BigNumberish;
    }, _inflationRate: {
        rawValue: BigNumberish;
    }, _rewardsExpirationTimeout: BigNumberish, _votingToken: string, _finder: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VotingTest>;
    getDeployTransaction(_phaseLength: BigNumberish, _gatPercentage: {
        rawValue: BigNumberish;
    }, _inflationRate: {
        rawValue: BigNumberish;
    }, _rewardsExpirationTimeout: BigNumberish, _votingToken: string, _finder: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VotingTest;
    connect(signer: Signer): VotingTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): VotingTest;
}
