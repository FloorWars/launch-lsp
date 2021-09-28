import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RangeBondLongShortPairFinancialProductLibrary } from "../RangeBondLongShortPairFinancialProductLibrary";
export declare class RangeBondLongShortPairFinancialProductLibrary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RangeBondLongShortPairFinancialProductLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RangeBondLongShortPairFinancialProductLibrary;
    connect(signer: Signer): RangeBondLongShortPairFinancialProductLibrary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RangeBondLongShortPairFinancialProductLibrary;
}
