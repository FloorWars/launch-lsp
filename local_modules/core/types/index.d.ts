import type Web3 from "web3";
import { findContractVersion } from "./src/FindContractVersion";
import type * as TruffleContracts from "./contract-types/truffle";
export type { TruffleContracts };
export * as EthersContracts from "./contract-types/ethers";
declare type TruffleContractI = Truffle.ContractInstance & {
    networks: {
        [key: number]: {
            address: string;
        };
    };
};
declare const getAbi: (contractName: string, version?: string) => any;
declare const getAddress: (contractName: string, networkId: number, version?: string) => string | null;
declare const getTruffleContract: (contractName: string, web3: Web3 | undefined, version?: string) => TruffleContractI;
export { getAbi, getAddress, getTruffleContract, findContractVersion };
