import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpiringMultiParty } from "../ExpiringMultiParty";
export declare class ExpiringMultiParty__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(params: {
        expirationTimestamp: BigNumberish;
        withdrawalLiveness: BigNumberish;
        collateralAddress: string;
        tokenAddress: string;
        finderAddress: string;
        timerAddress: string;
        financialProductLibraryAddress: string;
        priceFeedIdentifier: BytesLike;
        minSponsorTokens: {
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
    }): Promise<ExpiringMultiParty>;
    getDeployTransaction(params: {
        expirationTimestamp: BigNumberish;
        withdrawalLiveness: BigNumberish;
        collateralAddress: string;
        tokenAddress: string;
        finderAddress: string;
        timerAddress: string;
        financialProductLibraryAddress: string;
        priceFeedIdentifier: BytesLike;
        minSponsorTokens: {
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
    attach(address: string): ExpiringMultiParty;
    connect(signer: Signer): ExpiringMultiParty__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpiringMultiParty;
}
