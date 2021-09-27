import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PerpetualPositionManager } from "../PerpetualPositionManager";
export declare class PerpetualPositionManager__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_withdrawalLiveness: BigNumberish, _collateralAddress: string, _tokenAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _fundingRateIdentifier: BytesLike, _minSponsorTokens: {
        rawValue: BigNumberish;
    }, _configStoreAddress: string, _tokenScaling: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PerpetualPositionManager>;
    getDeployTransaction(_withdrawalLiveness: BigNumberish, _collateralAddress: string, _tokenAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _fundingRateIdentifier: BytesLike, _minSponsorTokens: {
        rawValue: BigNumberish;
    }, _configStoreAddress: string, _tokenScaling: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PerpetualPositionManager;
    connect(signer: Signer): PerpetualPositionManager__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PerpetualPositionManager;
}
