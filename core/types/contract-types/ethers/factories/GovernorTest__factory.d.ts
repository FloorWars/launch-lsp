import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorTest } from "../GovernorTest";
export declare class GovernorTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorTest>;
    getDeployTransaction(_timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorTest;
    connect(signer: Signer): GovernorTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorTest;
}
