import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStateReceiver } from "../IStateReceiver";
export declare class IStateReceiver__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStateReceiver;
}
