import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SyntheticToken } from "../SyntheticToken";
export declare class SyntheticToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(tokenName: string, tokenSymbol: string, tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SyntheticToken>;
    getDeployTransaction(tokenName: string, tokenSymbol: string, tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SyntheticToken;
    connect(signer: Signer): SyntheticToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SyntheticToken;
}
