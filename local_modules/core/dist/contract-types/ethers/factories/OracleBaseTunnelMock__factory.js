"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleBaseTunnelMock__factory = void 0;
const ethers_1 = require("ethers");
class OracleBaseTunnelMock__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_finderAddress, overrides) {
        return super.deploy(_finderAddress, overrides || {});
    }
    getDeployTransaction(_finderAddress, overrides) {
        return super.getDeployTransaction(_finderAddress, overrides || {});
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
exports.OracleBaseTunnelMock__factory = OracleBaseTunnelMock__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_finderAddress",
                type: "address",
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
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "requestHash",
                type: "bytes32",
            },
        ],
        name: "PriceRequestAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "price",
                type: "int256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "requestHash",
                type: "bytes32",
            },
        ],
        name: "PushedPrice",
        type: "event",
    },
    {
        inputs: [],
        name: "ancillaryBytesLimit",
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
        inputs: [],
        name: "finder",
        outputs: [
            {
                internalType: "contract FinderInterface",
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
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "requestPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "encodePriceRequest",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "int256",
                name: "price",
                type: "int256",
            },
        ],
        name: "publishPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161059638038061059683398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610505806100916000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063216666a41461005c57806370a6c197146100715780637dc59b4614610097578063b9a3c84c146100aa578063c371dda7146100d5575b600080fd5b61006f61006a366004610360565b6100de565b005b61008461007f366004610360565b6100ee565b6040519081526020015b60405180910390f35b61006f6100a53660046103ae565b610103565b6001546100bd906001600160a01b031681565b6040516001600160a01b03909116815260200161008e565b61008461200081565b6100e9838383610115565b505050565b60006100fb8484846101fe565b949350505050565b61010f84848484610234565b50505050565b612000815111156101655760405162461bcd60e51b8152602060048201526016602482015275496e76616c696420616e63696c6c617279206461746160501b604482015260640160405180910390fd5b60006101728484846101fe565b6000818152602081905260408120919250815460ff1660028111156101a757634e487b7160e01b600052602160045260246000fd5b14156101f757805460ff19166001178155604051829086907f55ad1db144341b8105784dba37a7cb1c3088262f75ea638cfb7c8ecfb73751c6906101ee9088908890610477565b60405180910390a35b5050505050565b60008383836040516020016102159392919061044f565b6040516020818303038152906040528051906020012090509392505050565b60006102418585856101fe565b60008181526020819052604090209091506001815460ff16600281111561027857634e487b7160e01b600052602160045260246000fd5b14156102d15760018101839055805460ff19166002178155604051829087907ffd38de8c79c8c3c553ecd154c6b11b67511ec8dee573c8a488a056d7335b34e8906102c890899089908990610490565b60405180910390a35b505050505050565b600082601f8301126102e9578081fd5b813567ffffffffffffffff80821115610304576103046104b9565b604051601f8301601f19908116603f0116810190828211818310171561032c5761032c6104b9565b81604052838152866020858801011115610344578485fd5b8360208701602083013792830160200193909352509392505050565b600080600060608486031215610374578283fd5b8335925060208401359150604084013567ffffffffffffffff811115610398578182fd5b6103a4868287016102d9565b9150509250925092565b600080600080608085870312156103c3578081fd5b8435935060208501359250604085013567ffffffffffffffff8111156103e7578182fd5b6103f3878288016102d9565b949793965093946060013593505050565b60008151808452815b818110156104295760208185018101518683018201520161040d565b8181111561043a5782602083870101525b50601f01601f19169290920160200192915050565b83815282602082015260606040820152600061046e6060830184610404565b95945050505050565b8281526040602082015260006100fb6040830184610404565b8381526060602082015260006104a96060830185610404565b9050826040830152949350505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b6cbaa1a7763f2d242ae576b0eb05ddbe57436f269b922839d664559e9f1e2a664736f6c63430008040033";
