import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IdentifierWhitelistInterface } from "../IdentifierWhitelistInterface";
export declare class IdentifierWhitelistInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IdentifierWhitelistInterface;
}
