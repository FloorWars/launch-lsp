import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StateSyncMock } from "../StateSyncMock";
export declare class StateSyncMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StateSyncMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StateSyncMock;
    connect(signer: Signer): StateSyncMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StateSyncMock;
}
