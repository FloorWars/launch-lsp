import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStateSender } from "../IStateSender";
export declare class IStateSender__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStateSender;
}
