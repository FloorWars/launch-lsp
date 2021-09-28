import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Perpetual } from "../Perpetual";
export declare class Perpetual__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(params: {
        withdrawalLiveness: BigNumberish;
        configStoreAddress: string;
        collateralAddress: string;
        tokenAddress: string;
        finderAddress: string;
        timerAddress: string;
        priceFeedIdentifier: BytesLike;
        fundingRateIdentifier: BytesLike;
        minSponsorTokens: {
            rawValue: BigNumberish;
        };
        tokenScaling: {
            rawValue: BigNumberish;
        };
        liquidationLiveness: BigNumberish;
        collateralRequirement: {
            rawValue: BigNumberish;
        };
        disputeBondPercentage: {
            rawValue: BigNumberish;
        };
        sponsorDisputeRewardPercentage: {
            rawValue: BigNumberish;
        };
        disputerDisputeRewardPercentage: {
            rawValue: BigNumberish;
        };
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Perpetual>;
    getDeployTransaction(params: {
        withdrawalLiveness: BigNumberish;
        configStoreAddress: string;
        collateralAddress: string;
        tokenAddress: string;
        finderAddress: string;
        timerAddress: string;
        priceFeedIdentifier: BytesLike;
        fundingRateIdentifier: BytesLike;
        minSponsorTokens: {
            rawValue: BigNumberish;
        };
        tokenScaling: {
            rawValue: BigNumberish;
        };
        liquidationLiveness: BigNumberish;
        collateralRequirement: {
            rawValue: BigNumberish;
        };
        disputeBondPercentage: {
            rawValue: BigNumberish;
        };
        sponsorDisputeRewardPercentage: {
            rawValue: BigNumberish;
        };
        disputerDisputeRewardPercentage: {
            rawValue: BigNumberish;
        };
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Perpetual;
    connect(signer: Signer): Perpetual__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Perpetual;
}
