import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AddressWhitelistInterface } from "../AddressWhitelistInterface";
export declare class AddressWhitelistInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): AddressWhitelistInterface;
}
