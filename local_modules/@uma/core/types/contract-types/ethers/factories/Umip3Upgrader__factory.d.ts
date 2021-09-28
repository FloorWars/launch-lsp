import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Umip3Upgrader } from "../Umip3Upgrader";
export declare class Umip3Upgrader__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_existingGovernor: string, _existingVoting: string, _finder: string, _voting: string, _identifierWhitelist: string, _store: string, _financialContractsAdmin: string, _registry: string, _newGovernor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Umip3Upgrader>;
    getDeployTransaction(_existingGovernor: string, _existingVoting: string, _finder: string, _voting: string, _identifierWhitelist: string, _store: string, _financialContractsAdmin: string, _registry: string, _newGovernor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Umip3Upgrader;
    connect(signer: Signer): Umip3Upgrader__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Umip3Upgrader;
}
