import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestnetERC20 } from "../TestnetERC20";
export declare class TestnetERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_name: string, _symbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestnetERC20>;
    getDeployTransaction(_name: string, _symbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestnetERC20;
    connect(signer: Signer): TestnetERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestnetERC20;
}
