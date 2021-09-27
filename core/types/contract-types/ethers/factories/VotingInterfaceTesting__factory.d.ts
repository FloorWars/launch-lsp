import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingInterfaceTesting } from "../VotingInterfaceTesting";
export declare class VotingInterfaceTesting__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VotingInterfaceTesting;
}
