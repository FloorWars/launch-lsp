import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestableTest } from "../TestableTest";
export declare class TestableTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestableTest>;
    getDeployTransaction(_timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestableTest;
    connect(signer: Signer): TestableTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestableTest;
}
