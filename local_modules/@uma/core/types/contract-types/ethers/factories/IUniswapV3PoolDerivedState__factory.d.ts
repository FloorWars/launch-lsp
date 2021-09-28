import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolDerivedState } from "../IUniswapV3PoolDerivedState";
export declare class IUniswapV3PoolDerivedState__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolDerivedState;
}
