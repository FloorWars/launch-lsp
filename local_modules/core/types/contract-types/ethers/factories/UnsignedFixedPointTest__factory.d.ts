import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnsignedFixedPointTest } from "../UnsignedFixedPointTest";
export declare class UnsignedFixedPointTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnsignedFixedPointTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnsignedFixedPointTest;
    connect(signer: Signer): UnsignedFixedPointTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UnsignedFixedPointTest;
}
