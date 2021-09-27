import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingAncillaryInterface } from "../VotingAncillaryInterface";
export declare class VotingAncillaryInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VotingAncillaryInterface;
}
