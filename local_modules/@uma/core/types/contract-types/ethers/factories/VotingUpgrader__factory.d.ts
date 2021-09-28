import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VotingUpgrader } from "../VotingUpgrader";
export declare class VotingUpgrader__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_governor: string, _existingVoting: string, _newVoting: string, _finder: string, _setMigratedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VotingUpgrader>;
    getDeployTransaction(_governor: string, _existingVoting: string, _newVoting: string, _finder: string, _setMigratedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VotingUpgrader;
    connect(signer: Signer): VotingUpgrader__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): VotingUpgrader;
}
