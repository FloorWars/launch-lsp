import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingAncillaryInterfaceTesting } from "../VotingAncillaryInterfaceTesting";
export declare class VotingAncillaryInterfaceTesting__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VotingAncillaryInterfaceTesting;
}
