"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyMock__factory = void 0;
const ethers_1 = require("ethers");
class ReentrancyMock__factory extends ethers_1.ContractFactory {
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
exports.ReentrancyMock__factory = ReentrancyMock__factory;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "counter",
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
        name: "callback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ReentrancyAttack",
                name: "attacker",
                type: "address",
            },
        ],
        name: "countAndSend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ReentrancyAttack",
                name: "attacker",
                type: "address",
            },
        ],
        name: "countAndCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countLocalRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countThisRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "countLocalCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "countThisCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getCount",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b506000805460ff1916600190811782555561063f806100306000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806396ffa6901161006657806396ffa690146100d8578063a87d942c146100eb578063ad77de4a146100f3578063af8aaee414610106578063b672ad8b1461010e57600080fd5b8063083b2732146100985780631352d005146100a257806361bc221a146100aa5780638c5344fa146100c5575b600080fd5b6100a0610121565b005b6100a061014d565b6100b360015481565b60405190815260200160405180910390f35b6100a06100d3366004610573565b610178565b6100a06100e6366004610573565b61029a565b6100b36102c6565b6100a0610101366004610545565b6102d7565b6100a0610385565b6100a061011c366004610545565b610461565b6101296104ce565b610131610520565b61013961052c565b61014b6000805460ff19166001179055565b565b6101556104ce565b61015d610520565b6101656102c6565b5061014b6000805460ff19166001179055565b6101806104ce565b610188610520565b80156102855761019661052c565b6000306101a46001846105dc565b6040516024016101b691815260200190565b60408051601f198184030181529181526020820180516001600160e01b0316634629a27d60e11b179052516101eb919061058b565b6000604051808303816000865af19150503d8060008114610228576040519150601f19603f3d011682016040523d82523d6000602084013e61022d565b606091505b50509050806102835760405162461bcd60e51b815260206004820152601b60248201527f5265656e7472616e63794d6f636b3a206661696c65642063616c6c000000000060448201526064015b60405180910390fd5b505b6102976000805460ff19166001179055565b50565b6102a26104ce565b6102aa610520565b8015610285576102b861052c565b6102856100e66001836105dc565b60006102d06104ce565b5060015490565b6102df6104ce565b6102e7610520565b6102ef61052c565b604051630a2df1ed60e01b815263041d939960e11b60048201527f083b2732f78169bfaad6b407fa338cc97d697ed69d3915a18239cc111d51a402906001600160a01b03831690630a2df1ed906024015b600060405180830381600087803b15801561035a57600080fd5b505af115801561036e573d6000803e3d6000fd5b50505050506102976000805460ff19166001179055565b61038d6104ce565b610395610520565b60408051600481526024810182526020810180516001600160e01b0316632a1f650b60e21b179052905160009130916103ce919061058b565b6000604051808303816000865af19150503d806000811461040b576040519150601f19603f3d011682016040523d82523d6000602084013e610410565b606091505b50509050806101655760405162461bcd60e51b815260206004820152601b60248201527f5265656e7472616e63794d6f636b3a206661696c65642063616c6c0000000000604482015260640161027a565b6104696104ce565b610471610520565b61047961052c565b604051630a2df1ed60e01b8152632a1f650b60e21b60048201527fa87d942c9d2541a6b500dde7ac433dcb6b805640345fd60ed7d8a2d9df2dc58b906001600160a01b03831690630a2df1ed90602401610340565b60005460ff1661014b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161027a565b6000805460ff19169055565b600180600082825461053e91906105c4565b9091555050565b600060208284031215610556578081fd5b81356001600160a01b038116811461056c578182fd5b9392505050565b600060208284031215610584578081fd5b5035919050565b60008251815b818110156105ab5760208186018101518583015201610591565b818111156105b95782828501525b509190910192915050565b600082198211156105d7576105d76105f3565b500190565b6000828210156105ee576105ee6105f3565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220bf1d3268ab8d9b8b920abe36fd0afbe87f8cd4ddc64aeac2ae2d853ed2d8620764736f6c63430008040033";
