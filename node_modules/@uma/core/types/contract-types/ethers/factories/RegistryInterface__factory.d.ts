import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RegistryInterface } from "../RegistryInterface";
export declare class RegistryInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): RegistryInterface;
}
