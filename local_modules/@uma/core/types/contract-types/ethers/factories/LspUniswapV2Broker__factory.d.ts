import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LspUniswapV2Broker } from "../LspUniswapV2Broker";
export declare class LspUniswapV2Broker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LspUniswapV2Broker>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LspUniswapV2Broker;
    connect(signer: Signer): LspUniswapV2Broker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LspUniswapV2Broker;
}
