import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DSAuthority } from "../DSAuthority";
export declare class DSAuthority__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): DSAuthority;
}
