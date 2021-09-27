import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC20Standard } from "../IERC20Standard";
export declare class IERC20Standard__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Standard;
}
