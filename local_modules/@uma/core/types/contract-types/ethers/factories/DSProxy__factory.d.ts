import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSProxy } from "../DSProxy";
export declare class DSProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cacheAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSProxy>;
    getDeployTransaction(_cacheAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSProxy;
    connect(signer: Signer): DSProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSProxy;
}
