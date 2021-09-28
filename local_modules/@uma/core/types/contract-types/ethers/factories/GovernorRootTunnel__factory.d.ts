import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorRootTunnel } from "../GovernorRootTunnel";
export declare class GovernorRootTunnel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_checkpointManager: string, _fxRoot: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorRootTunnel>;
    getDeployTransaction(_checkpointManager: string, _fxRoot: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorRootTunnel;
    connect(signer: Signer): GovernorRootTunnel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorRootTunnel;
}
