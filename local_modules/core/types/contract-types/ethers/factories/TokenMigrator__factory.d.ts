import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenMigrator } from "../TokenMigrator";
export declare class TokenMigrator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_rate: {
        rawValue: BigNumberish;
    }, _oldToken: string, _newToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenMigrator>;
    getDeployTransaction(_rate: {
        rawValue: BigNumberish;
    }, _oldToken: string, _newToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenMigrator;
    connect(signer: Signer): TokenMigrator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenMigrator;
}
