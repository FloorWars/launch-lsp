import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolOwnerActions } from "../IUniswapV3PoolOwnerActions";
export declare class IUniswapV3PoolOwnerActions__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolOwnerActions;
}
