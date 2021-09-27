import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH9 } from "../WETH9";
export declare class WETH9__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WETH9>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WETH9;
    connect(signer: Signer): WETH9__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH9;
}
