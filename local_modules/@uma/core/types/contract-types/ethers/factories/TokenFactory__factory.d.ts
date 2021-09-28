import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenFactory } from "../TokenFactory";
export declare class TokenFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenFactory;
    connect(signer: Signer): TokenFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenFactory;
}
