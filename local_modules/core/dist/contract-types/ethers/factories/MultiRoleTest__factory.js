"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiRoleTest__factory = void 0;
const ethers_1 = require("ethers");
class MultiRoleTest__factory extends ethers_1.ContractFactory {
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
exports.MultiRoleTest__factory = MultiRoleTest__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newMember",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "manager",
                type: "address",
            },
        ],
        name: "AddedSharedMember",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "oldMember",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "manager",
                type: "address",
            },
        ],
        name: "RemovedSharedMember",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newMember",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "manager",
                type: "address",
            },
        ],
        name: "ResetExclusiveMember",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "newMember",
                type: "address",
            },
        ],
        name: "addMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
        ],
        name: "getMember",
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
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "memberToCheck",
                type: "address",
            },
        ],
        name: "holdsRole",
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
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "memberToRemove",
                type: "address",
            },
        ],
        name: "removeMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
        ],
        name: "renounceMembership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "newMember",
                type: "address",
            },
        ],
        name: "resetMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "managingRoleId",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "initialMembers",
                type: "address[]",
            },
        ],
        name: "createSharedRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "managingRoleId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "initialMember",
                type: "address",
            },
        ],
        name: "createExclusiveRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roleId",
                type: "uint256",
            },
        ],
        name: "revertIfNotHoldingRole",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610d8b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637cdc1cb9116100665780637cdc1cb9146100e6578063aaa14ca31461010e578063ab3545e514610121578063d97c05be1461014c578063e2ad8db91461015f57600080fd5b806319fefdf01461009857806352b34d49146100ad5780636be7658b146100c057806374d0a676146100d3575b600080fd5b6100ab6100a6366004610b8f565b610172565b005b6100ab6100bb366004610b18565b6101b6565b6100ab6100ce366004610b30565b6101ea565b6100ab6100e1366004610b30565b6102ce565b6100f96100f4366004610b30565b6103b2565b60405190151581526020015b60405180910390f35b6100ab61011c366004610b18565b61049b565b61013461012f366004610b18565b610565565b6040516001600160a01b039091168152602001610105565b6100ab61015a366004610b30565b6105db565b6100ab61016d366004610b5b565b6106bf565b6101b084848484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506106cf92505050565b50505050565b806101c181336103b2565b6101e65760405162461bcd60e51b81526004016101dd90610ca8565b60405180910390fd5b5050565b81600260008281526020819052604090206001015460ff16600281111561022157634e487b7160e01b600052602160045260246000fd5b1461023e5760405162461bcd60e51b81526004016101dd90610c5c565b600083815260208190526040902054839061025990336103b2565b6102755760405162461bcd60e51b81526004016101dd90610cea565b6000848152602081905260409020610290906003018461082e565b60405133906001600160a01b0385169086907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a450505050565b81600260008281526020819052604090206001015460ff16600281111561030557634e487b7160e01b600052602160045260246000fd5b146103225760405162461bcd60e51b81526004016101dd90610c5c565b600083815260208190526040902054839061033d90336103b2565b6103595760405162461bcd60e51b81526004016101dd90610cea565b60008481526020819052604090206103749060030184610850565b60405133906001600160a01b0385169086907f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f90600090a450505050565b600082815260208190526040812060018082015460ff1660028111156103e857634e487b7160e01b600052602160045260246000fd5b141561040a5760028101546001600160a01b038481169116145b915050610495565b6002600182015460ff16600281111561043357634e487b7160e01b600052602160045260246000fd5b141561045c576001600160a01b038316600090815260038201602052604090205460ff16610402565b60405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081c9bdb19525960921b60448201526064016101dd565b92915050565b80600260008281526020819052604090206001015460ff1660028111156104d257634e487b7160e01b600052602160045260246000fd5b146104ef5760405162461bcd60e51b81526004016101dd90610c5c565b816104fa81336103b2565b6105165760405162461bcd60e51b81526004016101dd90610ca8565b6000838152602081905260409020610531906003013361082e565b6040513390819085907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a4505050565b600081600160008281526020819052604090206001015460ff16600281111561059e57634e487b7160e01b600052602160045260246000fd5b146105bb5760405162461bcd60e51b81526004016101dd90610c0d565b50506000908152602081905260409020600201546001600160a01b031690565b81600160008281526020819052604090206001015460ff16600281111561061257634e487b7160e01b600052602160045260246000fd5b1461062f5760405162461bcd60e51b81526004016101dd90610c0d565b600083815260208190526040902054839061064a90336103b2565b6106665760405162461bcd60e51b81526004016101dd90610cea565b600084815260208190526040902061068190600201846108cb565b60405133906001600160a01b0385169086907f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74690600090a450505050565b6106ca83838361094a565b505050565b826000808281526020819052604090206001015460ff16600281111561070557634e487b7160e01b600052602160045260246000fd5b146107525760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064016101dd565b600084815260208190526040902060018101805460ff1916600217905583815561077f6003820184610aa3565b60008481526020819052604081206001015460ff1660028111156107b357634e487b7160e01b600052602160045260246000fd5b14156108275760405162461bcd60e51b815260206004820152603860248201527f417474656d7074656420746f2075736520616e20696e76616c696420726f6c6560448201527f20746f206d616e61676520612073686172656420726f6c65000000000000000060648201526084016101dd565b5050505050565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166108a65760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c650060448201526064016101dd565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b03811661092d5760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b60648201526084016101dd565b81546001600160a01b0319166001600160a01b0391909116179055565b826000808281526020819052604090206001015460ff16600281111561098057634e487b7160e01b600052602160045260246000fd5b146109cd5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064016101dd565b60008481526020819052604090206001808201805460ff191690911790558381556109fb6002820184610af2565b60008481526020819052604081206001015460ff166002811115610a2f57634e487b7160e01b600052602160045260246000fd5b14156108275760405162461bcd60e51b815260206004820152603c60248201527f417474656d7074656420746f2075736520616e20696e76616c696420726f6c6560448201527f20746f206d616e61676520616e206578636c757369766520726f6c650000000060648201526084016101dd565b60005b81518110156106ca57610ae083838381518110610ad357634e487b7160e01b600052603260045260246000fd5b6020026020010151610850565b80610aea81610d2e565b915050610aa6565b6101e682826108cb565b80356001600160a01b0381168114610b1357600080fd5b919050565b600060208284031215610b29578081fd5b5035919050565b60008060408385031215610b42578081fd5b82359150610b5260208401610afc565b90509250929050565b600080600060608486031215610b6f578081fd5b8335925060208401359150610b8660408501610afc565b90509250925092565b60008060008060608587031215610ba4578081fd5b8435935060208501359250604085013567ffffffffffffffff80821115610bc9578283fd5b818701915087601f830112610bdc578283fd5b813581811115610bea578384fd5b8860208260051b8501011115610bfe578384fd5b95989497505060200194505050565b6020808252602f908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526e204578636c757369766520726f6c6560881b606082015260800190565b6020808252602c908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526b2053686172656420726f6c6560a01b606082015260800190565b60208082526022908201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6040820152616c6560f01b606082015260800190565b60208082526024908201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60408201526330b3b2b960e11b606082015260800190565b6000600019821415610d4e57634e487b7160e01b81526011600452602481fd5b506001019056fea26469706673582212205ae7cc924889c7316e2a61702e4eb1854b8142ad6b9999288882dc233a4b5a1464736f6c63430008040033";
