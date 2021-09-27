import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DesignatedVotingFactory } from "../DesignatedVotingFactory";
export declare class DesignatedVotingFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DesignatedVotingFactory>;
    getDeployTransaction(finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DesignatedVotingFactory;
    connect(signer: Signer): DesignatedVotingFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DesignatedVotingFactory;
}
