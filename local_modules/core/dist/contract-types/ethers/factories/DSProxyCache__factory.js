"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSProxyCache__factory = void 0;
const ethers_1 = require("ethers");
class DSProxyCache__factory extends ethers_1.ContractFactory {
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
exports.DSProxyCache__factory = DSProxyCache__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_code",
                type: "bytes",
            },
        ],
        name: "read",
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
                internalType: "bytes",
                name: "_code",
                type: "bytes",
            },
        ],
        name: "write",
        outputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101db806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637ed0c3b21461003b5780638bf4515c1461006a575b600080fd5b61004e6100493660046100e5565b61009a565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100783660046100e5565b805160209182012060009081529081905260409020546001600160a01b031690565b60008151602083016000f09050803b156001811461003657508151602092830120600090815291829052604090912080546001600160a01b0319166001600160a01b03831617905590565b6000602082840312156100f6578081fd5b813567ffffffffffffffff8082111561010d578283fd5b818401915084601f830112610120578283fd5b8135818111156101325761013261018f565b604051601f8201601f19908116603f0116810190838211818310171561015a5761015a61018f565b81604052828152876020848701011115610172578586fd5b826020860160208301379182016020019490945295945050505050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212206c7496f99da11417081c30a58e3980b8c431fcc456cf91b99ff376871beb3ba364736f6c63430008040033";