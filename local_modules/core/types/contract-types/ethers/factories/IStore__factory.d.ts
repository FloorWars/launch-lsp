import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStore } from "../IStore";
export declare class IStore__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStore;
}
