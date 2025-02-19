"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Umip3Upgrader__factory = void 0;
const ethers_1 = require("ethers");
class Umip3Upgrader__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_existingGovernor, _existingVoting, _finder, _voting, _identifierWhitelist, _store, _financialContractsAdmin, _registry, _newGovernor, overrides) {
        return super.deploy(_existingGovernor, _existingVoting, _finder, _voting, _identifierWhitelist, _store, _financialContractsAdmin, _registry, _newGovernor, overrides || {});
    }
    getDeployTransaction(_existingGovernor, _existingVoting, _finder, _voting, _identifierWhitelist, _store, _financialContractsAdmin, _registry, _newGovernor, overrides) {
        return super.getDeployTransaction(_existingGovernor, _existingVoting, _finder, _voting, _identifierWhitelist, _store, _financialContractsAdmin, _registry, _newGovernor, overrides || {});
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
exports.Umip3Upgrader__factory = Umip3Upgrader__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_existingGovernor",
                type: "address",
            },
            {
                internalType: "address",
                name: "_existingVoting",
                type: "address",
            },
            {
                internalType: "address",
                name: "_finder",
                type: "address",
            },
            {
                internalType: "address",
                name: "_voting",
                type: "address",
            },
            {
                internalType: "address",
                name: "_identifierWhitelist",
                type: "address",
            },
            {
                internalType: "address",
                name: "_store",
                type: "address",
            },
            {
                internalType: "address",
                name: "_financialContractsAdmin",
                type: "address",
            },
            {
                internalType: "address",
                name: "_registry",
                type: "address",
            },
            {
                internalType: "address",
                name: "_newGovernor",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "existingGovernor",
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
        name: "existingVoting",
        outputs: [
            {
                internalType: "contract Voting",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "financialContractsAdmin",
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
        name: "finder",
        outputs: [
            {
                internalType: "contract Finder",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "identifierWhitelist",
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
        name: "newGovernor",
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
        name: "registry",
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
        name: "store",
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
        name: "voting",
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
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161074538038061074583398101604081905261002f916100eb565b600080546001600160a01b03199081166001600160a01b039b8c1617909155600180548216998b1699909917909855600380548916978a16979097179096556004805488169589169590951790945560058054871693881693909317909255600680548616918716919091179055600780548516918616919091179055600880548416918516919091179055600280549092169216919091179055610192565b80516001600160a01b03811681146100e657600080fd5b919050565b60008060008060008060008060006101208a8c031215610109578485fd5b6101128a6100cf565b985061012060208b016100cf565b975061012e60408b016100cf565b965061013c60608b016100cf565b955061014a60808b016100cf565b945061015860a08b016100cf565b935061016660c08b016100cf565b925061017460e08b016100cf565b91506101836101008b016100cf565b90509295985092959850929598565b6105a4806101a16000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b9a3c84c11610066578063b9a3c84c1461011e578063d55ec69714610131578063e84bf00c1461013b578063ebb4bfb01461014e578063fce1ccca1461016157600080fd5b8063679b721c146100a35780636a06d469146100d25780637b103999146100e55780638fd20577146100f8578063975057e71461010b575b600080fd5b6001546100b6906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6005546100b6906001600160a01b031681565b6008546100b6906001600160a01b031681565b6002546100b6906001600160a01b031681565b6006546100b6906001600160a01b031681565b6003546100b6906001600160a01b031681565b610139610174565b005b6007546100b6906001600160a01b031681565b6000546100b6906001600160a01b031681565b6004546100b6906001600160a01b031681565b6000546001600160a01b031633146101f25760405162461bcd60e51b815260206004820152603760248201527f557067726164652063616e206f6e6c7920626520696e69746961746564206279604482015276103a34329032bc34b9ba34b7339033b7bb32b93737b91760491b606482015260840160405180910390fd5b600354600480546040516318fcb32f60e11b8152654f7261636c6560d01b928101929092526001600160a01b039081166024830152909116906331f9665e90604401600060405180830381600087803b15801561024e57600080fd5b505af1158015610262573d6000803e3d6000fd5b50506003546005546040516318fcb32f60e11b8152721259195b9d1a599a595c95da1a5d195b1a5cdd606a1b60048201526001600160a01b039182166024820152911692506331f9665e9150604401600060405180830381600087803b1580156102cb57600080fd5b505af11580156102df573d6000803e3d6000fd5b50506003546006546040516318fcb32f60e11b81526453746f726560d81b60048201526001600160a01b039182166024820152911692506331f9665e9150604401600060405180830381600087803b15801561033a57600080fd5b505af115801561034e573d6000803e3d6000fd5b50506003546007546040516318fcb32f60e11b8152762334b730b731b4b0b621b7b73a3930b1ba39a0b236b4b760491b60048201526001600160a01b039182166024820152911692506331f9665e9150604401600060405180830381600087803b1580156103bb57600080fd5b505af11580156103cf573d6000803e3d6000fd5b50506003546008546040516318fcb32f60e11b815267526567697374727960c01b60048201526001600160a01b039182166024820152911692506331f9665e9150604401600060405180830381600087803b15801561042d57600080fd5b505af1158015610441573d6000803e3d6000fd5b505060035460025460405163f2fde38b60e01b81526001600160a01b0391821660048201529116925063f2fde38b9150602401600060405180830381600087803b15801561048e57600080fd5b505af11580156104a2573d6000803e3d6000fd5b505060015460048054604051632960b5af60e01b81526001600160a01b03918216928101929092529091169250632960b5af9150602401600060405180830381600087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b505060015460025460405163f2fde38b60e01b81526001600160a01b0391821660048201529116925063f2fde38b9150602401600060405180830381600087803b15801561055457600080fd5b505af1158015610568573d6000803e3d6000fd5b5050505056fea2646970667358221220228929d3ca835d35582611feaa69c0fa6f2b33711f24b273e8a8220def6c81ee64736f6c63430008040033";
