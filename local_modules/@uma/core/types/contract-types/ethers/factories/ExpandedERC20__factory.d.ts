import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpandedERC20 } from "../ExpandedERC20";
export declare class ExpandedERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExpandedERC20>;
    getDeployTransaction(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExpandedERC20;
    connect(signer: Signer): ExpandedERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpandedERC20;
}
