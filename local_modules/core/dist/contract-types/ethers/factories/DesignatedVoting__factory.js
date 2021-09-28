"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignatedVoting__factory = void 0;
const ethers_1 = require("ethers");
class DesignatedVoting__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(finderAddress, ownerAddress, voterAddress, overrides) {
        return super.deploy(finderAddress, ownerAddress, voterAddress, overrides || {});
    }
    getDeployTransaction(finderAddress, ownerAddress, voterAddress, overrides) {
        return super.getDeployTransaction(finderAddress, ownerAddress, voterAddress, overrides || {});
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
exports.DesignatedVoting__factory = DesignatedVoting__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "finderAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "voterAddress",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "erc20Address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdrawErc20",
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
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "commitVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
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
                        internalType: "bytes32",
                        name: "hash",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "encryptedVote",
                        type: "bytes",
                    },
                ],
                internalType: "struct VotingAncillaryInterface.CommitmentAncillary[]",
                name: "commits",
                type: "tuple[]",
            },
        ],
        name: "batchCommit",
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
                internalType: "int256",
                name: "price",
                type: "int256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "int256",
                name: "salt",
                type: "int256",
            },
        ],
        name: "revealVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
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
                        internalType: "int256",
                        name: "price",
                        type: "int256",
                    },
                    {
                        internalType: "bytes",
                        name: "ancillaryData",
                        type: "bytes",
                    },
                    {
                        internalType: "int256",
                        name: "salt",
                        type: "int256",
                    },
                ],
                internalType: "struct VotingAncillaryInterface.RevealAncillary[]",
                name: "reveals",
                type: "tuple[]",
            },
        ],
        name: "batchReveal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
            },
            {
                components: [
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
                internalType: "struct VotingAncillaryInterface.PendingRequestAncillary[]",
                name: "toRetrieve",
                type: "tuple[]",
            },
        ],
        name: "retrieveRewards",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001be038038062001be0833981016040819052620000349162000323565b620000426000808462000085565b62000051600160008362000085565b6200005d6000620001ee565b5050600280546001600160a01b0319166001600160a01b03929092169190911790556200036c565b826000808281526020819052604090206001015460ff166002811115620000bc57634e487b7160e01b600052602160045260246000fd5b146200010f5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064015b60405180910390fd5b60008481526020819052604090206001808201805460ff1916828002179055508381556200014d600282018462000275602090811b62000a5517901c565b60008481526020819052604081206001015460ff1660028111156200018257634e487b7160e01b600052602160045260246000fd5b1415620001e75760405162461bcd60e51b815260206004820152603c602482015260008051602062001bc083398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c6500000000606482015260840162000106565b5050505050565b806000808281526020819052604090206001015460ff1660028111156200022557634e487b7160e01b600052602160045260246000fd5b14156200026f5760405162461bcd60e51b8152602060048201526022602482015260008051602062001bc0833981519152604482015261125960f21b606482015260840162000106565b50600155565b62000281828262000285565b5050565b6001600160a01b038116620002e95760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b606482015260840162000106565b81546001600160a01b0319166001600160a01b0391909116179055565b80516001600160a01b03811681146200031e57600080fd5b919050565b60008060006060848603121562000338578283fd5b620003438462000306565b9250620003536020850162000306565b9150620003636040850162000306565b90509250925092565b611844806200037c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063a65d15911161008c578063add2ccb411610066578063add2ccb4146101ae578063bd1f4b52146101c1578063d97c05be146101d4578063ef8d6014146101e757600080fd5b8063a65d15911461015d578063aaa14ca314610170578063ab3545e51461018357600080fd5b80632e1a7d4d146100d45780636be7658b146100e95780636ec1fd5d146100fc57806374d0a6761461010f5780637cdc1cb914610122578063894fcecc1461014a575b600080fd5b6100e76100e236600461121d565b610209565b005b6100e76100f7366004611235565b610249565b6100e761010a3660046110c6565b61032d565b6100e761011d366004611235565b6103c1565b610135610130366004611235565b6104a5565b60405190151581526020015b60405180910390f35b6100e7610158366004611126565b61058e565b6100e761016b3660046110c6565b610628565b6100e761017e36600461121d565b610685565b61019661019136600461121d565b61074f565b6040516001600160a01b039091168152602001610141565b6100e76101bc36600461117c565b6107c8565b6100e76101cf36600461109b565b610865565b6100e76101e2366004611235565b6108a9565b6101fa6101f5366004611264565b61098d565b60405190518152602001610141565b60015461021681336104a5565b61023b5760405162461bcd60e51b81526004016102329061169a565b60405180910390fd5b6102453383610a5f565b5050565b81600260008281526020819052604090206001015460ff16600281111561028057634e487b7160e01b600052602160045260246000fd5b1461029d5760405162461bcd60e51b81526004016102329061164e565b60008381526020819052604090205483906102b890336104a5565b6102d45760405162461bcd60e51b8152600401610232906116dc565b60008481526020819052604090206102ef9060030184610b7d565b60405133906001600160a01b0385169086907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a450505050565b600161033981336104a5565b6103555760405162461bcd60e51b81526004016102329061169a565b61035d610b9f565b6001600160a01b0316636ec1fd5d84846040518363ffffffff1660e01b815260040161038a929190611437565b600060405180830381600087803b1580156103a457600080fd5b505af11580156103b8573d6000803e3d6000fd5b50505050505050565b81600260008281526020819052604090206001015460ff1660028111156103f857634e487b7160e01b600052602160045260246000fd5b146104155760405162461bcd60e51b81526004016102329061164e565b600083815260208190526040902054839061043090336104a5565b61044c5760405162461bcd60e51b8152600401610232906116dc565b60008481526020819052604090206104679060030184610c29565b60405133906001600160a01b0385169086907f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f90600090a450505050565b600082815260208190526040812060018082015460ff1660028111156104db57634e487b7160e01b600052602160045260246000fd5b14156104fd5760028101546001600160a01b038481169116145b915050610588565b6002600182015460ff16600281111561052657634e487b7160e01b600052602160045260246000fd5b141561054f576001600160a01b038316600090815260038201602052604090205460ff166104f5565b60405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081c9bdb19525960921b6044820152606401610232565b92915050565b600161059a81336104a5565b6105b65760405162461bcd60e51b81526004016102329061169a565b6105be610b9f565b6001600160a01b031663894fcecc868686866040518563ffffffff1660e01b81526004016105ef9493929190611585565b600060405180830381600087803b15801561060957600080fd5b505af115801561061d573d6000803e3d6000fd5b505050505050505050565b600161063481336104a5565b6106505760405162461bcd60e51b81526004016102329061169a565b610658610b9f565b6001600160a01b031663a65d159184846040518363ffffffff1660e01b815260040161038a9291906114f2565b80600260008281526020819052604090206001015460ff1660028111156106bc57634e487b7160e01b600052602160045260246000fd5b146106d95760405162461bcd60e51b81526004016102329061164e565b816106e481336104a5565b6107005760405162461bcd60e51b81526004016102329061169a565b600083815260208190526040902061071b9060030133610b7d565b6040513390819085907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a4505050565b600081600160008281526020819052604090206001015460ff16600281111561078857634e487b7160e01b600052602160045260246000fd5b146107a55760405162461bcd60e51b8152600401610232906115ff565b6000838152602081905260409020600201546001600160a01b03165b9392505050565b60016107d481336104a5565b6107f05760405162461bcd60e51b81526004016102329061169a565b6107f8610b9f565b6001600160a01b031663add2ccb487878787876040518663ffffffff1660e01b815260040161082b9594939291906115b5565b600060405180830381600087803b15801561084557600080fd5b505af1158015610859573d6000803e3d6000fd5b50505050505050505050565b60015461087281336104a5565b61088e5760405162461bcd60e51b81526004016102329061169a565b826108a36001600160a01b0382163385610ca4565b50505050565b81600160008281526020819052604090206001015460ff1660028111156108e057634e487b7160e01b600052602160045260246000fd5b146108fd5760405162461bcd60e51b8152600401610232906115ff565b600083815260208190526040902054839061091890336104a5565b6109345760405162461bcd60e51b8152600401610232906116dc565b600084815260208190526040902061094f9060020184610cf6565b60405133906001600160a01b0385169086907f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74690600090a450505050565b60408051602081019091526000815260016109a881336104a5565b6109c45760405162461bcd60e51b81526004016102329061169a565b6109cc610b9f565b6001600160a01b031663017e4c033086866040518463ffffffff1660e01b81526004016109fb939291906113a3565b602060405180830381600087803b158015610a1557600080fd5b505af1158015610a29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4d91906111dc565b949350505050565b6102458282610cf6565b80471015610aaf5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610232565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610afc576040519150601f19603f3d011682016040523d82523d6000602084013e610b01565b606091505b5050905080610b785760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610232565b505050565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6002546040516302abf57960e61b8152654f7261636c6560d01b60048201526000916001600160a01b03169063aafd5e409060240160206040518083038186803b158015610bec57600080fd5b505afa158015610c00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c24919061107f565b905090565b6001600160a01b038116610c7f5760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152606401610232565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610b78908490610d75565b6001600160a01b038116610d585760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608401610232565b81546001600160a01b0319166001600160a01b0391909116179055565b6000610dca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e479092919063ffffffff16565b805190915015610b785780806020019051810190610de89190611106565b610b785760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610232565b6060610a4d848460008585843b610ea05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610232565b600080866001600160a01b03168587604051610ebc9190611387565b60006040518083038185875af1925050503d8060008114610ef9576040519150601f19603f3d011682016040523d82523d6000602084013e610efe565b606091505b5091509150610f0e828286610f19565b979650505050505050565b60608315610f285750816107c1565b825115610f385782518084602001fd5b8160405162461bcd60e51b815260040161023291906115ec565b60008083601f840112610f63578182fd5b50813567ffffffffffffffff811115610f7a578182fd5b6020830191508360208260051b8501011115610f9557600080fd5b9250929050565b600082601f830112610fac578081fd5b813567ffffffffffffffff811115610fc657610fc66117e0565b610fd9601f8201601f1916602001611720565b818152846020838601011115610fed578283fd5b816020850160208301379081016020019190915292915050565b600060608284031215611018578081fd5b6040516060810167ffffffffffffffff828210818311171561103c5761103c6117e0565b816040528293508435835260208501356020840152604085013591508082111561106557600080fd5b5061107285828601610f9c565b6040830152505092915050565b600060208284031215611090578081fd5b81516107c1816117f6565b600080604083850312156110ad578081fd5b82356110b8816117f6565b946020939093013593505050565b600080602083850312156110d8578182fd5b823567ffffffffffffffff8111156110ee578283fd5b6110fa85828601610f52565b90969095509350505050565b600060208284031215611117578081fd5b815180151581146107c1578182fd5b6000806000806080858703121561113b578182fd5b8435935060208501359250604085013567ffffffffffffffff81111561115f578283fd5b61116b87828801610f9c565b949793965093946060013593505050565b600080600080600060a08688031215611193578081fd5b853594506020860135935060408601359250606086013567ffffffffffffffff8111156111be578182fd5b6111ca88828901610f9c565b95989497509295608001359392505050565b6000602082840312156111ed578081fd5b6040516020810181811067ffffffffffffffff82111715611210576112106117e0565b6040529151825250919050565b60006020828403121561122e578081fd5b5035919050565b60008060408385031215611247578182fd5b823591506020830135611259816117f6565b809150509250929050565b60008060408385031215611276578182fd5b8235915060208084013567ffffffffffffffff80821115611295578384fd5b818601915086601f8301126112a8578384fd5b8135818111156112ba576112ba6117e0565b8060051b6112c9858201611720565b8281528581019085870183870188018c10156112e3578889fd5b8893505b84841015611320578035868111156112fd57898afd5b61130b8d8a838b0101611007565b845250600193909301929187019187016112e7565b50809750505050505050509250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526113738160208601602086016117b4565b601f01601f19169290920160200192915050565b600082516113998184602087016117b4565b9190910192915050565b6000606080830160018060a01b0387168452602086818601526040838187015282875180855260808801915060808160051b8901019450838901875b8281101561142657898703607f1901845281518051885286810151878901528501518588018990526114138989018261135b565b97505092850192908501906001016113df565b50949b9a5050505050505050505050565b60208082528181018390526000906040808401600586901b8501820187855b888110156114e457878303603f19018452611471828b611796565b60a081358552878201358886015261148b87830183611751565b828988015261149d8388018284611332565b92505050606080830135818701525060806114ba81840184611751565b9350868303828801526114ce838583611332565b978a019796505050928701925050600101611456565b509098975050505050505050565b60208082528181018390526000906040808401600586901b8501820187855b888110156114e457878303603f1901845261152c828b611796565b60a08135855287820135888601528682013587860152606061155081840184611751565b83838901526115628489018284611332565b608095860135989095019790975250505093860193925090850190600101611511565b8481528360208201526080604082015260006115a4608083018561135b565b905082606083015295945050505050565b85815284602082015283604082015260a0606082015260006115da60a083018561135b565b90508260808301529695505050505050565b6020815260006107c1602083018461135b565b6020808252602f908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526e204578636c757369766520726f6c6560881b606082015260800190565b6020808252602c908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526b2053686172656420726f6c6560a01b606082015260800190565b60208082526022908201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6040820152616c6560f01b606082015260800190565b60208082526024908201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60408201526330b3b2b960e11b606082015260800190565b604051601f8201601f1916810167ffffffffffffffff81118282101715611749576117496117e0565b604052919050565b6000808335601e19843603018112611767578283fd5b830160208101925035905067ffffffffffffffff81111561178757600080fd5b803603831315610f9557600080fd5b60008235609e198336030181126117ab578182fd5b90910192915050565b60005b838110156117cf5781810151838201526020016117b7565b838111156108a35750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461180b57600080fd5b5056fea2646970667358221220646c62c8e840e5fa4267646219a64609c1b9bcfbfd459459d073d55a0ee27ab664736f6c63430008040033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65";
