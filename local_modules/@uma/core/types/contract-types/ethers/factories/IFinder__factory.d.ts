import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFinder } from "../IFinder";
export declare class IFinder__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFinder;
}
