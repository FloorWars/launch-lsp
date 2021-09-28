import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { EmergencyShutdownable } from "../EmergencyShutdownable";
export declare class EmergencyShutdownable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): EmergencyShutdownable;
}
