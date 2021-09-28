import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governor } from "../Governor";
export declare class Governor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _startingId: BigNumberish, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Governor>;
    getDeployTransaction(_finderAddress: string, _startingId: BigNumberish, _timerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Governor;
    connect(signer: Signer): Governor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Governor;
}
