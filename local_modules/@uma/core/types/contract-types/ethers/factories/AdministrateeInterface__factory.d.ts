import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AdministrateeInterface } from "../AdministrateeInterface";
export declare class AdministrateeInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): AdministrateeInterface;
}
