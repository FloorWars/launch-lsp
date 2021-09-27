import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyMock } from "../ReentrancyMock";
export declare class ReentrancyMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyMock;
    connect(signer: Signer): ReentrancyMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyMock;
}
