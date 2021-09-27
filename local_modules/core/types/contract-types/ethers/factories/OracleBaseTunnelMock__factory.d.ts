import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleBaseTunnelMock } from "../OracleBaseTunnelMock";
export declare class OracleBaseTunnelMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleBaseTunnelMock>;
    getDeployTransaction(_finderAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleBaseTunnelMock;
    connect(signer: Signer): OracleBaseTunnelMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleBaseTunnelMock;
}
