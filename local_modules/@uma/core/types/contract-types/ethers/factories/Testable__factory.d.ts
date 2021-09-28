import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Testable } from "../Testable";
export declare class Testable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Testable;
}
