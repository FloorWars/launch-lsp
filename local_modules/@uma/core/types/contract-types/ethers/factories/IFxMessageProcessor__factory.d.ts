import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFxMessageProcessor } from "../IFxMessageProcessor";
export declare class IFxMessageProcessor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFxMessageProcessor;
}
