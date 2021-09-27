import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lockable } from "../Lockable";
export declare class Lockable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Lockable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Lockable;
    connect(signer: Signer): Lockable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Lockable;
}
