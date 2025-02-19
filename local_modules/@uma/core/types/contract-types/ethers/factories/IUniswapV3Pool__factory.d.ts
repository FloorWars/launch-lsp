import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV3Pool } from "../IUniswapV3Pool";
export declare class IUniswapV3Pool__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3Pool;
}
