"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry__factory = void 0;
const ethers_1 = require("ethers");
class Registry__factory extends ethers_1.ContractFactory {
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
exports.Registry__factory = Registry__factory;
const _abi = [
    {
        inputs: [],
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
                name: "contractAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "creator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "parties",
                type: "address[]",
            },
        ],
        name: "NewContractRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "PartyAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "PartyRemoved",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "contractMap",
        outputs: [
            {
                internalType: "enum Registry.Validity",
                name: "valid",
                type: "uint8",
            },
            {
                internalType: "uint128",
                name: "index",
                type: "uint128",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "registeredContracts",
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
                internalType: "address[]",
                name: "parties",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "registerContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
        ],
        name: "addPartyToContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "partyAddress",
                type: "address",
            },
        ],
        name: "removePartyFromContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "isContractRegistered",
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
                name: "party",
                type: "address",
            },
        ],
        name: "getRegisteredContracts",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllRegisteredContracts",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "party",
                type: "address",
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "isPartyMemberOfContract",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b50620000206000803362000044565b604080516000808252602082019092526200003e91600191620001ad565b620004a1565b826000808281526020819052604090206001015460ff1660028111156200007b57634e487b7160e01b600052602160045260246000fd5b14620000ce5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064015b60405180910390fd5b60008481526020819052604090206001808201805460ff1916828002179055508381556200010c60028201846200030a602090811b62000e3717901c565b60008481526020819052604081206001015460ff1660028111156200014157634e487b7160e01b600052602160045260246000fd5b1415620001a65760405162461bcd60e51b815260206004820152603c6024820152600080516020620018f883398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c65000000006064820152608401620000c5565b5050505050565b826000808281526020819052604090206001015460ff166002811115620001e457634e487b7160e01b600052602160045260246000fd5b14620002335760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c6500006044820152606401620000c5565b60008481526020818152604090912060018101805460ff191660021790558481559062000270906003830190859062000e416200031a821b17901c565b60008481526020819052604081206001015460ff166002811115620002a557634e487b7160e01b600052602160045260246000fd5b1415620001a65760405162461bcd60e51b81526020600482015260386024820152600080516020620018f883398151915260448201527f20746f206d616e61676520612073686172656420726f6c6500000000000000006064820152608401620000c5565b6200031682826200037b565b5050565b60005b8151811015620003765762000361838383815181106200034d57634e487b7160e01b600052603260045260246000fd5b6020026020010151620003fc60201b60201c565b806200036d8162000479565b9150506200031d565b505050565b6001600160a01b038116620003df5760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608401620000c5565b81546001600160a01b0319166001600160a01b0391909116179055565b6001600160a01b038116620004545760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152606401620000c5565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006000198214156200049a57634e487b7160e01b81526011600452602481fd5b5060010190565b61144780620004b16000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806374d0a67611610097578063ab3545e511610066578063ab3545e514610216578063d97c05be14610241578063e33c4cd214610254578063f9f6b49b1461026757600080fd5b806374d0a676146101ba5780637a3edab0146101cd5780637cdc1cb9146101f0578063aaa14ca31461020357600080fd5b8063303118d0116100d3578063303118d0146101405780633c0af3441461015357806366c8c250146101945780636be7658b146101a757600080fd5b80631676ddc3146100fa578063167cdde714610118578063188c6ff81461012d575b600080fd5b61010261027a565b60405161010f9190611209565b60405180910390f35b61012b6101263660046110b8565b6102dc565b005b61010261013b3660046110b8565b610370565b61012b61014e3660046110b8565b6103e6565b6101866101613660046110b8565b60026020526000908152604090205460ff81169061010090046001600160801b031682565b60405161010f929190611256565b61012b6101a2366004611104565b61067b565b61012b6101b536600461119b565b61085e565b61012b6101c836600461119b565b610942565b6101e06101db3660046110d2565b610a26565b604051901515815260200161010f565b6101e06101fe36600461119b565b610abd565b61012b610211366004611183565b610ba0565b610229610224366004611183565b610c6a565b6040516001600160a01b03909116815260200161010f565b61012b61024f36600461119b565b610ce3565b610229610262366004611183565b610dc7565b6101e06102753660046110b8565b610df1565b606060018054806020026020016040519081016040528092919081815260200182805480156102d257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102b4575b5050505050905090565b3360008181526002602052604090205460019060ff168181111561031057634e487b7160e01b600052602160045260246000fd5b146103625760405162461bcd60e51b815260206004820152601e60248201527f43616e206f6e6c792061646420746f2076616c696420636f6e7472616374000060448201526064015b60405180910390fd5b61036c8282610e95565b5050565b6001600160a01b0381166000908152600360209081526040918290208054835181840281018401909452808452606093928301828280156103da57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103bc575b50505050509050919050565b6001600160a01b03811660009081526003602052604090208054339190806104495760405162461bcd60e51b8152602060048201526016602482015275506172747920686173206e6f20636f6e74726163747360501b6044820152606401610359565b60016001600160a01b03841660009081526002602052604090205460ff16600181111561048657634e487b7160e01b600052602160045260246000fd5b146104d35760405162461bcd60e51b815260206004820152601f60248201527f52656d6f7665206f6e6c792066726f6d2076616c696420636f6e7472616374006044820152606401610359565b6104dd8484610a26565b6105295760405162461bcd60e51b815260206004820152601e60248201527f43616e206f6e6c792072656d6f7665206578697374696e6720706172747900006044820152606401610359565b6001600160a01b0383166000908152600180840160205260408220549190849061055390856113c9565b8154811061057157634e487b7160e01b600052603260045260246000fd5b60009182526020909120015484546001600160a01b03909116915081908590849081106105ae57634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b0394851617905591831681526001860190915260409020829055835484908061060857634e487b7160e01b600052603160045260246000fd5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0387811680845260018801909252604080842084905551908916927f8e0a870c3ff65bd1f2852048eb92d693833891a8c0ab0827347177544464c57091a3505050505050565b60016106878133610abd565b6106a35760405162461bcd60e51b81526004016103599061132b565b6001600160a01b0382166000908152600260205260408120805490919060ff1660018111156106e257634e487b7160e01b600052602160045260246000fd5b146107285760405162461bcd60e51b815260206004820152601660248201527543616e206f6e6c79207265676973746572206f6e636560501b6044820152606401610359565b60018054808201825560008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b038616179055805461077c91610f68565b815460016001600160801b03929092166101000260ff191670ffffffffffffffffffffffffffffffffff199091161717815560005b84811015610809576107f78686838181106107dc57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906107f191906110b8565b85610e95565b610802816001610f74565b90506107b1565b50336001600160a01b0316836001600160a01b03167f1b0bc775e5162f873356bcc1733155bd2eb9509f1774770f54b4f938287bcf03878760405161084f9291906111bd565b60405180910390a35050505050565b81600260008281526020819052604090206001015460ff16600281111561089557634e487b7160e01b600052602160045260246000fd5b146108b25760405162461bcd60e51b8152600401610359906112df565b60008381526020819052604090205483906108cd9033610abd565b6108e95760405162461bcd60e51b81526004016103599061136d565b60008481526020819052604090206109049060030184610f80565b60405133906001600160a01b0385169086907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a450505050565b81600260008281526020819052604090206001015460ff16600281111561097957634e487b7160e01b600052602160045260246000fd5b146109965760405162461bcd60e51b8152600401610359906112df565b60008381526020819052604090205483906109b19033610abd565b6109cd5760405162461bcd60e51b81526004016103599061136d565b60008481526020819052604090206109e89060030184610fa2565b60405133906001600160a01b0385169086907f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f90600090a450505050565b6001600160a01b038083166000818152600360208181526040808420958716845260018601825283205493835252915481108015610ab357506001600160a01b03848116600090815260036020526040902080549185169183908110610a9c57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316145b9150505b92915050565b600082815260208190526040812060018082015460ff166002811115610af357634e487b7160e01b600052602160045260246000fd5b1415610b155760028101546001600160a01b038481169116145b915050610ab7565b6002600182015460ff166002811115610b3e57634e487b7160e01b600052602160045260246000fd5b1415610b67576001600160a01b038316600090815260038201602052604090205460ff16610b0d565b60405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081c9bdb19525960921b6044820152606401610359565b80600260008281526020819052604090206001015460ff166002811115610bd757634e487b7160e01b600052602160045260246000fd5b14610bf45760405162461bcd60e51b8152600401610359906112df565b81610bff8133610abd565b610c1b5760405162461bcd60e51b81526004016103599061132b565b6000838152602081905260409020610c369060030133610f80565b6040513390819085907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a4505050565b600081600160008281526020819052604090206001015460ff166002811115610ca357634e487b7160e01b600052602160045260246000fd5b14610cc05760405162461bcd60e51b815260040161035990611290565b6000838152602081905260409020600201546001600160a01b03165b9392505050565b81600160008281526020819052604090206001015460ff166002811115610d1a57634e487b7160e01b600052602160045260246000fd5b14610d375760405162461bcd60e51b815260040161035990611290565b6000838152602081905260409020548390610d529033610abd565b610d6e5760405162461bcd60e51b81526004016103599061136d565b6000848152602081905260409020610d89906002018461101d565b60405133906001600160a01b0385169086907f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74690600090a450505050565b60018181548110610dd757600080fd5b6000918252602090912001546001600160a01b0316905081565b600060016001600160a01b03831660009081526002602052604090205460ff166001811115610e3057634e487b7160e01b600052602160045260246000fd5b1492915050565b61036c828261101d565b60005b8151811015610e9057610e7e83838381518110610e7157634e487b7160e01b600052603260045260246000fd5b6020026020010151610fa2565b80610e88816113e0565b915050610e44565b505050565b610e9f8282610a26565b15610eec5760405162461bcd60e51b815260206004820152601e60248201527f43616e206f6e6c792072656769737465722061207061727479206f6e636500006044820152606401610359565b6001600160a01b038281166000818152600360209081526040808320805460018082018355828652848620820180546001600160a01b031916988a169889179055878652909101909252808320829055519093917f4b920dd33e12e37712086438f2afcecb921cefe83b717ca990222f53d7e2845491a3505050565b6000610cdc82846113c9565b6000610cdc82846113b1565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b038116610ff85760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152606401610359565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b03811661107f5760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608401610359565b81546001600160a01b0319166001600160a01b0391909116179055565b80356001600160a01b03811681146110b357600080fd5b919050565b6000602082840312156110c9578081fd5b610cdc8261109c565b600080604083850312156110e4578081fd5b6110ed8361109c565b91506110fb6020840161109c565b90509250929050565b600080600060408486031215611118578081fd5b833567ffffffffffffffff8082111561112f578283fd5b818601915086601f830112611142578283fd5b813581811115611150578384fd5b8760208260051b8501011115611164578384fd5b60209283019550935061117a918601905061109c565b90509250925092565b600060208284031215611194578081fd5b5035919050565b600080604083850312156111ad578182fd5b823591506110fb6020840161109c565b60208082528181018390526000908460408401835b868110156111fe576001600160a01b036111eb8461109c565b16825291830191908301906001016111d2565b509695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561124a5783516001600160a01b031683529284019291840191600101611225565b50909695505050505050565b604081016002841061127857634e487b7160e01b600052602160045260246000fd5b9281526001600160801b039190911660209091015290565b6020808252602f908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526e204578636c757369766520726f6c6560881b606082015260800190565b6020808252602c908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526b2053686172656420726f6c6560a01b606082015260800190565b60208082526022908201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6040820152616c6560f01b606082015260800190565b60208082526024908201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60408201526330b3b2b960e11b606082015260800190565b600082198211156113c4576113c46113fb565b500190565b6000828210156113db576113db6113fb565b500390565b60006000198214156113f4576113f46113fb565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220916586998511dc2e4bc24c0b11d4f45b7558d474eb93ff7765f980143878bf5064736f6c63430008040033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65";