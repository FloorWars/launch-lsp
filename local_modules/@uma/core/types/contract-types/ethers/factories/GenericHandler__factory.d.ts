import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenericHandler } from "../GenericHandler";
export declare class GenericHandler__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(bridgeAddress: string, initialResourceIDs: BytesLike[], initialContractAddresses: string[], initialDepositFunctionSignatures: BytesLike[], initialExecuteFunctionSignatures: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GenericHandler>;
    getDeployTransaction(bridgeAddress: string, initialResourceIDs: BytesLike[], initialContractAddresses: string[], initialDepositFunctionSignatures: BytesLike[], initialExecuteFunctionSignatures: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GenericHandler;
    connect(signer: Signer): GenericHandler__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericHandler;
}
