import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AncillaryDataTest } from "../AncillaryDataTest";
export declare class AncillaryDataTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AncillaryDataTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AncillaryDataTest;
    connect(signer: Signer): AncillaryDataTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AncillaryDataTest;
}
