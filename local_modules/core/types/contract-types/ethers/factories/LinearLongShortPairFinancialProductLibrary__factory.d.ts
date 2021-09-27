import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LinearLongShortPairFinancialProductLibrary } from "../LinearLongShortPairFinancialProductLibrary";
export declare class LinearLongShortPairFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LinearLongShortPairFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LinearLongShortPairFinancialProductLibrary;
    connect(signer: Signer): LinearLongShortPairFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LinearLongShortPairFinancialProductLibrary;
}
