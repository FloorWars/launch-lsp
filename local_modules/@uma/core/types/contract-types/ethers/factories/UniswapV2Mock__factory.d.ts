import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV2Mock } from "../UniswapV2Mock";
export declare class UniswapV2Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV2Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV2Mock;
    connect(signer: Signer): UniswapV2Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Mock;
}
