import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyAttack } from "../ReentrancyAttack";
export declare class ReentrancyAttack__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyAttack>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyAttack;
    connect(signer: Signer): ReentrancyAttack__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyAttack;
}
