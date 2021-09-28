import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorChildTunnel } from "../GovernorChildTunnel";
export declare class GovernorChildTunnel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_fxChild: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorChildTunnel>;
    getDeployTransaction(_fxChild: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorChildTunnel;
    connect(signer: Signer): GovernorChildTunnel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorChildTunnel;
}
