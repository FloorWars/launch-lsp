import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BasicERC20 } from "../BasicERC20";
export declare class BasicERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_initialAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BasicERC20>;
    getDeployTransaction(_initialAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BasicERC20;
    connect(signer: Signer): BasicERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BasicERC20;
}
