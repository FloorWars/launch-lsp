import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ConfigStoreInterface } from "../ConfigStoreInterface";
export declare class ConfigStoreInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ConfigStoreInterface;
}
