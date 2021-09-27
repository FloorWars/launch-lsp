import { Signer, BytesLike, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpiringMultiPartyMock } from "../ExpiringMultiPartyMock";
export declare class ExpiringMultiPartyMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_financialProductLibraryAddress: string, _expirationTimestamp: BigNumberish, _collateralRequirement: {
        rawValue: BigNumberish;
    }, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExpiringMultiPartyMock>;
    getDeployTransaction(_financialProductLibraryAddress: string, _expirationTimestamp: BigNumberish, _collateralRequirement: {
        rawValue: BigNumberish;
    }, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExpiringMultiPartyMock;
    connect(signer: Signer): ExpiringMultiPartyMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpiringMultiPartyMock;
}
