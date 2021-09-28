import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PostExpirationIdentifierTransformationFinancialProductLibrary } from "../PostExpirationIdentifierTransformationFinancialProductLibrary";
export declare class PostExpirationIdentifierTransformationFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PostExpirationIdentifierTransformationFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PostExpirationIdentifierTransformationFinancialProductLibrary;
    connect(signer: Signer): PostExpirationIdentifierTransformationFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PostExpirationIdentifierTransformationFinancialProductLibrary;
}
