import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LongShortPairCreator } from "../LongShortPairCreator";
export declare class LongShortPairCreator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finder: string, _tokenFactory: string, _timer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LongShortPairCreator>;
    getDeployTransaction(_finder: string, _tokenFactory: string, _timer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LongShortPairCreator;
    connect(signer: Signer): LongShortPairCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LongShortPairCreator;
}
