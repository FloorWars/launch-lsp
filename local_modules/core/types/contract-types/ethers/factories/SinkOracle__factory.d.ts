import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SinkOracle } from "../SinkOracle";
export declare class SinkOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _chainID: BigNumberish, _destinationChainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SinkOracle>;
    getDeployTransaction(_finderAddress: string, _chainID: BigNumberish, _destinationChainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SinkOracle;
    connect(signer: Signer): SinkOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SinkOracle;
}
