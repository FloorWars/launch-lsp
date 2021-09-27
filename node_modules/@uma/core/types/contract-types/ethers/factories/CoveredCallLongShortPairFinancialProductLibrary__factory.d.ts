import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoveredCallLongShortPairFinancialProductLibrary } from "../CoveredCallLongShortPairFinancialProductLibrary";
export declare class CoveredCallLongShortPairFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoveredCallLongShortPairFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoveredCallLongShortPairFinancialProductLibrary;
    connect(signer: Signer): CoveredCallLongShortPairFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CoveredCallLongShortPairFinancialProductLibrary;
}
