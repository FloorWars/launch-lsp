import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGenericHandler } from "../IGenericHandler";
export declare class IGenericHandler__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IGenericHandler;
}
