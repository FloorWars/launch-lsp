import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LongShortPair } from "../LongShortPair";
export declare class LongShortPair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(params: {
        pairName: string;
        expirationTimestamp: BigNumberish;
        collateralPerPair: BigNumberish;
        priceIdentifier: BytesLike;
        longToken: string;
        shortToken: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: BytesLike;
        prepaidProposerReward: BigNumberish;
        optimisticOracleLivenessTime: BigNumberish;
        optimisticOracleProposerBond: BigNumberish;
        finder: string;
        timerAddress: string;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LongShortPair>;
    getDeployTransaction(params: {
        pairName: string;
        expirationTimestamp: BigNumberish;
        collateralPerPair: BigNumberish;
        priceIdentifier: BytesLike;
        longToken: string;
        shortToken: string;
        collateralToken: string;
        financialProductLibrary: string;
        customAncillaryData: BytesLike;
        prepaidProposerReward: BigNumberish;
        optimisticOracleLivenessTime: BigNumberish;
        optimisticOracleProposerBond: BigNumberish;
        finder: string;
        timerAddress: string;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LongShortPair;
    connect(signer: Signer): LongShortPair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LongShortPair;
}
