import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenRedeemer } from "../TokenRedeemer";
export declare class TokenRedeemer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenRedeemer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenRedeemer;
    connect(signer: Signer): TokenRedeemer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenRedeemer;
}
