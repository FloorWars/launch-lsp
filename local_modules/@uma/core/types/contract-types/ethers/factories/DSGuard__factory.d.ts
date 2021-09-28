import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSGuard } from "../DSGuard";
export declare class DSGuard__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSGuard>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSGuard;
    connect(signer: Signer): DSGuard__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSGuard;
}
