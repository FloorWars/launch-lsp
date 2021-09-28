import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OracleInterface } from "../OracleInterface";
export declare class OracleInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OracleInterface;
}
