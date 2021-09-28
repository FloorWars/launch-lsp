import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3Broker } from "../UniswapV3Broker";
export declare class UniswapV3Broker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3Broker>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3Broker;
    connect(signer: Signer): UniswapV3Broker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3Broker;
}
