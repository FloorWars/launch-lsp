import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleRootTunnelMock } from "../OracleRootTunnelMock";
export declare class OracleRootTunnelMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_checkpointManager: string, _fxRoot: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleRootTunnelMock>;
    getDeployTransaction(_checkpointManager: string, _fxRoot: string, _finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleRootTunnelMock;
    connect(signer: Signer): OracleRootTunnelMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleRootTunnelMock;
}
