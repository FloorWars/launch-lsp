import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiRoleTest } from "../MultiRoleTest";
export declare class MultiRoleTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MultiRoleTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MultiRoleTest;
    connect(signer: Signer): MultiRoleTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiRoleTest;
}
