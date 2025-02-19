"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeaconOracle__factory = void 0;
const ethers_1 = require("ethers");
class BeaconOracle__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BeaconOracle__factory = BeaconOracle__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint8",
                name: "chainID",
                type: "uint8",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "PriceRequestAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint8",
                name: "chainID",
                type: "uint8",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "price",
                type: "int256",
            },
        ],
        name: "PushedPrice",
        type: "event",
    },
    {
        inputs: [],
        name: "currentChainID",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "finder",
        outputs: [
            {
                internalType: "contract FinderInterface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
