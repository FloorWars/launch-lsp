import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSGuardFactory } from "../DSGuardFactory";
export declare class DSGuardFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSGuardFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSGuardFactory;
    connect(signer: Signer): DSGuardFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSGuardFactory;
}
