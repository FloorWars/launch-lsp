import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OracleAncillaryInterface } from "../OracleAncillaryInterface";
export declare class OracleAncillaryInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OracleAncillaryInterface;
}
