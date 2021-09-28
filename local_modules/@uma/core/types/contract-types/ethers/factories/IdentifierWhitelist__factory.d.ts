import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IdentifierWhitelist } from "../IdentifierWhitelist";
export declare class IdentifierWhitelist__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<IdentifierWhitelist>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): IdentifierWhitelist;
    connect(signer: Signer): IdentifierWhitelist__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): IdentifierWhitelist;
}
