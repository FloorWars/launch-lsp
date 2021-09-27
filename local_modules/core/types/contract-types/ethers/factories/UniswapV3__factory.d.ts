import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { UniswapV3 } from "../UniswapV3";
export declare class UniswapV3__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3;
}
