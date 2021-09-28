import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV2Broker } from "../UniswapV2Broker";
export declare class UniswapV2Broker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV2Broker>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV2Broker;
    connect(signer: Signer): UniswapV2Broker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Broker;
}
