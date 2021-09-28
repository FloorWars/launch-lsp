import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpiringMultiPartyCreator } from "../ExpiringMultiPartyCreator";
export declare class ExpiringMultiPartyCreator__factory extends ContractFactory {
    constructor(linkLibraryAddresses: ExpiringMultiPartyCreatorLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: ExpiringMultiPartyCreatorLibraryAddresses): string;
    deploy(_finderAddress: string, _tokenFactoryAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExpiringMultiPartyCreator>;
    getDeployTransaction(_finderAddress: string, _tokenFactoryAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExpiringMultiPartyCreator;
    connect(signer: Signer): ExpiringMultiPartyCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpiringMultiPartyCreator;
}
export interface ExpiringMultiPartyCreatorLibraryAddresses {
    ["__ExpiringMultiPartyLib_________________"]: string;
}
