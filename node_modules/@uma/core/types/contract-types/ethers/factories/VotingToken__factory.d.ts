import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VotingToken } from "../VotingToken";
export declare class VotingToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VotingToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VotingToken;
    connect(signer: Signer): VotingToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): VotingToken;
}
