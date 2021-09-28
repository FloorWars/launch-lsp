"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandedERC20__factory = void 0;
const ethers_1 = require("ethers");
class ExpandedERC20__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_tokenName, _tokenSymbol, _tokenDecimals, overrides) {
        return super.deploy(_tokenName, _tokenSymbol, _tokenDecimals, overrides || {});
    }
    getDeployTransaction(_tokenName, _tokenSymbol, _tokenDecimals, overrides) {
        return super.getDeployTransaction(_tokenName, _tokenSymbol, _tokenDecimals, overrides || {});
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
exports.ExpandedERC20__factory = ExpandedERC20__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_tokenName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_tokenDecimals",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
        name: "AddedSharedMember",
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
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addBurner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "resetOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001cb238038062001cb2833981016040819052620000349162000645565b8251839083906200004d906003906020850190620004ec565b50805162000063906004906020840190620004ec565b50506006805460ff191660ff8416179055506200008360008033620000b5565b620000a060015b604080516000808252602082019092526200021e565b620000ac60026200008a565b50505062000741565b826000808281526005602052604090206001015460ff166002811115620000ec57634e487b7160e01b600052602160045260246000fd5b146200013f5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064015b60405180910390fd5b60008481526005602052604090206001808201805460ff1916828002179055508381556200017d60028201846200037d602090811b62000b5017901c565b60008481526005602052604081206001015460ff166002811115620001b257634e487b7160e01b600052602160045260246000fd5b1415620002175760405162461bcd60e51b815260206004820152603c602482015260008051602062001c9283398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c6500000000606482015260840162000136565b5050505050565b826000808281526005602052604090206001015460ff1660028111156200025557634e487b7160e01b600052602160045260246000fd5b14620002a45760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c650000604482015260640162000136565b600084815260056020908152604090912060018101805460ff1916600217905584815590620002e3906003830190859062000b5a6200038d821b17901c565b60008481526005602052604081206001015460ff1660028111156200031857634e487b7160e01b600052602160045260246000fd5b1415620002175760405162461bcd60e51b8152602060048201526038602482015260008051602062001c9283398151915260448201527f20746f206d616e61676520612073686172656420726f6c650000000000000000606482015260840162000136565b620003898282620003ee565b5050565b60005b8151811015620003e957620003d483838381518110620003c057634e487b7160e01b600052603260045260246000fd5b60200260200101516200046f60201b60201c565b80620003e08162000703565b91505062000390565b505050565b6001600160a01b038116620004525760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b606482015260840162000136565b81546001600160a01b0319166001600160a01b0391909116179055565b6001600160a01b038116620004c75760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c6500604482015260640162000136565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b828054620004fa90620006c6565b90600052602060002090601f0160209004810192826200051e576000855562000569565b82601f106200053957805160ff191683800117855562000569565b8280016001018555821562000569579182015b82811115620005695782518255916020019190600101906200054c565b50620005779291506200057b565b5090565b5b808211156200057757600081556001016200057c565b600082601f830112620005a3578081fd5b81516001600160401b0380821115620005c057620005c06200072b565b604051601f8301601f19908116603f01168101908282118183101715620005eb57620005eb6200072b565b8160405283815260209250868385880101111562000607578485fd5b8491505b838210156200062a57858201830151818301840152908201906200060b565b838211156200063b57848385830101525b9695505050505050565b6000806000606084860312156200065a578283fd5b83516001600160401b038082111562000671578485fd5b6200067f8783880162000592565b9450602086015191508082111562000695578384fd5b50620006a48682870162000592565b925050604084015160ff81168114620006bb578182fd5b809150509250925092565b600181811c90821680620006db57607f821691505b60208210811415620006fd57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200072457634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b61154180620007516000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806374d0a676116100c3578063a9059cbb1161007c578063a9059cbb146102be578063aaa14ca3146102d1578063ab3545e5146102e4578063d97c05be1461030f578063dd62ed3e14610322578063f44637ba1461035b57600080fd5b806374d0a6761461025757806379cc67901461026a5780637cdc1cb91461027d57806395d89b4114610290578063983b2d5614610298578063a457c2d7146102ab57600080fd5b8063395093511161011557806339509351146101cd57806340c10f19146101e057806342966c68146101f35780636be7658b1461020857806370a082311461021b57806373cc802a1461024457600080fd5b806306fdde0314610152578063095ea7b31461017057806318160ddd1461019357806323b872dd146101a5578063313ce567146101b8575b600080fd5b61015a61036e565b6040516101679190611302565b60405180910390f35b61018361017e36600461129f565b610400565b6040519015158152602001610167565b6002545b604051908152602001610167565b6101836101b3366004611264565b610417565b60065460405160ff9091168152602001610167565b6101836101db36600461129f565b6104cd565b6101836101ee36600461129f565b610504565b6102066102013660046112c8565b610542565b005b6102066102163660046112e0565b610578565b610197610229366004611211565b6001600160a01b031660009081526020819052604090205490565b610206610252366004611211565b61065c565b6102066102653660046112e0565b61066a565b61018361027836600461129f565b61074e565b61018361028b3660046112e0565b610782565b61015a610865565b6102066102a6366004611211565b610874565b6101836102b936600461129f565b610880565b6101836102cc36600461129f565b610911565b6102066102df3660046112c8565b61091e565b6102f76102f23660046112c8565b6109e8565b6040516001600160a01b039091168152602001610167565b61020661031d3660046112e0565b610a62565b610197610330366004611232565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610206610369366004611211565b610b46565b60606003805461037d906114a5565b80601f01602080910402602001604051908101604052809291908181526020018280546103a9906114a5565b80156103f65780601f106103cb576101008083540402835291602001916103f6565b820191906000526020600020905b8154815290600101906020018083116103d957829003601f168201915b5050505050905090565b600061040d338484610bae565b5060015b92915050565b6000610424848484610cd3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104ae5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6104c285336104bd868561148e565b610bae565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161040d9185906104bd908690611476565b600060016105128133610782565b61052e5760405162461bcd60e51b81526004016104a5906113f0565b6105388484610eab565b5060019392505050565b600261054e8133610782565b61056a5760405162461bcd60e51b81526004016104a5906113f0565b6105743383610f8a565b5050565b81600260008281526005602052604090206001015460ff1660028111156105af57634e487b7160e01b600052602160045260246000fd5b146105cc5760405162461bcd60e51b81526004016104a5906113a4565b60008381526005602052604090205483906105e79033610782565b6106035760405162461bcd60e51b81526004016104a590611432565b600084815260056020526040902061061e90600301846110d9565b60405133906001600160a01b0385169086907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a450505050565b610667600082610a62565b50565b81600260008281526005602052604090206001015460ff1660028111156106a157634e487b7160e01b600052602160045260246000fd5b146106be5760405162461bcd60e51b81526004016104a5906113a4565b60008381526005602052604090205483906106d99033610782565b6106f55760405162461bcd60e51b81526004016104a590611432565b600084815260056020526040902061071090600301846110fb565b60405133906001600160a01b0385169086907f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f90600090a450505050565b6000600261075c8133610782565b6107785760405162461bcd60e51b81526004016104a5906113f0565b6105388484610f8a565b600082815260056020526040812060018082015460ff1660028111156107b857634e487b7160e01b600052602160045260246000fd5b14156107da5760028101546001600160a01b038481169116145b915050610411565b6002600182015460ff16600281111561080357634e487b7160e01b600052602160045260246000fd5b141561082c576001600160a01b038316600090815260038201602052604090205460ff166107d2565b60405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081c9bdb19525960921b60448201526064016104a5565b60606004805461037d906114a5565b61066760015b8261066a565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156109025760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104a5565b61053833856104bd868561148e565b600061040d338484610cd3565b80600260008281526005602052604090206001015460ff16600281111561095557634e487b7160e01b600052602160045260246000fd5b146109725760405162461bcd60e51b81526004016104a5906113a4565b8161097d8133610782565b6109995760405162461bcd60e51b81526004016104a5906113f0565b60008381526005602052604090206109b490600301336110d9565b6040513390819085907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a4505050565b600081600160008281526005602052604090206001015460ff166002811115610a2157634e487b7160e01b600052602160045260246000fd5b14610a3e5760405162461bcd60e51b81526004016104a590611355565b6000838152600560205260409020600201546001600160a01b031691505b50919050565b81600160008281526005602052604090206001015460ff166002811115610a9957634e487b7160e01b600052602160045260246000fd5b14610ab65760405162461bcd60e51b81526004016104a590611355565b6000838152600560205260409020548390610ad19033610782565b610aed5760405162461bcd60e51b81526004016104a590611432565b6000848152600560205260409020610b089060020184611176565b60405133906001600160a01b0385169086907f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74690600090a450505050565b610667600261087a565b6105748282611176565b60005b8151811015610ba957610b9783838381518110610b8a57634e487b7160e01b600052603260045260246000fd5b60200260200101516110fb565b80610ba1816114da565b915050610b5d565b505050565b6001600160a01b038316610c105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104a5565b6001600160a01b038216610c715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104a5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610d375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104a5565b6001600160a01b038216610d995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104a5565b6001600160a01b03831660009081526020819052604090205481811015610e115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104a5565b610e1b828261148e565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610e51908490611476565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e9d91815260200190565b60405180910390a350505050565b6001600160a01b038216610f015760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104a5565b8060026000828254610f139190611476565b90915550506001600160a01b03821660009081526020819052604081208054839290610f40908490611476565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610fea5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104a5565b6001600160a01b0382166000908152602081905260409020548181101561105e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104a5565b611068828261148e565b6001600160a01b0384166000908152602081905260408120919091556002805484929061109690849061148e565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610cc6565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166111515760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c650060448201526064016104a5565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b0381166111d85760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b60648201526084016104a5565b81546001600160a01b0319166001600160a01b0391909116179055565b80356001600160a01b038116811461120c57600080fd5b919050565b600060208284031215611222578081fd5b61122b826111f5565b9392505050565b60008060408385031215611244578081fd5b61124d836111f5565b915061125b602084016111f5565b90509250929050565b600080600060608486031215611278578081fd5b611281846111f5565b925061128f602085016111f5565b9150604084013590509250925092565b600080604083850312156112b1578182fd5b6112ba836111f5565b946020939093013593505050565b6000602082840312156112d9578081fd5b5035919050565b600080604083850312156112f2578182fd5b8235915061125b602084016111f5565b6000602080835283518082850152825b8181101561132e57858101830151858201604001528201611312565b8181111561133f5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602f908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526e204578636c757369766520726f6c6560881b606082015260800190565b6020808252602c908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526b2053686172656420726f6c6560a01b606082015260800190565b60208082526022908201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6040820152616c6560f01b606082015260800190565b60208082526024908201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60408201526330b3b2b960e11b606082015260800190565b60008219821115611489576114896114f5565b500190565b6000828210156114a0576114a06114f5565b500390565b600181811c908216806114b957607f821691505b60208210811415610a5c57634e487b7160e01b600052602260045260246000fd5b60006000198214156114ee576114ee6114f5565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212208a674117155b42809be04177236c4da4b7e1fff6e988e5b655e000eea081bff464736f6c63430008040033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65";
