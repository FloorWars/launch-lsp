import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FinancialProductLibrary } from "../FinancialProductLibrary";
export declare class FinancialProductLibrary__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FinancialProductLibrary;
}
