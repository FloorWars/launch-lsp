import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Snapshot } from "../ERC20Snapshot";
export declare class ERC20Snapshot__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Snapshot;
}
