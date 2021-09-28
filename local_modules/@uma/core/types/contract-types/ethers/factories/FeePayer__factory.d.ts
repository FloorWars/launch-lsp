import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FeePayer } from "../FeePayer";
export declare class FeePayer__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FeePayer;
}
