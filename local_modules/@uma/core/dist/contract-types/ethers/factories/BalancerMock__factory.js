"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancerMock__factory = void 0;
const ethers_1 = require("ethers");
class BalancerMock__factory extends ethers_1.ContractFactory {
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
exports.BalancerMock__factory = BalancerMock__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
        ],
        name: "getSpotPriceSansFee",
        outputs: [
            {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newPrice",
                type: "uint256",
            },
        ],
        name: "setPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040526000805534801561001457600080fd5b50610103806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80631446a7ff14603757806391b7f5ed14605c575b600080fd5b604a60423660046089565b505060005490565b60405190815260200160405180910390f35b606c606736600460b6565b600055565b005b80356001600160a01b0381168114608457600080fd5b919050565b60008060408385031215609a578182fd5b60a183606e565b915060ad60208401606e565b90509250929050565b60006020828403121560c6578081fd5b503591905056fea264697066735822122057140edef79f1ae8576f43df4169a8b049e77801ec81f747901f1513d28adfd564736f6c63430008040033";