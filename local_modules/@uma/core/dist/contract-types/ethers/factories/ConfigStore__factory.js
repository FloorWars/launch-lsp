"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigStore__factory = void 0;
const ethers_1 = require("ethers");
class ConfigStore__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_initialConfig, _timerAddress, overrides) {
        return super.deploy(_initialConfig, _timerAddress, overrides || {});
    }
    getDeployTransaction(_initialConfig, _timerAddress, overrides) {
        return super.getDeployTransaction(_initialConfig, _timerAddress, overrides || {});
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
exports.ConfigStore__factory = ConfigStore__factory;
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "timelockLiveness",
                        type: "uint256",
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
                        name: "rewardRatePerSecond",
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
                        name: "proposerBondPercentage",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "maxFundingRate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "minFundingRate",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "proposalTimePastLimit",
                        type: "uint256",
                    },
                ],
                internalType: "struct ConfigStoreInterface.ConfigSettings",
                name: "_initialConfig",
                type: "tuple",
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
                indexed: false,
                internalType: "uint256",
                name: "rewardRatePerSecond",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposerBondPercentage",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timelockLiveness",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "maxFundingRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "minFundingRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalTimePastLimit",
                type: "uint256",
            },
        ],
        name: "ChangedConfigSettings",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "rewardRatePerSecond",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposerBondPercentage",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timelockLiveness",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "maxFundingRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "minFundingRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalTimePastLimit",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalPassedTimestamp",
                type: "uint256",
            },
        ],
        name: "ProposedNewConfigSettings",
        type: "event",
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
        inputs: [],
        name: "owner",
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
        name: "pendingConfig",
        outputs: [
            {
                internalType: "uint256",
                name: "timelockLiveness",
                type: "uint256",
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
                name: "rewardRatePerSecond",
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
                name: "proposerBondPercentage",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "int256",
                        name: "rawValue",
                        type: "int256",
                    },
                ],
                internalType: "struct FixedPoint.Signed",
                name: "maxFundingRate",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "int256",
                        name: "rawValue",
                        type: "int256",
                    },
                ],
                internalType: "struct FixedPoint.Signed",
                name: "minFundingRate",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "proposalTimePastLimit",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingPassedTimestamp",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updateAndGetCurrentConfig",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "timelockLiveness",
                        type: "uint256",
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
                        name: "rewardRatePerSecond",
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
                        name: "proposerBondPercentage",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "maxFundingRate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "minFundingRate",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "proposalTimePastLimit",
                        type: "uint256",
                    },
                ],
                internalType: "struct ConfigStoreInterface.ConfigSettings",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "timelockLiveness",
                        type: "uint256",
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
                        name: "rewardRatePerSecond",
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
                        name: "proposerBondPercentage",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "maxFundingRate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "int256",
                                name: "rawValue",
                                type: "int256",
                            },
                        ],
                        internalType: "struct FixedPoint.Signed",
                        name: "minFundingRate",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "proposalTimePastLimit",
                        type: "uint256",
                    },
                ],
                internalType: "struct ConfigStoreInterface.ConfigSettings",
                name: "newConfig",
                type: "tuple",
            },
        ],
        name: "proposeNewConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "publishPendingConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200103b3803806200103b833981016040819052620000349162000319565b600080546001600160a81b0319166001600160a01b03831617600160a01b1781556200005d3390565b600180546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000b682620000ed565b50805160025560208101515160035560408101515160045560608101515160055560808101515160065560a0015160075562000432565b805162093a801080159062000106575080516201518011155b620001585760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074696d656c6f636b4c6976656e657373000000000000000060448201526064015b60405180910390fd5b60006200018d62989680620001796021620001ff60201b620006931760201c565b6200024360201b620006c81790919060201c565b9050620001ad8183602001516200028460201b620006f91790919060201c565b620001fb5760405162461bcd60e51b815260206004820152601b60248201527f496e76616c696420726577617264526174655065725365636f6e64000000000060448201526064016200014f565b5050565b60408051602081019091526000815260405180602001604052806200023b670de0b6b3a7640000856200028b60201b620007001790919060201c565b905292915050565b60408051602081019091526000815260405180602001604052806200027b848660000151620002a060201b620007131790919060201c565b90529392505050565b5190511090565b600062000299828462000406565b9392505050565b6000620002998284620003e5565b80516001600160a01b0381168114620002c657600080fd5b919050565b600060208284031215620002dd578081fd5b604051602081016001600160401b03811182821017156200030c57634e487b7160e01b83526041600452602483fd5b6040529151825250919050565b60008082840360e08112156200032d578283fd5b60c08112156200033b578283fd5b5060405160c081016001600160401b03811182821017156200036b57634e487b7160e01b84526041600452602484fd5b60405283518152620003818560208601620002cb565b6020820152620003958560408601620002cb565b6040820152620003a98560608601620002cb565b6060820152620003bd8560808601620002cb565b608082015260a084810151908201529150620003dc60c08401620002ae565b90509250929050565b6000826200040157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156200042d57634e487b7160e01b81526011600452602481fd5b500290565b610bf980620004426000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063633b291b11610071578063633b291b1461016e578063715018a61461018157806373c6a288146101895780638da5cb5b14610200578063e6bde91314610211578063f2fde38b1461021957600080fd5b8063145701f8146100ae5780631c39c38d1461010f57806322f8e5661461013a57806329cb924d1461014f5780633950917f14610165575b600080fd5b6100b661022c565b6040516101069190600060c08201905082518252602083015151602083015260408301515160408301526060830151516060830152608083015151608083015260a083015160a083015292915050565b60405180910390f35b600054610122906001600160a01b031681565b6040516001600160a01b039091168152602001610106565b61014d610148366004610af1565b6102c4565b005b61015761033a565b604051908152602001610106565b610157600e5481565b61014d61017c366004610a4e565b6103da565b61014d610508565b6008546040805160208082018352600954825282518082018452600a54815283518083018552600b5481528451928301909452600c548252600d546101cf959491929086565b60408051968752945160208701529251938501939093525160608401529051608083015260a082015260c001610106565b6001546001600160a01b0316610122565b61014d61057c565b61014d610227366004610a27565b6105a8565b610234610954565b61023c61071f565b6102446107de565b6102566000805460ff60a01b19169055565b506040805160c081018252600254815281516020818101845260035482528083019190915282518082018452600454815282840152825180820184526005548152606083015282519081019092526006548252608081019190915260075460a08201526102c1610837565b90565b6000546001600160a01b03166102d957600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b5050505050565b600080546001600160a01b0316156103d55760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039857600080fd5b505afa1580156103ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d09190610b09565b905090565b504290565b6001546001600160a01b0316331461040d5760405162461bcd60e51b815260040161040490610b21565b60405180910390fd5b6104156107de565b6104276000805460ff60a01b19169055565b61042f61071f565b6104388161084c565b8051600855602081015151600955604081015151600a55606081015151600b55608081015151600c5560a0810151600d5560025461047e9061047861033a565b90610926565b600e81905560208281015151604080850151518551606080880151516080808a01515160a0808c01518851998a5299890196909652878701949094529186015284015282019290925260c08101929092525133917fbd8bc3d3f0d8c0858d97147138d622cb8f4442c8219dc1b792f69ec651a33708919081900360e00190a2610505610837565b50565b6001546001600160a01b031633146105325760405162461bcd60e51b815260040161040490610b21565b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b6105846107de565b6105966000805460ff60a01b19169055565b61059e61071f565b6105a6610837565b565b6001546001600160a01b031633146105d25760405162461bcd60e51b815260040161040490610b21565b6001600160a01b0381166106375760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610404565b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6040805160208101909152600081526040805160208101909152806106c084670de0b6b3a7640000610700565b905292915050565b6040805160208101909152600081526040805160208101909152835181906106f09085610713565b90529392505050565b5190511090565b600061070c8284610b8e565b9392505050565b600061070c8284610b6e565b610727610932565b156105a657600854600255600954600355600a54600455600b54600555600c54600655600d54600755610778600060088190556009819055600a819055600b819055600c819055600d819055600e55565b600354600454600254600554600654600754604080519687526020870195909552938501929092526060840152608083015260a08201527f8722f0f2d3017a4a2c429a68c4b2a28bcc86c7c79200913fc6db14237364eed79060c00160405180910390a1565b600054600160a01b900460ff166105a65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610404565b6000805460ff60a01b1916600160a01b179055565b805162093a8010801590610864575080516201518011155b6108b05760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074696d656c6f636b4c6976656e65737300000000000000006044820152606401610404565b60006108c9629896806108c36021610693565b906106c8565b602083015181519051919250116109225760405162461bcd60e51b815260206004820152601b60248201527f496e76616c696420726577617264526174655065725365636f6e6400000000006044820152606401610404565b5050565b600061070c8284610b56565b6000600e546000141580156103d0575061094a61033a565b600e541115905090565b6040518060c001604052806000815260200161097c6040518060200160405280600081525090565b81526020016109976040518060200160405280600081525090565b81526020016109b26040518060200160405280600081525090565b81526020016109cd6040518060200160405280600081525090565b8152602001600081525090565b6000602082840312156109eb578081fd5b6040516020810181811067ffffffffffffffff82111715610a1a57634e487b7160e01b83526041600452602483fd5b6040529135825250919050565b600060208284031215610a38578081fd5b81356001600160a01b038116811461070c578182fd5b600060c08284031215610a5f578081fd5b60405160c0810181811067ffffffffffffffff82111715610a8e57634e487b7160e01b83526041600452602483fd5b60405282358152610aa284602085016109da565b6020820152610ab484604085016109da565b6040820152610ac684606085016109da565b6060820152610ad884608085016109da565b608082015260a083013560a08201528091505092915050565b600060208284031215610b02578081fd5b5035919050565b600060208284031215610b1a578081fd5b5051919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610b6957610b69610bad565b500190565b600082610b8957634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610ba857610ba8610bad565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220bf6ba700fb51f5222fc1eb7794aa68d94b7d359eae834a977d0fe6ed4106292664736f6c63430008040033";
