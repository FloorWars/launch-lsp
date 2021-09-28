"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernorChildTunnel__factory = void 0;
const ethers_1 = require("ethers");
class GovernorChildTunnel__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_fxChild, overrides) {
        return super.deploy(_fxChild, overrides || {});
    }
    getDeployTransaction(_fxChild, overrides) {
        return super.getDeployTransaction(_fxChild, overrides || {});
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
exports.GovernorChildTunnel__factory = GovernorChildTunnel__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_fxChild",
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
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "ExecutedGovernanceTransaction",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "MessageSent",
        type: "event",
    },
    {
        inputs: [],
        name: "fxChild",
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
        name: "fxRootTunnel",
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
                name: "stateId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "rootMessageSender",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "processMessageFromRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_fxRootTunnel",
                type: "address",
            },
        ],
        name: "setFxRootTunnel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516105f33803806105f383398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610562806100916000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063450d11f0146100515780637f1e9cb01461008057806388837094146100935780639a7c4b71146100a8575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600154610064906001600160a01b031681565b6100a66100a1366004610339565b6100bb565b005b6100a66100b636600461041b565b61014e565b6001546001600160a01b03161561012c5760405162461bcd60e51b815260206004820152602a60248201527f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160448201526913149150511657d4d15560b21b60648201526084015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101b25760405162461bcd60e51b815260206004820152602160248201527f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e44456044820152602960f91b6064820152608401610123565b6101f3848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101f992505050565b50505050565b60015482906001600160a01b0380831691161461026c5760405162461bcd60e51b815260206004820152602b60248201527f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560448201526a1497d19493d357d493d3d560aa1b6064820152608401610123565b60008083806020019051810190610283919061035c565b91509150610291828261031c565b6102d35760405162461bcd60e51b8152602060048201526013602482015272195e1958dd5d194818d85b1b0819985a5b1959606a1b6044820152606401610123565b816001600160a01b03167f597c4f48fc399c2e6bc556d2d0931e80d4c210ebc618738587c5d39fd9126d458260405161030c919061049f565b60405180910390a2505050505050565b600080602083018351600080828460008a5af19695505050505050565b60006020828403121561034a578081fd5b813561035581610514565b9392505050565b6000806040838503121561036e578081fd5b825161037981610514565b602084015190925067ffffffffffffffff80821115610396578283fd5b818501915085601f8301126103a9578283fd5b8151818111156103bb576103bb6104fe565b604051601f8201601f19908116603f011681019083821181831017156103e3576103e36104fe565b816040528281528860208487010111156103fb578586fd5b61040c8360208301602088016104d2565b80955050505050509250929050565b60008060008060608587031215610430578182fd5b84359350602085013561044281610514565b9250604085013567ffffffffffffffff8082111561045e578384fd5b818701915087601f830112610471578384fd5b81358181111561047f578485fd5b886020828501011115610490578485fd5b95989497505060200194505050565b60208152600082518060208401526104be8160408501602087016104d2565b601f01601f19169190910160400192915050565b60005b838110156104ed5781810151838201526020016104d5565b838111156101f35750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461052957600080fd5b5056fea264697066735822122064d25d88943c53d174f7700d808259ba1b87996beba837fe3ac1b41646169fdd64736f6c63430008040033";