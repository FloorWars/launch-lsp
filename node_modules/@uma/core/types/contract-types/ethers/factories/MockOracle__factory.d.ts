import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockOracle } from "../MockOracle";
export declare class MockOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockOracle>;
    getDeployTransaction(_finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockOracle;
    connect(signer: Signer): MockOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockOracle;
}
