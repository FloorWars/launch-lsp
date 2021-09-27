import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KpiOptionsFinancialProductLibrary } from "../KpiOptionsFinancialProductLibrary";
export declare class KpiOptionsFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KpiOptionsFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KpiOptionsFinancialProductLibrary;
    connect(signer: Signer): KpiOptionsFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KpiOptionsFinancialProductLibrary;
}
