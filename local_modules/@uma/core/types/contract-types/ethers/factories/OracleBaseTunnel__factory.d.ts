import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OracleBaseTunnel } from "../OracleBaseTunnel";
export declare class OracleBaseTunnel__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OracleBaseTunnel;
}
