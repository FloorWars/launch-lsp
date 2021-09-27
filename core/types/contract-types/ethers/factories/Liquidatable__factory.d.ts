import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Liquidatable } from "../Liquidatable";
export declare class Liquidatable__factory extends ContractFactory {
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
    }): Promise<Liquidatable>;
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
    attach(address: string): Liquidatable;
    connect(signer: Signer): Liquidatable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Liquidatable;
}
