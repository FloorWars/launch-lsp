import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { UniswapV2 } from "../UniswapV2";
export declare class UniswapV2__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2;
}
