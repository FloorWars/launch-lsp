import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OptimisticOracleInterface } from "../OptimisticOracleInterface";
export declare class OptimisticOracleInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticOracleInterface;
}
