import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LiquidationWithdrawer } from "../LiquidationWithdrawer";
export declare class LiquidationWithdrawer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LiquidationWithdrawer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LiquidationWithdrawer;
    connect(signer: Signer): LiquidationWithdrawer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LiquidationWithdrawer;
}
