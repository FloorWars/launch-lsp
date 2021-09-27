import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressWhitelist } from "../AddressWhitelist";
export declare class AddressWhitelist__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AddressWhitelist>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AddressWhitelist;
    connect(signer: Signer): AddressWhitelist__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressWhitelist;
}
