import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSNote } from "../DSNote";
export declare class DSNote__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSNote>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSNote;
    connect(signer: Signer): DSNote__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSNote;
}
