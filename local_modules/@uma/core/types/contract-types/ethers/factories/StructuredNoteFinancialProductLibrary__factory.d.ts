import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StructuredNoteFinancialProductLibrary } from "../StructuredNoteFinancialProductLibrary";
export declare class StructuredNoteFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StructuredNoteFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StructuredNoteFinancialProductLibrary;
    connect(signer: Signer): StructuredNoteFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StructuredNoteFinancialProductLibrary;
}
