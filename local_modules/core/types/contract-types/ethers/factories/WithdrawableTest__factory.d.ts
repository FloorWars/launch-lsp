import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WithdrawableTest } from "../WithdrawableTest";
export declare class WithdrawableTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WithdrawableTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawableTest;
    connect(signer: Signer): WithdrawableTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawableTest;
}
