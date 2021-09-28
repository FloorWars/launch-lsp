"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyChecker__factory = void 0;
const ethers_1 = require("ethers");
class ReentrancyChecker__factory extends ethers_1.ContractFactory {
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
exports.ReentrancyChecker__factory = ReentrancyChecker__factory;
const _abi = [
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "txnData",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_txnData",
                type: "bytes",
            },
        ],
        name: "setTransactionData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061045a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063537e2eb81461014a5780635592da8714610168575b60015460ff161561004357005b6001805460ff191681179055600080546100e990339083908190610066906103d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610092906103d3565b80156100df5780601f106100b4576101008083540402835291602001916100df565b820191906000526020600020905b8154815290600101906020018083116100c257829003601f168201915b505050505061017d565b9050801561013d5760405162461bcd60e51b815260206004820152601a60248201527f52652d656e7472616e637920776173207375636365737366756c000000000000604482015260640160405180910390fd5b506001805460ff19169055005b610152610198565b60405161015f9190610380565b60405180910390f35b61017b6101763660046102d6565b610226565b005b60006020820182516000808284888a5af19695505050505050565b600080546101a5906103d3565b80601f01602080910402602001604051908101604052809291908181526020018280546101d1906103d3565b801561021e5780601f106101f35761010080835404028352916020019161021e565b820191906000526020600020905b81548152906001019060200180831161020157829003601f168201915b505050505081565b805161023990600090602084019061023d565b5050565b828054610249906103d3565b90600052602060002090601f01602090048101928261026b57600085556102b1565b82601f1061028457805160ff19168380011785556102b1565b828001600101855582156102b1579182015b828111156102b1578251825591602001919060010190610296565b506102bd9291506102c1565b5090565b5b808211156102bd57600081556001016102c2565b6000602082840312156102e7578081fd5b813567ffffffffffffffff808211156102fe578283fd5b818401915084601f830112610311578283fd5b8135818111156103235761032361040e565b604051601f8201601f19908116603f0116810190838211818310171561034b5761034b61040e565b81604052828152876020848701011115610363578586fd5b826020860160208301379182016020019490945295945050505050565b6000602080835283518082850152825b818110156103ac57858101830151858201604001528201610390565b818111156103bd5783604083870101525b50601f01601f1916929092016040019392505050565b600181811c908216806103e757607f821691505b6020821081141561040857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220eb94b62613cecc0f166aed3e668cf7bd2ec8b0562ca7bbceb897d6b8c6c2bcfc64736f6c63430008040033";
