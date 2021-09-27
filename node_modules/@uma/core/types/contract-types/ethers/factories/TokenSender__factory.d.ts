import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenSender } from "../TokenSender";
export declare class TokenSender__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenSender>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenSender;
    connect(signer: Signer): TokenSender__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenSender;
}
