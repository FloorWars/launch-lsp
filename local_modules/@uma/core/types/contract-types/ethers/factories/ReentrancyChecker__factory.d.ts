import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyChecker } from "../ReentrancyChecker";
export declare class ReentrancyChecker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyChecker>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyChecker;
    connect(signer: Signer): ReentrancyChecker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyChecker;
}
