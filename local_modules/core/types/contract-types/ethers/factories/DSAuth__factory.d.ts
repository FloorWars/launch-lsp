import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSAuth } from "../DSAuth";
export declare class DSAuth__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSAuth>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSAuth;
    connect(signer: Signer): DSAuth__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSAuth;
}
