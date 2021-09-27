import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Voting } from "../Voting";
export declare class Voting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_phaseLength: BigNumberish, _gatPercentage: {
        rawValue: BigNumberish;
    }, _inflationRate: {
        rawValue: BigNumberish;
    }, _rewardsExpirationTimeout: BigNumberish, _votingToken: string, _finder: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Voting>;
    getDeployTransaction(_phaseLength: BigNumberish, _gatPercentage: {
        rawValue: BigNumberish;
    }, _inflationRate: {
        rawValue: BigNumberish;
    }, _rewardsExpirationTimeout: BigNumberish, _votingToken: string, _finder: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Voting;
    connect(signer: Signer): Voting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Voting;
}
