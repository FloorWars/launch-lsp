import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockAdministratee } from "../MockAdministratee";
export declare class MockAdministratee__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockAdministratee>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockAdministratee;
    connect(signer: Signer): MockAdministratee__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAdministratee;
}
