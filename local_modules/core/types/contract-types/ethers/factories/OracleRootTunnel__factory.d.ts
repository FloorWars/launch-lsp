import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleRootTunnel } from "../OracleRootTunnel";
export declare class OracleRootTunnel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_checkpointManager: string, _fxRoot: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleRootTunnel>;
    getDeployTransaction(_checkpointManager: string, _fxRoot: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleRootTunnel;
    connect(signer: Signer): OracleRootTunnel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleRootTunnel;
}
