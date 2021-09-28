"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestableTest__factory = void 0;
const ethers_1 = require("ethers");
class TestableTest__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_timerAddress, overrides) {
        return super.deploy(_timerAddress, overrides || {});
    }
    getDeployTransaction(_timerAddress, overrides) {
        return super.getDeployTransaction(_timerAddress, overrides || {});
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
exports.TestableTest__factory = TestableTest__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_timerAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "getCurrentTime",
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
                name: "time",
                type: "uint256",
            },
        ],
        name: "setCurrentTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "timerAddress",
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
        inputs: [],
        name: "getTestableTimeAndBlockTime",
        outputs: [
            {
                internalType: "uint256",
                name: "testableTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516102e93803806102e983398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610258806100916000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631c39c38d1461005157806322f8e5661461008157806329cb924d14610096578063dc6ff7bd146100ac575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009461008f3660046101f2565b6100c9565b005b61009e61013f565b604051908152602001610078565b6100b46101df565b60408051928352602083019190915201610078565b6000546001600160a01b03166100de57600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b15801561012457600080fd5b505af1158015610138573d6000803e3d6000fd5b5050505050565b600080546001600160a01b0316156101da5760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561019d57600080fd5b505afa1580156101b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d5919061020a565b905090565b504290565b6000806101ea61013f565b924292509050565b600060208284031215610203578081fd5b5035919050565b60006020828403121561021b578081fd5b505191905056fea2646970667358221220beec6bcfbacfcd7e1adceefbb5163e73ef4b6efee0b11dd24f30fb60c2c40d8264736f6c63430008040033";
