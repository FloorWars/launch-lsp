"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSAuth__factory = void 0;
const ethers_1 = require("ethers");
class DSAuth__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DSAuth__factory = DSAuth__factory;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "authority",
                type: "address",
            },
        ],
        name: "LogSetAuthority",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "LogSetOwner",
        type: "event",
    },
    {
        inputs: [],
        name: "authority",
        outputs: [
            {
                internalType: "contract DSAuthority",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract DSAuthority",
                name: "authority_",
                type: "address",
            },
        ],
        name: "setAuthority",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26103098061005e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af4035146100515780637a9e5e4b146100665780638da5cb5b14610079578063bf7e214f146100a8575b600080fd5b61006461005f366004610278565b6100bb565b005b610064610074366004610278565b610124565b60015461008c906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b60005461008c906001600160a01b031681565b6100d1336000356001600160e01b03191661018b565b6100da57600080fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b61013a336000356001600160e01b03191661018b565b61014357600080fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b60006001600160a01b0383163014156101a657506001610272565b6001546001600160a01b03848116911614156101c457506001610272565b6000546001600160a01b03166101dc57506000610272565b60005460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b70096139060640160206040518083038186803b15801561023757600080fd5b505afa15801561024b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026f919061029b565b90505b92915050565b600060208284031215610289578081fd5b8135610294816102bb565b9392505050565b6000602082840312156102ac578081fd5b81518015158114610294578182fd5b6001600160a01b03811681146102d057600080fd5b5056fea264697066735822122074baba55294d64c2defaac49bc03bdaa272ef41fbb4d7bcb33b7342e5287140164736f6c63430008040033";