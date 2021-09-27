import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERCHandler } from "../IERCHandler";
export declare class IERCHandler__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IERCHandler;
}
