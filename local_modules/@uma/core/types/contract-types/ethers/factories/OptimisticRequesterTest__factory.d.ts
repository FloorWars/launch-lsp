import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticRequesterTest } from "../OptimisticRequesterTest";
export declare class OptimisticRequesterTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_optimisticOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OptimisticRequesterTest>;
    getDeployTransaction(_optimisticOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OptimisticRequesterTest;
    connect(signer: Signer): OptimisticRequesterTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticRequesterTest;
}
