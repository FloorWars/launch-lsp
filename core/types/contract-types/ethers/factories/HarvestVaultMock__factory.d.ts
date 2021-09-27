import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HarvestVaultMock } from "../HarvestVaultMock";
export declare class HarvestVaultMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<HarvestVaultMock>;
    getDeployTransaction(_underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): HarvestVaultMock;
    connect(signer: Signer): HarvestVaultMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): HarvestVaultMock;
}
