import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LongShortPairFinancialProjectLibraryTest } from "../LongShortPairFinancialProjectLibraryTest";
export declare class LongShortPairFinancialProjectLibraryTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LongShortPairFinancialProjectLibraryTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LongShortPairFinancialProjectLibraryTest;
    connect(signer: Signer): LongShortPairFinancialProjectLibraryTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LongShortPairFinancialProjectLibraryTest;
}
