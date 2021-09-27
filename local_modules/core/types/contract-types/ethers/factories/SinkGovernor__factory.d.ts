import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SinkGovernor } from "../SinkGovernor";
export declare class SinkGovernor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SinkGovernor>;
    getDeployTransaction(_finder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SinkGovernor;
    connect(signer: Signer): SinkGovernor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SinkGovernor;
}
