import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ExpandedIERC20 } from "../ExpandedIERC20";
export declare class ExpandedIERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ExpandedIERC20;
}
