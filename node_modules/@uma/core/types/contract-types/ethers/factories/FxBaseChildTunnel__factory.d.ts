import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FxBaseChildTunnel } from "../FxBaseChildTunnel";
export declare class FxBaseChildTunnel__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FxBaseChildTunnel;
}
