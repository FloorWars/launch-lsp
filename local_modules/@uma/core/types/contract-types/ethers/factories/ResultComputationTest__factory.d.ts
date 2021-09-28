import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ResultComputationTest } from "../ResultComputationTest";
export declare class ResultComputationTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ResultComputationTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ResultComputationTest;
    connect(signer: Signer): ResultComputationTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ResultComputationTest;
}
