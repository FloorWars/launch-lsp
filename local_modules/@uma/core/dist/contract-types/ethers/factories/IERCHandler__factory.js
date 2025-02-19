"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERCHandler__factory = void 0;
const ethers_1 = require("ethers");
class IERCHandler__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERCHandler__factory = IERCHandler__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "resourceID",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "setResource",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "setBurnable",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountOrTokenID",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
