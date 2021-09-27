import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleChildTunnel } from "../OracleChildTunnel";
export declare class OracleChildTunnel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_fxChild: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleChildTunnel>;
    getDeployTransaction(_fxChild: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleChildTunnel;
    connect(signer: Signer): OracleChildTunnel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleChildTunnel;
}
