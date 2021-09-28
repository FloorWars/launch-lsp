import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PerpetualMock } from "../PerpetualMock";
export declare class PerpetualMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PerpetualMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PerpetualMock;
    connect(signer: Signer): PerpetualMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PerpetualMock;
}
