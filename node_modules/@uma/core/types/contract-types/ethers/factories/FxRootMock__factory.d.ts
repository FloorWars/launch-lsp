import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FxRootMock } from "../FxRootMock";
export declare class FxRootMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_stateSender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FxRootMock>;
    getDeployTransaction(_stateSender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FxRootMock;
    connect(signer: Signer): FxRootMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FxRootMock;
}
