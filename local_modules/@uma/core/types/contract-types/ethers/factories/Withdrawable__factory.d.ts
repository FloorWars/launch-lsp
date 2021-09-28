import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Withdrawable } from "../Withdrawable";
export declare class Withdrawable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Withdrawable;
}
