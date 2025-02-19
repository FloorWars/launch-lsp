"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarvestVaultMock__factory = void 0;
const ethers_1 = require("ethers");
class HarvestVaultMock__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_underlying, overrides) {
        return super.deploy(_underlying, overrides || {});
    }
    getDeployTransaction(_underlying, overrides) {
        return super.getDeployTransaction(_underlying, overrides || {});
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
exports.HarvestVaultMock__factory = HarvestVaultMock__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_underlying",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "underlying",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPricePerFullShare",
        outputs: [
            {
                internalType: "uint256",
                name: "",
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
                name: "_pricePerFullShare",
                type: "uint256",
            },
        ],
        name: "setPricePerFullShare",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052600060015534801561001557600080fd5b5060405161017438038061017483398101604081905261003491610059565b600080546001600160a01b0319166001600160a01b0392909216919091179055610087565b60006020828403121561006a578081fd5b81516001600160a01b0381168114610080578182fd5b9392505050565b60df806100956000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80636f307dc314604157806377c7b8fc146070578063c3819fb6146080575b600080fd5b6000546053906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6001546040519081526020016067565b6090608b3660046092565b600155565b005b60006020828403121560a2578081fd5b503591905056fea26469706673582212202dfbe0830ca8ddd36088b356ceec4a921d1d63667ae016f8e02ecc0536a9399464736f6c63430008040033";
