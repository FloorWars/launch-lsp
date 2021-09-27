import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSGuardEvents } from "../DSGuardEvents";
export declare class DSGuardEvents__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DSGuardEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DSGuardEvents;
    connect(signer: Signer): DSGuardEvents__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DSGuardEvents;
}
