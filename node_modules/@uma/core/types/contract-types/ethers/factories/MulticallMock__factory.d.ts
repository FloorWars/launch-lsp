import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MulticallMock } from "../MulticallMock";
export declare class MulticallMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MulticallMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MulticallMock;
    connect(signer: Signer): MulticallMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MulticallMock;
}
