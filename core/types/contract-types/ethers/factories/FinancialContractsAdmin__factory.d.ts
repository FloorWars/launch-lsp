import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FinancialContractsAdmin } from "../FinancialContractsAdmin";
export declare class FinancialContractsAdmin__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FinancialContractsAdmin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FinancialContractsAdmin;
    connect(signer: Signer): FinancialContractsAdmin__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FinancialContractsAdmin;
}
