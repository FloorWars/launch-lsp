import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FinderInterface } from "../FinderInterface";
export declare class FinderInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): FinderInterface;
}
