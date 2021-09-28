import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingInterface } from "../VotingInterface";
export declare class VotingInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VotingInterface;
}
