import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FundingRateApplierTest } from "../FundingRateApplierTest";
export declare class FundingRateApplierTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_fundingRateIdentifier: BytesLike, _collateralAddress: string, _finderAddress: string, _configStoreAddress: string, _tokenScaling: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FundingRateApplierTest>;
    getDeployTransaction(_fundingRateIdentifier: BytesLike, _collateralAddress: string, _finderAddress: string, _configStoreAddress: string, _tokenScaling: {
        rawValue: BigNumberish;
    }, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FundingRateApplierTest;
    connect(signer: Signer): FundingRateApplierTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FundingRateApplierTest;
}
