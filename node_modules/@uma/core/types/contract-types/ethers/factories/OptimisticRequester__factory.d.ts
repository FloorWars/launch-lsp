import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OptimisticRequester } from "../OptimisticRequester";
export declare class OptimisticRequester__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticRequester;
}
