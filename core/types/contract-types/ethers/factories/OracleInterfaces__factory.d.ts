import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleInterfaces } from "../OracleInterfaces";
export declare class OracleInterfaces__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleInterfaces>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleInterfaces;
    connect(signer: Signer): OracleInterfaces__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleInterfaces;
}
