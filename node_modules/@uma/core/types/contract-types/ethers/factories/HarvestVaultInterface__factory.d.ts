import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { HarvestVaultInterface } from "../HarvestVaultInterface";
export declare class HarvestVaultInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): HarvestVaultInterface;
}
