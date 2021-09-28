"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryInterface__factory = void 0;
const ethers_1 = require("ethers");
class RegistryInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RegistryInterface__factory = RegistryInterface__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address[]",
                name: "parties",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "registerContract",
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
        name: "isContractRegistered",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "getRegisteredContracts",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllRegisteredContracts",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "addPartyToContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "removePartyFromContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "isPartyMemberOfContract",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];