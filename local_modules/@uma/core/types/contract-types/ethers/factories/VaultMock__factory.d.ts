import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultMock } from "../VaultMock";
export declare class VaultMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VaultMock>;
    getDeployTransaction(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VaultMock;
    connect(signer: Signer): VaultMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): VaultMock;
}
