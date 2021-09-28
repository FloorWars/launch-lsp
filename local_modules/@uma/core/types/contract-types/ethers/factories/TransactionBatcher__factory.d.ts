import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TransactionBatcher } from "../TransactionBatcher";
export declare class TransactionBatcher__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TransactionBatcher;
}
