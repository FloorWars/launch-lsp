import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ICheckpointManager } from "../ICheckpointManager";
export declare class ICheckpointManager__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ICheckpointManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ICheckpointManager;
    connect(signer: Signer): ICheckpointManager__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ICheckpointManager;
}
