import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VaultInterface } from "../VaultInterface";
export declare class VaultInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VaultInterface;
}
