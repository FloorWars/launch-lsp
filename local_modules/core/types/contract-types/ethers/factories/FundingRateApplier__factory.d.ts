import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FundingRateApplier } from "../FundingRateApplier";
export declare class FundingRateApplier__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FundingRateApplier;
}
