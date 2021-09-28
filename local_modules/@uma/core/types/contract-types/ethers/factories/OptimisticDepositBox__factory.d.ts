import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticDepositBox } from "../OptimisticDepositBox";
export declare class OptimisticDepositBox__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_collateralAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OptimisticDepositBox>;
    getDeployTransaction(_collateralAddress: string, _finderAddress: string, _priceIdentifier: BytesLike, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OptimisticDepositBox;
    connect(signer: Signer): OptimisticDepositBox__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticDepositBox;
}
