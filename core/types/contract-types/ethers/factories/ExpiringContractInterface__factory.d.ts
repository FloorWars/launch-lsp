import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ExpiringContractInterface } from "../ExpiringContractInterface";
export declare class ExpiringContractInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ExpiringContractInterface;
}
