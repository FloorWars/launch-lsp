import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticOracle } from "../OptimisticOracle";
export declare class OptimisticOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_liveness: BigNumberish, _finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OptimisticOracle>;
    getDeployTransaction(_liveness: BigNumberish, _finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OptimisticOracle;
    connect(signer: Signer): OptimisticOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticOracle;
}
