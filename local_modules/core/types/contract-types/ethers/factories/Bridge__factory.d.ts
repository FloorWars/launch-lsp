import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bridge } from "../Bridge";
export declare class Bridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(chainID: BigNumberish, initialRelayers: string[], initialRelayerThreshold: BigNumberish, fee: BigNumberish, expiry: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Bridge>;
    getDeployTransaction(chainID: BigNumberish, initialRelayers: string[], initialRelayerThreshold: BigNumberish, fee: BigNumberish, expiry: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Bridge;
    connect(signer: Signer): Bridge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}
