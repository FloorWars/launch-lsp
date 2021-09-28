import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PreExpirationIdentifierTransformationFinancialProductLibrary } from "../PreExpirationIdentifierTransformationFinancialProductLibrary";
export declare class PreExpirationIdentifierTransformationFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PreExpirationIdentifierTransformationFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PreExpirationIdentifierTransformationFinancialProductLibrary;
    connect(signer: Signer): PreExpirationIdentifierTransformationFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PreExpirationIdentifierTransformationFinancialProductLibrary;
}
