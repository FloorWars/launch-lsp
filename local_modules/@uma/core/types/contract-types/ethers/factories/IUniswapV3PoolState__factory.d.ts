import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolState } from "../IUniswapV3PoolState";
export declare class IUniswapV3PoolState__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolState;
}
