import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeaconOracleMock } from "../BeaconOracleMock";
export declare class BeaconOracleMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_finderAddress: string, _chainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BeaconOracleMock>;
    getDeployTransaction(_finderAddress: string, _chainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BeaconOracleMock;
    connect(signer: Signer): BeaconOracleMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconOracleMock;
}
