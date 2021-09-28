import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Store } from "../Store";
export declare class Store__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_fixedOracleFeePerSecondPerPfc: {
        rawValue: BigNumberish;
    }, _weeklyDelayFeePerSecondPerPfc: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Store>;
    getDeployTransaction(_fixedOracleFeePerSecondPerPfc: {
        rawValue: BigNumberish;
    }, _weeklyDelayFeePerSecondPerPfc: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Store;
    connect(signer: Signer): Store__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Store;
}
