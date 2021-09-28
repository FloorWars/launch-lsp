import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFinancialContract } from "../IFinancialContract";
export declare class IFinancialContract__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFinancialContract;
}
