"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSGuard__factory = void 0;
const ethers_1 = require("ethers");
class DSGuard__factory extends ethers_1.ContractFactory {
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
exports.DSGuard__factory = DSGuard__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "src",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "dst",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "LogForbid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "src",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "dst",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "LogPermit",
        type: "event",
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
        name: "ANY",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
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
                internalType: "address",
                name: "src_",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst_",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "sig",
                type: "bytes4",
            },
        ],
        name: "canCall",
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
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "src",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "dst",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "forbid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "src",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "dst",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "sig",
                type: "bytes32",
            },
        ],
        name: "forbid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26107f68061005e6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a8542f6611610066578063a8542f6614610121578063b700961314610138578063bf7e214f1461015b578063cbeea68c1461016e578063f0217ce51461018157600080fd5b806313af4035146100a35780632bc3217d146100b857806379d88d87146100cb5780637a9e5e4b146100de5780638da5cb5b146100f1575b600080fd5b6100b66100b13660046106a4565b610194565b005b6100b66100c63660046106c7565b6101fd565b6100b66100d936600461077d565b610227565b6100b66100ec3660046106a4565b61029f565b600154610104906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61012a60001981565b604051908152602001610118565b61014b610146366004610707565b610306565b6040519015158152602001610118565b600054610104906001600160a01b031681565b6100b661017c3660046106c7565b61051b565b6100b661018f36600461077d565b61053c565b6101aa336000356001600160e01b0319166105b7565b6101b357600080fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6102228360601b6001600160601b0319168360601b6001600160601b03191683610227565b505050565b61023d336000356001600160e01b0319166105b7565b61024657600080fd5b60008381526002602090815260408083208584528252808320848452909152808220805460ff19169055518291849186917f95ba64c95d85e67ac83a0476c4a62ac2cf8ab2d0407545b8c9d79c3eefa6282991a4505050565b6102b5336000356001600160e01b0319166105b7565b6102be57600080fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6bffffffffffffffffffffffff19606084811b821660008181526002602090815260408083209488901b9095168083529381528482206001600160e01b03198716835290529283205490919060ff1680610383575060008281526002602090815260408083208484528252808320600019845290915290205460ff165b806103bb57506000828152600260209081526040808320600019845282528083206001600160e01b03198816845290915290205460ff165b806103e6575060008281526002602090815260408083206000198452825280832090915290205460ff165b80610433575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb602090815260408083206001600160e01b03198816845290915290205460ff165b80610478575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb60209081526040808320600019845290915290205460ff165b806104bb57506001600160e01b0319841660009081527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d97602052604090205460ff165b8061051157506000196000527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d976020527ff423d1317b37667cd26005728bffa7c8b0499e133951fcf8e814d4fc5f4c98f65460ff165b9695505050505050565b6102228360601b6001600160601b0319168360601b6001600160601b031916835b610552336000356001600160e01b0319166105b7565b61055b57600080fd5b60008381526002602090815260408083208584528252808320848452909152808220805460ff19166001179055518291849186917f6f50375045128971c5469d343039ba7b8e30a5b190453737b28bda6f7a30677191a4505050565b60006001600160a01b0383163014156105d25750600161069e565b6001546001600160a01b03848116911614156105f05750600161069e565b6000546001600160a01b03166106085750600061069e565b60005460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b70096139060640160206040518083038186803b15801561066357600080fd5b505afa158015610677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b919061075d565b90505b92915050565b6000602082840312156106b5578081fd5b81356106c0816107a8565b9392505050565b6000806000606084860312156106db578182fd5b83356106e6816107a8565b925060208401356106f6816107a8565b929592945050506040919091013590565b60008060006060848603121561071b578283fd5b8335610726816107a8565b92506020840135610736816107a8565b915060408401356001600160e01b031981168114610752578182fd5b809150509250925092565b60006020828403121561076e578081fd5b815180151581146106c0578182fd5b600080600060608486031215610791578283fd5b505081359360208301359350604090920135919050565b6001600160a01b03811681146107bd57600080fd5b5056fea2646970667358221220f846a1073e19682867d20e8da1ce77f56dbedd5c7bb33f2b34e5afacc0b8207664736f6c63430008040033";
