import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PositionSettler } from "../PositionSettler";
export declare class PositionSettler__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PositionSettler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PositionSettler;
    connect(signer: Signer): PositionSettler__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionSettler;
}
