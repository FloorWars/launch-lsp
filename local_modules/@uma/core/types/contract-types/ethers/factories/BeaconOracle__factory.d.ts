import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BeaconOracle } from "../BeaconOracle";
export declare class BeaconOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconOracle;
}
