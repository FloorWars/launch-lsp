import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSProxyFactory } from "../DSProxyFactory";
export declare class DSProxyFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSProxyFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSProxyFactory;
    connect(signer: Signer): DSProxyFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSProxyFactory;
}
