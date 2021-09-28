import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PricelessPositionManager } from "../PricelessPositionManager";
export declare class PricelessPositionManager__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_expirationTimestamp: BigNumberish, _withdrawalLiveness: BigNumberish, _collateralAddress: string, _tokenAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _minSponsorTokens: {
        rawValue: BigNumberish;
    }, _timerAddress: string, _financialProductLibraryAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PricelessPositionManager>;
    getDeployTransaction(_expirationTimestamp: BigNumberish, _withdrawalLiveness: BigNumberish, _collateralAddress: string, _tokenAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _minSponsorTokens: {
        rawValue: BigNumberish;
    }, _timerAddress: string, _financialProductLibraryAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PricelessPositionManager;
    connect(signer: Signer): PricelessPositionManager__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PricelessPositionManager;
}
