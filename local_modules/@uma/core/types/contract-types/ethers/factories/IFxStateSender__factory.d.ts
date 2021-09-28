import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFxStateSender } from "../IFxStateSender";
export declare class IFxStateSender__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFxStateSender;
}
