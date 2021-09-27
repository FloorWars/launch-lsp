import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LongShortPairFinancialProductLibrary } from "../LongShortPairFinancialProductLibrary";
export declare class LongShortPairFinancialProductLibrary__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): LongShortPairFinancialProductLibrary;
}
