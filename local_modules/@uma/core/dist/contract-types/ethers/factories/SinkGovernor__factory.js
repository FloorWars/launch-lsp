"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinkGovernor__factory = void 0;
const ethers_1 = require("ethers");
class SinkGovernor__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_finder, overrides) {
        return super.deploy(_finder, overrides || {});
    }
    getDeployTransaction(_finder, overrides) {
        return super.getDeployTransaction(_finder, overrides || {});
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
exports.SinkGovernor__factory = SinkGovernor__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract FinderInterface",
                name: "_finder",
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
                indexed: true,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "ExecutedGovernanceTransaction",
        type: "event",
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
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeGovernance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161042a38038061042a83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610399806100916000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063936929c61461003b578063b9a3c84c14610050575b600080fd5b61004e61004936600461023d565b61007f565b005b600054610063906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6000546040516302abf57960e61b81526d23b2b732b934b1a430b7323632b960911b60048201526001600160a01b039091169063aafd5e409060240160206040518083038186803b1580156100d357600080fd5b505afa1580156100e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010b919061021a565b6001600160a01b0316336001600160a01b0316146101705760405162461bcd60e51b815260206004820152601960248201527f47656e657269632068616e646c6572206d7573742063616c6c0000000000000060448201526064015b60405180910390fd5b600060208201825160008082846000895af192505050806101cc5760405162461bcd60e51b815260206004820152601660248201527511dbdd995c9b985b98d94818d85b1b0819985a5b195960521b6044820152606401610167565b816040516101da91906102fc565b604051908190038120906001600160a01b038516907f597c4f48fc399c2e6bc556d2d0931e80d4c210ebc618738587c5d39fd9126d4590600090a3505050565b60006020828403121561022b578081fd5b81516102368161034b565b9392505050565b6000806040838503121561024f578081fd5b823561025a8161034b565b9150602083013567ffffffffffffffff80821115610276578283fd5b818501915085601f830112610289578283fd5b81358181111561029b5761029b610335565b604051601f8201601f19908116603f011681019083821181831017156102c3576102c3610335565b816040528281528860208487010111156102db578586fd5b82602086016020830137856020848301015280955050505050509250929050565b60008251815b8181101561031c5760208186018101518583015201610302565b8181111561032a5782828501525b509190910192915050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461036057600080fd5b5056fea26469706673582212205ac589d2a75789a8b095cde2ce87622cbd8bf8b2c3441fe645481f2125575afd64736f6c63430008040033";
