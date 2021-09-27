import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PerpetualCreator } from "../PerpetualCreator";
export declare class PerpetualCreator__factory extends ContractFactory {
    constructor(linkLibraryAddresses: PerpetualCreatorLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: PerpetualCreatorLibraryAddresses): string;
    deploy(_finderAddress: string, _tokenFactoryAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PerpetualCreator>;
    getDeployTransaction(_finderAddress: string, _tokenFactoryAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PerpetualCreator;
    connect(signer: Signer): PerpetualCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PerpetualCreator;
}
export interface PerpetualCreatorLibraryAddresses {
    ["__PerpetualLib__________________________"]: string;
}
