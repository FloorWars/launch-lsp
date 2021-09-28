"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleRootTunnel__factory = void 0;
const ethers_1 = require("ethers");
class OracleRootTunnel__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_checkpointManager, _fxRoot, _finderAddress, overrides) {
        return super.deploy(_checkpointManager, _fxRoot, _finderAddress, overrides || {});
    }
    getDeployTransaction(_checkpointManager, _fxRoot, _finderAddress, overrides) {
        return super.getDeployTransaction(_checkpointManager, _fxRoot, _finderAddress, overrides || {});
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
exports.OracleRootTunnel__factory = OracleRootTunnel__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_checkpointManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "_fxRoot",
                type: "address",
            },
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
        name: "SEND_MESSAGE_EVENT_SIG",
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
        name: "checkpointManager",
        outputs: [
            {
                internalType: "contract ICheckpointManager",
                name: "",
                type: "address",
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
        inputs: [],
        name: "fxChildTunnel",
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
        name: "fxRoot",
        outputs: [
            {
                internalType: "contract IFxStateSender",
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
                name: "",
                type: "bytes32",
            },
        ],
        name: "processedExits",
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
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
        ],
        name: "receiveMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_fxChildTunnel",
                type: "address",
            },
        ],
        name: "setFxChildTunnel",
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
        name: "publishPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620026f3380380620026f38339810160408190526200003491620000a2565b600180546001600160a01b039283166001600160a01b031991821617825560038054958416958216959095179094556002805492909316919093161790556006805460ff19169091179055620000eb565b80516001600160a01b03811681146200009d57600080fd5b919050565b600080600060608486031215620000b7578283fd5b620000c28462000085565b9250620000d26020850162000085565b9150620000e26040850162000085565b90509250925092565b6125f880620000fb6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c0857ba011610066578063c0857ba014610163578063c371dda714610176578063de9b771f1461017f578063deda381b14610192578063f953cec7146101a557600080fd5b80630e387de6146100a3578063607f2d42146100dd578063972c492814610110578063aea4e49e1461013b578063b9a3c84c14610150575b600080fd5b6100ca7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681565b6040519081526020015b60405180910390f35b6101006100eb366004612077565b60056020526000908152604090205460ff1681565b60405190151581526020016100d4565b600454610123906001600160a01b031681565b6040516001600160a01b0390911681526020016100d4565b61014e61014936600461203f565b6101b8565b005b600154610123906001600160a01b031681565b600354610123906001600160a01b031681565b6100ca61200081565b600254610123906001600160a01b031681565b61014e6101a036600461208f565b61024b565b61014e6101b336600461216b565b61033f565b6004546001600160a01b0316156102295760405162461bcd60e51b815260206004820152602a60248201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160448201526913149150511657d4d15560b21b60648201526084015b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b610253610359565b6102626006805460ff19169055565b600061026c6103ad565b6001600160a01b031663719c6d568585856040518463ffffffff1660e01b815260040161029b93929190612264565b60206040518083038186803b1580156102b357600080fd5b505afa1580156102c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102eb91906121cf565b90506102f984848484610437565b61032784848484604051602001610313949392919061228c565b6040516020818303038152906040526104dc565b5061033a6006805460ff19166001179055565b505050565b600061034a82610547565b905061035581610adb565b5050565b60065460ff166103ab5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610220565b565b6001546040516302abf57960e61b8152654f7261636c6560d01b60048201526000916001600160a01b03169063aafd5e409060240160206040518083038186803b1580156103fa57600080fd5b505afa15801561040e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610432919061205b565b905090565b6000610444858585610b74565b60008181526020819052604090209091506001815460ff16600281111561047b57634e487b7160e01b600052602160045260246000fd5b14156104d45760018101839055805460ff19166002178155604051829087907ffd38de8c79c8c3c553ecd154c6b11b67511ec8dee573c8a488a056d7335b34e8906104cb908990899089906122d5565b60405180910390a35b505050505050565b6002546004805460405163b472047760e01b81526001600160a01b039384169363b4720477936105129390911691869101612240565b600060405180830381600087803b15801561052c57600080fd5b505af1158015610540573d6000803e3d6000fd5b5050505050565b6060600061055c61055784610baa565b610c2d565b905060006105918260028151811061058457634e487b7160e01b600052603260045260246000fd5b6020026020010151610e14565b6105ca6105c5846008815181106105b857634e487b7160e01b600052603260045260246000fd5b6020026020010151610f8e565b61109f565b6105ee8460098151811061058457634e487b7160e01b600052603260045260246000fd5b60405160200161060093929190612213565b60408051601f1981840301815291815281516020928301206000818152600590935291205490915060ff16156106845760405162461bcd60e51b8152602060048201526024808201527f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560448201526314d4d15160e21b6064820152608401610220565b6000818152600560205260408120805460ff1916600117905582516106d190610557906106cc90869060069081106105b857634e487b7160e01b600052603260045260246000fd5b610baa565b90506000610706826003815181106106f957634e487b7160e01b600052603260045260246000fd5b6020026020010151610c2d565b61072a8560098151811061058457634e487b7160e01b600052603260045260246000fd5b8151811061074857634e487b7160e01b600052603260045260246000fd5b60200260200101519050600061075d82610c2d565b90506107908160008151811061078357634e487b7160e01b600052603260045260246000fd5b6020026020010151611294565b6004546001600160a01b039081169116146107fb5760405162461bcd60e51b815260206004820152602560248201527f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f54604482015264155393915360da1b6064820152608401610220565b610893610822866006815181106105b857634e487b7160e01b600052603260045260246000fd5b610846876008815181106105b857634e487b7160e01b600052603260045260246000fd5b61086a886007815181106105b857634e487b7160e01b600052603260045260246000fd5b61088e8960058151811061058457634e487b7160e01b600052603260045260246000fd5b61135c565b6108eb5760405162461bcd60e51b815260206004820152602360248201527f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260448201526227a7a360e91b6064820152608401610220565b6109d16109128660028151811061058457634e487b7160e01b600052603260045260246000fd5b6109368760038151811061058457634e487b7160e01b600052603260045260246000fd5b61095a8860048151811061058457634e487b7160e01b600052603260045260246000fd5b60001b6109818960058151811061058457634e487b7160e01b600052603260045260246000fd5b60001b6109a88a60008151811061058457634e487b7160e01b600052603260045260246000fd5b6109cc8b6001815181106105b857634e487b7160e01b600052603260045260246000fd5b61165b565b5060006109f8826001815181106106f957634e487b7160e01b600052603260045260246000fd5b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b610a428260008151811061058457634e487b7160e01b600052603260045260246000fd5b14610a8f5760405162461bcd60e51b815260206004820152601f60248201527f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e4154555245006044820152606401610220565b6000610ab5836002815181106105b857634e487b7160e01b600052603260045260246000fd5b9050600081806020019051810190610acd919061219d565b9a9950505050505050505050565b600080600083806020019051810190610af491906120dc565b925092509250610b05838383611790565b610b0d6103ad565b6001600160a01b031663216666a48484846040518463ffffffff1660e01b8152600401610b3c93929190612264565b600060405180830381600087803b158015610b5657600080fd5b505af1158015610b6a573d6000803e3d6000fd5b5050505050505050565b6000838383604051602001610b8b93929190612264565b6040516020818303038152906040528051906020012090509392505050565b60408051808201909152600080825260208201526000825111610c0f5760405162461bcd60e51b815260206004820152601f60248201527f524c505265616465723a20494e56414c49445f42595445535f4c454e475448006044820152606401610220565b50604080518082019091528151815260209182019181019190915290565b6060610c3882611874565b610c845760405162461bcd60e51b815260206004820152601860248201527f524c505265616465723a204954454d5f4e4f545f4c49535400000000000000006044820152606401610220565b6000610c8f8361189f565b90506000816001600160401b03811115610cb957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610cfe57816020015b6040805180820190915260008082526020820152815260200190600190039081610cd75790505b5090506000610d10856020015161197c565b85519091508114610d735760405162461bcd60e51b815260206004820152602760248201527f524c505265616465723a204c4953545f4445434f4445445f4c454e4754485f4d604482015266092a69a82a886960cb1b6064820152608401610220565b6000610d828660200151611a25565b8660200151610d919190612355565b90506000805b85811015610e0857610da88361197c565b9150604051806040016040528083815260200184815250858281518110610ddf57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610df48284612355565b925080610e0081612517565b915050610d97565b50929695505050505050565b6000610e1f82611874565b15610e6c5760405162461bcd60e51b815260206004820181905260248201527f524c505265616465723a204445434f44494e475f4c4953545f41535f55494e546044820152606401610220565b815160211015610ebe5760405162461bcd60e51b815260206004820152601e60248201527f524c505265616465723a20494e56414c49445f55494e545f4c454e47544800006044820152606401610220565b6000610ecd836020015161197c565b83519091508114610f305760405162461bcd60e51b815260206004820152602760248201527f524c505265616465723a2055494e545f4445434f4445445f4c454e4754485f4d604482015266092a69a82a886960cb1b6064820152608401610220565b6000610f3f8460200151611a25565b90506000818560000151610f5391906124ad565b9050600080838760200151610f689190612355565b9050805191506020831015610f8457826020036101000a820491505b5095945050505050565b60606000610f9f836020015161197c565b835190915081146110035760405162461bcd60e51b815260206004820152602860248201527f524c505265616465723a2042595445535f4445434f4445445f4c454e4754485f60448201526709a92a69a82a886960c31b6064820152608401610220565b60006110128460200151611a25565b9050600081856000015161102691906124ad565b90506000816001600160401b0381111561105057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561107a576020820181803683370190505b5090506000816020019050610f848488602001516110989190612355565b8285611aa7565b6040805160208101909152600081528151606091901561128e576000806110c7600086611b0a565b60f81c905060018114806110de57508060ff166003145b156111a1576001855160026110f3919061248e565b6110fd91906124ad565b6001600160401b0381111561112257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561114c576020820181803683370190505b509250600061115c600187611b0a565b9050808460008151811061118057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506001925050611212565b6002855160026111b1919061248e565b6111bb91906124ad565b6001600160401b038111156111e057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561120a576020820181803683370190505b509250600091505b60ff82165b835181101561128a5761124161123060ff8516836124ad565b61123b906002612355565b87611b0a565b84828151811061126157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053508061128281612517565b915050611217565b5050505b92915050565b600061129f82611874565b156112f85760405162461bcd60e51b815260206004820152602360248201527f524c505265616465723a204445434f44494e475f4c4953545f41535f4144445260448201526245535360e81b6064820152608401610220565b81516015146113535760405162461bcd60e51b815260206004820152602160248201527f524c505265616465723a20494e56414c49445f414444524553535f4c454e47546044820152600960fb1b6064820152608401610220565b61128e82610e14565b60008061136884610baa565b9050600061137582610c2d565b9050606080856000806113878b61109f565b90508051600014156113a3576000975050505050505050611653565b60005b865181101561164a5781518311156113c957600098505050505050505050611653565b6113f98782815181106113ec57634e487b7160e01b600052603260045260246000fd5b6020026020010151611ba7565b95508580519060200120841461141a57600098505050505050505050611653565b61143d8782815181106106f957634e487b7160e01b600052603260045260246000fd5b945084516011141561153c5781518314156114ad578c8051906020012061147e866010815181106105b857634e487b7160e01b600052603260045260246000fd5b80519060200120141561149c57600198505050505050505050611653565b600098505050505050505050611653565b60008284815181106114cf57634e487b7160e01b600052603260045260246000fd5b016020015160f81c905060108111156114f45760009950505050505050505050611653565b611527868260ff168151811061151a57634e487b7160e01b600052603260045260246000fd5b6020026020010151611c1d565b9450611534600185612355565b935050611638565b84516002141561149c57600061157661156f876000815181106105b857634e487b7160e01b600052603260045260246000fd5b8486611d14565b83519091506115858286612355565b14156115e8578d805190602001206115b7876001815181106105b857634e487b7160e01b600052603260045260246000fd5b8051906020012014156115d65760019950505050505050505050611653565b60009950505050505050505050611653565b806115ff5760009950505050505050505050611653565b6116098185612355565b935061162f8660018151811061151a57634e487b7160e01b600052603260045260246000fd5b94506116389050565b8061164281612517565b9150506113a6565b50505050505050505b949350505050565b6003546040516320a9cea560e11b8152600481018490526000918291829182916001600160a01b03909116906341539d4a9060240160a06040518083038186803b1580156116a857600080fd5b505afa1580156116bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e0919061211f565b5093505092509250611737828b6116f791906124ad565b6040805160208082018f90528183018e9052606082018d905260808083018d90528351808403909101815260a09092019092528051910120908588611e46565b6117835760405162461bcd60e51b815260206004820152601c60248201527f4678526f6f7454756e6e656c3a20494e56414c49445f484541444552000000006044820152606401610220565b9998505050505050505050565b612000815111156117dc5760405162461bcd60e51b8152602060048201526016602482015275496e76616c696420616e63696c6c617279206461746160501b6044820152606401610220565b60006117e9848484610b74565b6000818152602081905260408120919250815460ff16600281111561181e57634e487b7160e01b600052602160045260246000fd5b141561054057805460ff19166001178155604051829086907f55ad1db144341b8105784dba37a7cb1c3088262f75ea638cfb7c8ecfb73751c69061186590889088906122bc565b60405180910390a35050505050565b6020810151805160009190821a9060c0821015611895575060009392505050565b5060019392505050565b6000806000905060006118b58460200151611a25565b84602001516118c49190612355565b90506000846000015185602001516118dc9190612355565b90505b80821015611973576118f08261197c565b6118fa9083612355565b9150808211156119615760405162461bcd60e51b815260206004820152602c60248201527f524c505265616465723a204e554d5f4954454d535f4445434f4445445f4c454e60448201526b08ea890be9a92a69a82a886960a31b6064820152608401610220565b8261196b81612517565b9350506118df565b50909392505050565b80516000908190811a60808110156119975760019150611a1e565b60b88110156119bd576119ab6080826124ad565b6119b6906001612355565b9150611a1e565b60c08110156119ea5760b78103600185019450806020036101000a85510460018201810193505050611a1e565b60f88110156119fe576119ab60c0826124ad565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b8051600090811a6080811015611a3e5750600092915050565b60b8811080611a59575060c08110801590611a59575060f881105b15611a675750600192915050565b60c0811015611a9b57611a7c600160b86124c4565b611a899060ff16826124ad565b611a94906001612355565b9392505050565b611a7c600160f86124c4565b80611ab157505050565b60208110611ae95782518252611ac8602084612355565b9250611ad5602083612355565b9150611ae26020826124ad565b9050611ab1565b915181516020939093036101000a6000190180199091169216919091179052565b6000611b17600284612532565b15611b5f57601082611b2a60028661236d565b81518110611b4857634e487b7160e01b600052603260045260246000fd5b0160200151611b5a919060f81c612546565b611b9d565b601082611b6d60028661236d565b81518110611b8b57634e487b7160e01b600052603260045260246000fd5b0160200151611b9d919060f81c612381565b60f81b9392505050565b6060600082600001516001600160401b03811115611bd557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611bff576020820181803683370190505b5090506000816020019050611a1e8460200151828660000151611aa7565b600080611c2d836020015161197c565b83519091508114611c975760405162461bcd60e51b815260206004820152602e60248201527f524c505265616465723a2055494e545f5354524943545f4445434f4445445f4c60448201526d08a9c8ea890be9a92a69a82a886960931b6064820152608401610220565b8251602114611cf65760405162461bcd60e51b815260206004820152602560248201527f524c505265616465723a20494e56414c49445f55494e545f5354524943545f4c60448201526408a9c8ea8960db1b6064820152608401610220565b60008084602001516001611d0a9190612355565b5195945050505050565b60008080611d218661109f565b9050600081516001600160401b03811115611d4c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611d76576020820181803683370190505b509050845b8251611d879087612355565b811015611e16576000878281518110611db057634e487b7160e01b600052603260045260246000fd5b01602001516001600160f81b03191690508083611dcd89856124ad565b81518110611deb57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350508080611e0e90612517565b915050611d7b565b50808051906020012082805190602001201415611e365781519250611e3b565b600092505b509095945050505050565b600060208251611e569190612532565b15611e9a5760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b6044820152606401610220565b600060208351611eaa919061236d565b9050611eb78160026123e6565b8510611efd5760405162461bcd60e51b81526020600482015260156024820152744c65616620696e64657820697320746f6f2062696760581b6044820152606401610220565b60008660205b85518111611f9d57858101519250611f1c600289612532565b611f51576040805160208101849052908101849052606001604051602081830303815290604052805190602001209150611f7e565b60408051602081018590529081018390526060016040516020818303038152906040528051906020012091505b611f8960028961236d565b9750611f96602082612355565b9050611f03565b509094149695505050505050565b600082601f830112611fbb578081fd5b8135611fce611fc98261232e565b6122fe565b818152846020838601011115611fe2578283fd5b816020850160208301379081016020019190915292915050565b600082601f83011261200c578081fd5b815161201a611fc98261232e565b81815284602083860101111561202e578283fd5b6116538260208301602087016124e7565b600060208284031215612050578081fd5b8135611a94816125aa565b60006020828403121561206c578081fd5b8151611a94816125aa565b600060208284031215612088578081fd5b5035919050565b6000806000606084860312156120a3578182fd5b833592506020840135915060408401356001600160401b038111156120c6578182fd5b6120d286828701611fab565b9150509250925092565b6000806000606084860312156120f0578283fd5b835192506020840151915060408401516001600160401b03811115612113578182fd5b6120d286828701611ffc565b600080600080600060a08688031215612136578081fd5b85519450602086015193506040860151925060608601519150608086015161215d816125aa565b809150509295509295909350565b60006020828403121561217c578081fd5b81356001600160401b03811115612191578182fd5b61165384828501611fab565b6000602082840312156121ae578081fd5b81516001600160401b038111156121c3578182fd5b61165384828501611ffc565b6000602082840312156121e0578081fd5b5051919050565b600081518084526121ff8160208601602086016124e7565b601f01601f19169290920160200192915050565b8381526000835161222b8160208501602088016124e7565b60209201918201929092526040019392505050565b6001600160a01b0383168152604060208201819052600090611653908301846121e7565b83815282602082015260606040820152600061228360608301846121e7565b95945050505050565b8481528360208201526080604082015260006122ab60808301856121e7565b905082606083015295945050505050565b82815260406020820152600061165360408301846121e7565b8381526060602082015260006122ee60608301856121e7565b9050826040830152949350505050565b604051601f8201601f191681016001600160401b038111828210171561232657612326612594565b604052919050565b60006001600160401b0382111561234757612347612594565b50601f01601f191660200190565b6000821982111561236857612368612568565b500190565b60008261237c5761237c61257e565b500490565b600060ff8316806123945761239461257e565b8060ff84160491505092915050565b600181815b808511156123de5781600019048211156123c4576123c4612568565b808516156123d157918102915b93841c93908002906123a8565b509250929050565b6000611a9483836000826123fc5750600161128e565b816124095750600061128e565b816001811461241f576002811461242957612445565b600191505061128e565b60ff84111561243a5761243a612568565b50506001821b61128e565b5060208310610133831016604e8410600b8410161715612468575081810a61128e565b61247283836123a3565b806000190482111561248657612486612568565b029392505050565b60008160001904831182151516156124a8576124a8612568565b500290565b6000828210156124bf576124bf612568565b500390565b600060ff821660ff8416808210156124de576124de612568565b90039392505050565b60005b838110156125025781810151838201526020016124ea565b83811115612511576000848401525b50505050565b600060001982141561252b5761252b612568565b5060010190565b6000826125415761254161257e565b500690565b600060ff8316806125595761255961257e565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146125bf57600080fd5b5056fea2646970667358221220c8f7fc23bcef7e33653846f474d325624e52ec71dc9be6257bc95e3bde0677eb64736f6c63430008040033";
