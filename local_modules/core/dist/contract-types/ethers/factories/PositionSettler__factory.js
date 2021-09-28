"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionSettler__factory = void 0;
const ethers_1 = require("ethers");
class PositionSettler__factory extends ethers_1.ContractFactory {
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
exports.PositionSettler__factory = PositionSettler__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "financialContractAddress",
                type: "address",
            },
        ],
        name: "settleExpired",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061018f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c14795fa14610030575b600080fd5b61004361003e3660046100de565b610056565b6040519051815260200160405180910390f35b604080516020810190915260008152816001600160a01b031663fcccedc76040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156100a057600080fd5b505af11580156100b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d8919061010c565b92915050565b6000602082840312156100ef578081fd5b81356001600160a01b0381168114610105578182fd5b9392505050565b60006020828403121561011d578081fd5b6040516020810181811067ffffffffffffffff8211171561014c57634e487b7160e01b83526041600452602483fd5b604052915182525091905056fea26469706673582212205c6e03781c2cb61d0008072a4a9d36d1c37d1e736e66ff349abcbb3b87e16ecd64736f6c63430008040033";