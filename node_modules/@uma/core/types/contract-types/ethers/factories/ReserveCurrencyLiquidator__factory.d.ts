import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReserveCurrencyLiquidator } from "../ReserveCurrencyLiquidator";
export declare class ReserveCurrencyLiquidator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReserveCurrencyLiquidator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReserveCurrencyLiquidator;
    connect(signer: Signer): ReserveCurrencyLiquidator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveCurrencyLiquidator;
}
