import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSProxyCache } from "../DSProxyCache";
export declare class DSProxyCache__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSProxyCache>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSProxyCache;
    connect(signer: Signer): DSProxyCache__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSProxyCache;
}
