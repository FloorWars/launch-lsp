"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICheckpointManager__factory = void 0;
const ethers_1 = require("ethers");
class ICheckpointManager__factory extends ethers_1.ContractFactory {
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
exports.ICheckpointManager__factory = ICheckpointManager__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "headerBlocks",
        outputs: [
            {
                internalType: "bytes32",
                name: "root",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "start",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "end",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "proposer",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060f28061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806341539d4a14602d575b600080fd5b6070603836600460a5565b60006020819052908152604090208054600182015460028301546003840154600490940154929391929091906001600160a01b031685565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a00160405180910390f35b60006020828403121560b5578081fd5b503591905056fea264697066735822122023b7395f05af2a6b398555884f74240b54ad72b58218fa395dbd5aeff015070a64736f6c63430008040033";
