import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LongShortPairMock } from "../LongShortPairMock";
export declare class LongShortPairMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_expirationTimestamp: BigNumberish, _collateralPerPair: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LongShortPairMock>;
    getDeployTransaction(_expirationTimestamp: BigNumberish, _collateralPerPair: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LongShortPairMock;
    connect(signer: Signer): LongShortPairMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LongShortPairMock;
}
