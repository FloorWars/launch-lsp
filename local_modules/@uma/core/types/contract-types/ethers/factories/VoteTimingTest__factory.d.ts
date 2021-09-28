import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VoteTimingTest } from "../VoteTimingTest";
export declare class VoteTimingTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(phaseLength: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VoteTimingTest>;
    getDeployTransaction(phaseLength: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VoteTimingTest;
    connect(signer: Signer): VoteTimingTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): VoteTimingTest;
}
