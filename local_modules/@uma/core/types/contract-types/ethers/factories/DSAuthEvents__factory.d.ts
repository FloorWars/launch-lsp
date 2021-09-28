import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSAuthEvents } from "../DSAuthEvents";
export declare class DSAuthEvents__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSAuthEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSAuthEvents;
    connect(signer: Signer): DSAuthEvents__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSAuthEvents;
}
