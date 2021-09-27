import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapRouter } from "../ISwapRouter";
export declare class ISwapRouter__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapRouter;
}
