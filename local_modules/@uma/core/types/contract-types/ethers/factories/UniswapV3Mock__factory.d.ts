import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3Mock } from "../UniswapV3Mock";
export declare class UniswapV3Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3Mock;
    connect(signer: Signer): UniswapV3Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3Mock;
}
