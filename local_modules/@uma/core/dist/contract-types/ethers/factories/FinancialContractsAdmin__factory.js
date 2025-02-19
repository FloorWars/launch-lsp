"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialContractsAdmin__factory = void 0;
const ethers_1 = require("ethers");
class FinancialContractsAdmin__factory extends ethers_1.ContractFactory {
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
exports.FinancialContractsAdmin__factory = FinancialContractsAdmin__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
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
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "financialContract",
                type: "address",
            },
        ],
        name: "callEmergencyShutdown",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "financialContract",
                type: "address",
            },
        ],
        name: "callRemargin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506103ae806100616000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630caf41211461005c578063547e1c4014610071578063715018a6146100845780638da5cb5b1461008c578063f2fde38b146100ab575b600080fd5b61006f61006a366004610315565b6100be565b005b61006f61007f366004610315565b61014d565b61006f6101b7565b600054604080516001600160a01b039092168252519081900360200190f35b61006f6100b9366004610315565b61022b565b6000546001600160a01b031633146100f15760405162461bcd60e51b81526004016100e890610343565b60405180910390fd5b6000819050806001600160a01b0316633403c2fc6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561013157600080fd5b505af1158015610145573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031633146101775760405162461bcd60e51b81526004016100e890610343565b6000819050806001600160a01b031663bda02e776040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561013157600080fd5b6000546001600160a01b031633146101e15760405162461bcd60e51b81526004016100e890610343565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146102555760405162461bcd60e51b81526004016100e890610343565b6001600160a01b0381166102ba5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100e8565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610326578081fd5b81356001600160a01b038116811461033c578182fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212200be06d06b13d806e0bd3b57447b8d1eda47f1ab5ce08f88809263456bc9b7a7a64736f6c63430008040033";
