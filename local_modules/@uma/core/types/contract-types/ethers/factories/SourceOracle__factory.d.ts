import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SourceOracle } from "../SourceOracle";
export declare class SourceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _chainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SourceOracle>;
    getDeployTransaction(_finderAddress: string, _chainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SourceOracle;
    connect(signer: Signer): SourceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SourceOracle;
}
