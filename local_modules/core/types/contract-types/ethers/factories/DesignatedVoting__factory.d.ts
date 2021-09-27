import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DesignatedVoting } from "../DesignatedVoting";
export declare class DesignatedVoting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(finderAddress: string, ownerAddress: string, voterAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DesignatedVoting>;
    getDeployTransaction(finderAddress: string, ownerAddress: string, voterAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DesignatedVoting;
    connect(signer: Signer): DesignatedVoting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DesignatedVoting;
}
