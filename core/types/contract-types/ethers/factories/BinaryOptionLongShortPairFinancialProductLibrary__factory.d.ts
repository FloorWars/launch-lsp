import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BinaryOptionLongShortPairFinancialProductLibrary } from "../BinaryOptionLongShortPairFinancialProductLibrary";
export declare class BinaryOptionLongShortPairFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BinaryOptionLongShortPairFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BinaryOptionLongShortPairFinancialProductLibrary;
    connect(signer: Signer): BinaryOptionLongShortPairFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BinaryOptionLongShortPairFinancialProductLibrary;
}
