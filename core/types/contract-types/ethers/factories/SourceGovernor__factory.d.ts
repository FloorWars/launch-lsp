import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SourceGovernor } from "../SourceGovernor";
export declare class SourceGovernor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finder: string, _currentChainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SourceGovernor>;
    getDeployTransaction(_finder: string, _currentChainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SourceGovernor;
    connect(signer: Signer): SourceGovernor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SourceGovernor;
}
