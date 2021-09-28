import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { StoreInterface } from "../StoreInterface";
export declare class StoreInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): StoreInterface;
}
