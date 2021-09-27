import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DepositBox } from "../DepositBox";
export declare class DepositBox__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_collateralAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DepositBox>;
    getDeployTransaction(_collateralAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DepositBox;
    connect(signer: Signer): DepositBox__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DepositBox;
}
