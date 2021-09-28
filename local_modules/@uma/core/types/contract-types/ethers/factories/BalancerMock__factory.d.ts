import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BalancerMock } from "../BalancerMock";
export declare class BalancerMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BalancerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BalancerMock;
    connect(signer: Signer): BalancerMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BalancerMock;
}
