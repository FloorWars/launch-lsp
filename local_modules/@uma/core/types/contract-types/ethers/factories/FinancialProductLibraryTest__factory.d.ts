import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FinancialProductLibraryTest } from "../FinancialProductLibraryTest";
export declare class FinancialProductLibraryTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_priceTransformationScalar: {
        rawValue: BigNumberish;
    }, _collateralRequirementTransformationScalar: {
        rawValue: BigNumberish;
    }, _transformedPriceIdentifier: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FinancialProductLibraryTest>;
    getDeployTransaction(_priceTransformationScalar: {
        rawValue: BigNumberish;
    }, _collateralRequirementTransformationScalar: {
        rawValue: BigNumberish;
    }, _transformedPriceIdentifier: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FinancialProductLibraryTest;
    connect(signer: Signer): FinancialProductLibraryTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FinancialProductLibraryTest;
}
