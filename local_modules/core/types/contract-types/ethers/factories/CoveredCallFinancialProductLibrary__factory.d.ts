import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoveredCallFinancialProductLibrary } from "../CoveredCallFinancialProductLibrary";
export declare class CoveredCallFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoveredCallFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoveredCallFinancialProductLibrary;
    connect(signer: Signer): CoveredCallFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CoveredCallFinancialProductLibrary;
}
