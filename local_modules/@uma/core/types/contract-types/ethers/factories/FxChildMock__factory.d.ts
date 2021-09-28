import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FxChildMock } from "../FxChildMock";
export declare class FxChildMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_systemCaller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FxChildMock>;
    getDeployTransaction(_systemCaller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FxChildMock;
    connect(signer: Signer): FxChildMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FxChildMock;
}
