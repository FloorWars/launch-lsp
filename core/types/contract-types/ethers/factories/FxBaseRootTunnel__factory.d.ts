import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FxBaseRootTunnel } from "../FxBaseRootTunnel";
export declare class FxBaseRootTunnel__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FxBaseRootTunnel;
}
