import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReserveCurrencyDisputer } from "../ReserveCurrencyDisputer";
export declare class ReserveCurrencyDisputer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReserveCurrencyDisputer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReserveCurrencyDisputer;
    connect(signer: Signer): ReserveCurrencyDisputer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveCurrencyDisputer;
}
