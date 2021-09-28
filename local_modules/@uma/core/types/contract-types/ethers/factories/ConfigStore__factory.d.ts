import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConfigStore } from "../ConfigStore";
export declare class ConfigStore__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_initialConfig: {
        timelockLiveness: BigNumberish;
        rewardRatePerSecond: {
            rawValue: BigNumberish;
        };
        proposerBondPercentage: {
            rawValue: BigNumberish;
        };
        maxFundingRate: {
            rawValue: BigNumberish;
        };
        minFundingRate: {
            rawValue: BigNumberish;
        };
        proposalTimePastLimit: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ConfigStore>;
    getDeployTransaction(_initialConfig: {
        timelockLiveness: BigNumberish;
        rewardRatePerSecond: {
            rawValue: BigNumberish;
        };
        proposerBondPercentage: {
            rawValue: BigNumberish;
        };
        maxFundingRate: {
            rawValue: BigNumberish;
        };
        minFundingRate: {
            rawValue: BigNumberish;
        };
        proposalTimePastLimit: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ConfigStore;
    connect(signer: Signer): ConfigStore__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ConfigStore;
}
