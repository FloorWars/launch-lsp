import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleDistributor } from "../MerkleDistributor";
export declare class MerkleDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MerkleDistributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MerkleDistributor;
    connect(signer: Signer): MerkleDistributor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleDistributor;
}
