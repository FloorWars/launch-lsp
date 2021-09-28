import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockOracleAncillary } from "../MockOracleAncillary";
export declare class MockOracleAncillary__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockOracleAncillary>;
    getDeployTransaction(_finderAddress: string, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockOracleAncillary;
    connect(signer: Signer): MockOracleAncillary__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockOracleAncillary;
}
