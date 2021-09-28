"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositBox__factory = void 0;
const ethers_1 = require("ethers");
class DepositBox__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_collateralAddress, _finderAddress, _priceIdentifier, _timerAddress, overrides) {
        return super.deploy(_collateralAddress, _finderAddress, _priceIdentifier, _timerAddress, overrides || {});
    }
    getDeployTransaction(_collateralAddress, _finderAddress, _priceIdentifier, _timerAddress, overrides) {
        return super.getDeployTransaction(_collateralAddress, _finderAddress, _priceIdentifier, _timerAddress, overrides || {});
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
exports.DepositBox__factory = DepositBox__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_collateralAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_finderAddress",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_priceIdentifier",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_timerAddress",
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
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
            },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "EndedDepositBox",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "FinalFeesPaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "NewDepositBox",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "regularFee",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "lateFee",
                type: "uint256",
            },
        ],
        name: "RegularFeesPaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "requestPassTimestamp",
                type: "uint256",
            },
        ],
        name: "RequestWithdrawal",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "requestPassTimestamp",
                type: "uint256",
            },
        ],
        name: "RequestWithdrawalCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "exchangeRate",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "requestPassTimestamp",
                type: "uint256",
            },
        ],
        name: "RequestWithdrawalExecuted",
        type: "event",
    },
    {
        inputs: [],
        name: "collateralCurrency",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cumulativeFeeMultiplier",
        outputs: [
            {
                internalType: "uint256",
                name: "rawValue",
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
        inputs: [],
        name: "getCurrentTime",
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
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "getOutstandingRegularFees",
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
                name: "regularFee",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "latePenalty",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "totalPaid",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "gulp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "payRegularFees",
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
    {
        inputs: [],
        name: "pfc",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "setCurrentTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "timerAddress",
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
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "collateralAmount",
                type: "tuple",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "denominatedCollateralAmount",
                type: "tuple",
            },
        ],
        name: "requestWithdrawal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "executeWithdrawal",
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
                name: "amountWithdrawn",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cancelWithdrawal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "emergencyShutdown",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "remargin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getCollateral",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalDepositBoxCollateral",
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
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620024623803806200246283398101604081905262000034916200042d565b600080546001600160a81b0319166001600160a01b0380841691909117600160a01b17909155600180548287166001600160a01b03199182161790915560028054928616929091169190911790558284818362000090620001f8565b600381905550620000ad60016200029d60201b62000cd01760201c565b516004555050600580546001600160a01b0319166001600160a01b03939093169290921790915550620000df620002e1565b620000f26000805460ff60a01b19169055565b620000fc6200033e565b6001600160a01b03166390978d1b836040518263ffffffff1660e01b81526004016200012a91815260200190565b60206040518083038186803b1580156200014357600080fd5b505afa15801562000158573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017e919062000480565b620001d05760405162461bcd60e51b815260206004820152601c60248201527f556e737570706f72746564207072696365206964656e7469666965720000000060448201526064015b60405180910390fd5b6007829055620001ee6000805460ff60a01b1916600160a01b179055565b50505050620004e7565b600080546001600160a01b031615620002985760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200025857600080fd5b505afa1580156200026d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002939190620004a2565b905090565b504290565b6040805160208101909152600081526040518060200160405280620002d9670de0b6b3a764000085620003de60201b62000d051790919060201c565b905292915050565b600054600160a01b900460ff166200033c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401620001c7565b565b6002546040516302abf57960e61b81527f4964656e74696669657257686974656c6973740000000000000000000000000060048201526000916001600160a01b03169063aafd5e409060240160206040518083038186803b158015620003a357600080fd5b505afa158015620003b8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000293919062000410565b6000620003ec8284620004bb565b9392505050565b80516001600160a01b03811681146200040b57600080fd5b919050565b60006020828403121562000422578081fd5b620003ec82620003f3565b6000806000806080858703121562000443578283fd5b6200044e85620003f3565b93506200045e60208601620003f3565b9250604085015191506200047560608601620003f3565b905092959194509250565b60006020828403121562000492578081fd5b81518015158114620003ec578182fd5b600060208284031215620004b4578081fd5b5051919050565b6000816000190483118215151615620004e257634e487b7160e01b81526011600452602481fd5b500290565b611f6b80620004f76000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806381a10ae1116100ad578063bc12163011610071578063bc12163014610230578063bda02e771461019c578063d1e92c1114610243578063dd0eef3d14610256578063fa45aa001461026057600080fd5b806381a10ae1146101cb57806394909e62146101d35780639b56d6c9146101db5780639e4efaa0146101ee578063b9a3c84c1461021d57600080fd5b806329cb924d116100f457806329cb924d146101865780633403c2fc1461019c5780633cb6ce83146101a45780636b6cf9ae146101bb5780638129fc1c146101c357600080fd5b80630de15fd9146101265780631c39c38d14610156578063226112801461016957806322f8e56614610173575b600080fd5b600154610139906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600054610139906001600160a01b031681565b610171610268565b005b610171610181366004611d8e565b61032d565b61018e6103a3565b60405190815260200161014d565b610171610446565b6101ac610466565b6040519051815260200161014d565b6101ac6105e4565b610171610614565b6101ac61064c565b61017161066b565b6101ac6101e9366004611c82565b610683565b6102016101fc366004611d8e565b6106d5565b604080519351845291516020840152519082015260600161014d565b600254610139906001600160a01b031681565b61017161023e366004611cf2565b610852565b610171610251366004611cf2565b6109c1565b60045461018e9081565b6101ac610afd565b610270610d18565b610278610d63565b610280610dbc565b33600090815260066020526040902060018101546102dd5760405162461bcd60e51b8152602060048201526015602482015274139bc81c195b991a5b99c81dda5d1a191c985dd85b605a1b60448201526064015b60405180910390fd5b8054600182015460405190815233907fb158ea6c33db5aec992a08be94850f984ed987f3d524e5ec7d0662b689093b149060200160405180910390a361032281610dcb565b5061032b610de2565b565b6000546001600160a01b031661034257600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b15801561038857600080fd5b505af115801561039c573d6000803e3d6000fd5b5050505050565b600080546001600160a01b03161561043e5760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561040157600080fd5b505afa158015610415573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104399190611cda565b905090565b504290565b90565b61044e610d18565b610456610d63565b61045e610dbc565b61032b610de2565b60408051602081019091526000815261047d610d63565b610485610dbc565b600061048f6103a3565b9050600061049b610df7565b905060008060006104ab856106d5565b6003889055919450925090506104c2816000610e0b565b156104d35794506105dc9350505050565b815183516040517f19b92e73d08d517d71ec46136266e4f5d526a8cd4f8501d73713cebfe4f335ef90600090a361050a8185610e22565b610515836000610e66565b156105a9576000610524610e7d565b8451600154919250610541916001600160a01b0316908390610f02565b60015460405163432ce91960e11b81526001600160a01b0391821660048201528551602482015290821690638659d23290604401600060405180830381600087803b15801561058f57600080fd5b505af11580156105a3573d6000803e3d6000fd5b50505050505b6105b4826000610e66565b156105d55781516001546105d5916001600160a01b03909116903390610ffc565b9450505050505b610443610de2565b6040805160208101909152600081526105fb610d63565b6040805160208101909152600854815261043990611031565b61061c610d63565b610624610dbc565b6009805460ff191660011790556040805160008082526020820190925261045e91503061105b565b604080516020810190915260008152610663610d63565b610439610df7565b610673610d63565b61067b610dbc565b61045e61114f565b60408051602081019091526000815261069a610d63565b6001600160a01b038216600090815260066020908152604091829020825191820190925260029091015481526106cf90611031565b92915050565b604080516020810190915260008152604080516020810190915260008152604080516020810190915260008152600061070c610e7d565b90506000610718610df7565b9050610725816000610e0b565b80610731575085600354145b1561073d57505061084b565b6003546040516374201feb60e01b8152600481019190915260248101879052815160448201526001600160a01b038316906374201feb90606401604080518083038186803b15801561078e57600080fd5b505afa1580156107a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c69190611d5a565b90955093506107d5858561120e565b92506107e2836000610e0b565b156107ee57505061084b565b8051835111156108485760006108048483611241565b90506000610812868361126b565b905061081e8682611241565b955061082a8282611241565b9150610840610839888461126b565b8890611241565b965082945050505b50505b9193909250565b61085a610d18565b3361086481611290565b61086c610d63565b610874610dbc565b3360009081526006602052604081209061088f908490610e66565b6108d75760405162461bcd60e51b8152602060048201526019602482015278125b9d985b1a590818dbdb1b185d195c985b08185b5bdd5b9d603a1b60448201526064016102d4565b825181556108e36103a3565b6001820181905583516040519182529033907fadf0d81321571e1d83f52cfa9faf7add412d39431677ee21583f0d8998a9c8389060200160405180910390a3600061092c6112ee565b60408051602081019091526002840154815290915061095990829061095090611031565b90519051101590565b61099c5760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207061792066696e616c2066656560601b60448201526064016102d4565b6109a6308261138c565b6109b382600101546114bd565b50506109bd610de2565b5050565b6109c9610d18565b6109d1610466565b506109da610d63565b6109e2610dbc565b6109ed816000610e66565b610a355760405162461bcd60e51b8152602060048201526019602482015278125b9d985b1a590818dbdb1b185d195c985b08185b5bdd5b9d603a1b60448201526064016102d4565b33600090815260066020908152604080832081519283019091526002810154825291610a6a91610a6490611031565b90610e0b565b15610a9b5760405133907fbde21ee6ad063c852c81c03b9742ffeb9366a51af89bc3f6ad9aef42068abc3b90600090a25b610aa58183611538565b50815160405133907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90600090a38151600154610af1916001600160a01b039091169033903090611560565b50610afa610de2565b50565b604080516020810190915260008152610b14610d18565b610b1c610466565b50610b25610d63565b610b2d610dbc565b336000908152600660205260409020600181015415801590610b5a5750610b526103a3565b816001015411155b610ba65760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642077697468647261772072657175657374000000000000000060448201526064016102d4565b6000610bb58260010154611598565b604080516020810190915283548152909150600090610bd49083611731565b604080516020810190915260028501548152909150610bfd90610bf690611031565b5182511190565b15610c4c57604080516020810190915260028401548152610c1d90611031565b60405190915033907f01d32da79f1973ab64f1de861ae483d2e685bbdf62afb66a4e5f6a8db307b90790600090a25b610c56838261176d565b805183516001860154604080519283526020830191909152929650909133917f1489278b1433363140f0068698af68fad66f0f617b6cabe5710540b57397de42910160405180910390a3610ca983610dcb565b8351600154610cc5916001600160a01b03909116903390610ffc565b505050610443610de2565b604080516020810190915260008152604080516020810190915280610cfd84670de0b6b3a7640000610d05565b905292915050565b6000610d118284611e7e565b9392505050565b60095460ff1661032b5760405162461bcd60e51b8152602060048201526016602482015275155b9a5b9a5d1a585b1a5e99590818dbdb9d1c9858dd60521b60448201526064016102d4565b600054600160a01b900460ff1661032b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102d4565b6000805460ff60a01b19169055565b610dd56000610cd0565b5181556000600190910155565b6000805460ff60a01b1916600160a01b179055565b6040805160208101909152600081526105fb565b6000610e1682610cd0565b51835114905092915050565b6000610e2e8383611795565b9050610e5d610e4782610e416001610cd0565b90611241565b6040805160208101909152600454815290611824565b51600455505050565b6000610e7182610cd0565b51835111905092915050565b6002546040516302abf57960e61b81526453746f726560d81b60048201526000916001600160a01b03169063aafd5e40906024015b60206040518083038186803b158015610eca57600080fd5b505afa158015610ede573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104399190611c9e565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015610f4e57600080fd5b505afa158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190611cda565b610f909190611e52565b6040516001600160a01b038516602482015260448101829052909150610ff690859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611861565b50505050565b6040516001600160a01b03831660248201526044810182905261102c90849063a9059cbb60e01b90606401610fbf565b505050565b604080516020810190915260008152604080516020810190915260045481526106cf908390611824565b6005546040516302abf57960e61b815267526567697374727960c01b60048201526001600160a01b0390911690600090829063aafd5e409060240160206040518083038186803b1580156110ae57600080fd5b505afa1580156110c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e69190611c9e565b60405163066c8c2560e41b81529091506001600160a01b038216906366c8c250906111179087908790600401611dc2565b600060405180830381600087803b15801561113157600080fd5b505af1158015611145573d6000803e3d6000fd5b5050505050505050565b6000611159610df7565b6040805160208101918290526001546370a0823160e01b9092523060248201529192506000919081906001600160a01b03166370a082316044830160206040518083038186803b1580156111ac57600080fd5b505afa1580156111c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e49190611cda565b905290506111f482825190511090565b156109bd57611206610e478284611731565b516004555050565b60408051602081019091526000815260408051602081019091528251845182916112389190611933565b90529392505050565b6040805160208101909152600081526040805160208101909152825184518291611238919061193f565b60408051602081019091526000815281518351106112895781610d11565b5090919050565b6001600160a01b03811660009081526006602052604090206001015415610afa5760405162461bcd60e51b815260206004820152601260248201527114195b991a5b99c81dda5d1a191c985dd85b60721b60448201526064016102d4565b6040805160208101909152600081526000611307610e7d565b600154604051635b97aadd60e01b81526001600160a01b039182166004820152919250821690635b97aadd9060240160206040518083038186803b15801561134e57600080fd5b505afa158015611362573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113869190611d3f565b91505090565b611397816000610e0b565b156113a0575050565b6001600160a01b03821630146113d35780516001546113ce916001600160a01b039091169084903090611560565b611400565b60006113dd610df7565b90506113eb81835190511190565b6113f457600080fd5b6113fe8282610e22565b505b80516040517f4f9bf7e8cd0f2456f9c43d2597bedcf1446c9c64544053f1ece6423ae9a07e5290600090a26000611435610e7d565b8251600154919250611452916001600160a01b0316908390610f02565b60015460405163432ce91960e11b81526001600160a01b0391821660048201528351602482015290821690638659d23290604401600060405180830381600087803b1580156114a057600080fd5b505af11580156114b4573d6000803e3d6000fd5b50505050505050565b60006114c761194b565b6007546040516368ad8ae360e01b81529192506001600160a01b038316916368ad8ae391611502918690600401918252602082015260400190565b600060405180830381600087803b15801561151c57600080fd5b505af1158015611530573d6000803e3d6000fd5b505050505050565b6040805160208101909152600081526115548360020183611985565b50610d11600883611985565b6040516001600160a01b0380851660248301528316604482015260648101829052610ff69085906323b872dd60e01b90608401610fbf565b60408051602081019091526000815260006115b161194b565b60075460405163501f440d60e11b81529192506001600160a01b0383169163a03e881a916115ec918790600401918252602082015260400190565b60206040518083038186803b15801561160457600080fd5b505afa158015611618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163c9190611cba565b6116825760405162461bcd60e51b8152602060048201526017602482015276556e7265736f6c766564206f7261636c6520707269636560481b60448201526064016102d4565b600754604051636494078360e11b81526000916001600160a01b0384169163c9280f06916116bd918890600401918252602082015260400190565b60206040518083038186803b1580156116d557600080fd5b505afa1580156116e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170d9190611cda565b9050600081121561171c575060005b60408051602081019091529081529392505050565b60408051602081019091526000815260408051602081019091528251845182916112389161176790670de0b6b3a7640000610d05565b90611a02565b6040805160208101909152600081526117898360020183611a0e565b50610d11600883611a0e565b6040805160208101909152600080825283516117b990670de0b6b3a7640000610d05565b83519091506000906117cc908390611a02565b84519091506000906117df908490611a87565b9050801561180b576040805160208101909152806117fe846001611933565b81525093505050506106cf565b60405180602001604052808381525093505050506106cf565b6040805160208101909152600081526040805160208101909152825184518291670de0b6b3a76400009161185791610d05565b6112389190611e6a565b60006118b6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611a939092919063ffffffff16565b80519091501561102c57808060200190518101906118d49190611cba565b61102c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102d4565b6000610d118284611e52565b6000610d118284611e9d565b6002546040516302abf57960e61b8152654f7261636c6560d01b60048201526000916001600160a01b03169063aafd5e4090602401610eb2565b6040805160208101909152600081526040805160208101909152835481526000906119af90611031565b905060006119bc84611aaa565b6040805160208101909152865481529091506119d8908261120e565b5180865560408051602081019091529081526119f9908390610e4190611031565b95945050505050565b6000610d118284611e6a565b604080516020810190915260008152604080516020810190915283548152600090611a3890611031565b90506000611a4584611aaa565b604080516020810190915286548152909150611a619082611241565b5180865560408051602081019091529081526119f990611a8090611031565b8390611241565b6000610d118284611ee0565b6060611aa28484600085611ad4565b949350505050565b604080516020810190915260008152604080516020810190915260045481526106cf908390611731565b606082471015611b355760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102d4565b843b611b835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102d4565b600080866001600160a01b03168587604051611b9f9190611da6565b60006040518083038185875af1925050503d8060008114611bdc576040519150601f19603f3d011682016040523d82523d6000602084013e611be1565b606091505b5091509150611bf1828286611bfc565b979650505050505050565b60608315611c0b575081610d11565b825115611c1b5782518084602001fd5b8160405162461bcd60e51b81526004016102d49190611e1f565b600060208284031215611c46578081fd5b6040516020810181811067ffffffffffffffff82111715611c7557634e487b7160e01b83526041600452602483fd5b6040529151825250919050565b600060208284031215611c93578081fd5b8135610d1181611f20565b600060208284031215611caf578081fd5b8151610d1181611f20565b600060208284031215611ccb578081fd5b81518015158114610d11578182fd5b600060208284031215611ceb578081fd5b5051919050565b600060208284031215611d03578081fd5b6040516020810181811067ffffffffffffffff82111715611d3257634e487b7160e01b83526041600452602483fd5b6040529135825250919050565b600060208284031215611d50578081fd5b610d118383611c35565b60008060408385031215611d6c578081fd5b611d768484611c35565b9150611d858460208501611c35565b90509250929050565b600060208284031215611d9f578081fd5b5035919050565b60008251611db8818460208701611eb4565b9190910192915050565b604080825283519082018190526000906020906060840190828701845b82811015611e045781516001600160a01b031684529284019290840190600101611ddf565b5050506001600160a01b039490941692019190915250919050565b6020815260008251806020840152611e3e816040850160208701611eb4565b601f01601f19169190910160400192915050565b60008219821115611e6557611e65611ef4565b500190565b600082611e7957611e79611f0a565b500490565b6000816000190483118215151615611e9857611e98611ef4565b500290565b600082821015611eaf57611eaf611ef4565b500390565b60005b83811015611ecf578181015183820152602001611eb7565b83811115610ff65750506000910152565b600082611eef57611eef611f0a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b0381168114610afa57600080fdfea26469706673582212200b181b3b0d34b2cfe12607b2ea2894865609921f15da6eb4e19a51c1744031ce64736f6c63430008040033";