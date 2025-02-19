import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Balancer } from "../Balancer";
export declare class Balancer__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Balancer;
}
