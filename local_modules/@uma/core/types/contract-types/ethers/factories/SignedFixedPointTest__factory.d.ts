import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SignedFixedPointTest } from "../SignedFixedPointTest";
export declare class SignedFixedPointTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SignedFixedPointTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SignedFixedPointTest;
    connect(signer: Signer): SignedFixedPointTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SignedFixedPointTest;
}
