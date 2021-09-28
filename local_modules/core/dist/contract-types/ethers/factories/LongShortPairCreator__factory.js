"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongShortPairCreator__factory = void 0;
const ethers_1 = require("ethers");
class LongShortPairCreator__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_finder, _tokenFactory, _timer, overrides) {
        return super.deploy(_finder, _tokenFactory, _timer, overrides || {});
    }
    getDeployTransaction(_finder, _tokenFactory, _timer, overrides) {
        return super.getDeployTransaction(_finder, _tokenFactory, _timer, overrides || {});
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
exports.LongShortPairCreator__factory = LongShortPairCreator__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract FinderInterface",
                name: "_finder",
                type: "address",
            },
            {
                internalType: "contract TokenFactory",
                name: "_tokenFactory",
                type: "address",
            },
            {
                internalType: "address",
                name: "_timer",
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
                name: "longShortPair",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "deployerAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "longToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "shortToken",
                type: "address",
            },
        ],
        name: "CreatedLongShortPair",
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
        name: "tokenFactory",
        outputs: [
            {
                internalType: "contract TokenFactory",
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
                components: [
                    {
                        internalType: "string",
                        name: "pairName",
                        type: "string",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTimestamp",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "collateralPerPair",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "priceIdentifier",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "longSynthName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "longSynthSymbol",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "shortSynthName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "shortSynthSymbol",
                        type: "string",
                    },
                    {
                        internalType: "contract IERC20Standard",
                        name: "collateralToken",
                        type: "address",
                    },
                    {
                        internalType: "contract LongShortPairFinancialProductLibrary",
                        name: "financialProductLibrary",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "customAncillaryData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "prepaidProposerReward",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "optimisticOracleLivenessTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "optimisticOracleProposerBond",
                        type: "uint256",
                    },
                ],
                internalType: "struct LongShortPairCreator.CreatorParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "createLongShortPair",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162003db238038062003db2833981016040819052620000349162000124565b600080546001600160a81b0319166001600160a01b03831617600160a01b1790556200005f620000c4565b620000726000805460ff60a01b19169055565b600180546001600160a01b038085166001600160a01b0319928316179092556002805492861692909116919091179055620000bb6000805460ff60a01b1916600160a01b179055565b50505062000190565b600054600160a01b900460ff16620001225760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640160405180910390fd5b565b60008060006060848603121562000139578283fd5b8351620001468162000177565b6020850151909350620001598162000177565b60408501519092506200016c8162000177565b809150509250925092565b6001600160a01b03811681146200018d57600080fd5b50565b613c1280620001a06000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c806308dda04f146200006f5780631c39c38d14620000a357806322f8e56614620000b757806329cb924d14620000d0578063b9a3c84c14620000e9578063e77772fe14620000fd575b600080fd5b620000866200008036600462000dd4565b62000111565b6040516001600160a01b0390911681526020015b60405180910390f35b60005462000086906001600160a01b031681565b620000ce620000c836600462000f7a565b62000808565b005b620000da62000881565b6040519081526020016200009a565b60025462000086906001600160a01b031681565b60015462000086906001600160a01b031681565b60006200011d62000926565b620001306000805460ff60a01b19169055565b608082015151620001885760405162461bcd60e51b815260206004820152601b60248201527f4d697373696e67206c6f6e672073796e746865746963206e616d65000000000060448201526064015b60405180910390fd5b60c082015151620001dc5760405162461bcd60e51b815260206004820152601c60248201527f4d697373696e672073686f72742073796e746865746963206e616d650000000060448201526064016200017f565b60a082015151620002305760405162461bcd60e51b815260206004820152601d60248201527f4d697373696e67206c6f6e672073796e7468657469632073796d626f6c00000060448201526064016200017f565b60e082015151620002845760405162461bcd60e51b815260206004820152601e60248201527f4d697373696e672073686f72742073796e7468657469632073796d626f6c000060448201526064016200017f565b60006200029683610100015162000983565b600154608085015160a086015160405163e8a0aed360e01b81529394506000936001600160a01b039093169263e8a0aed392620002da929091879060040162001030565b602060405180830381600087803b158015620002f557600080fd5b505af11580156200030a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000330919062000db5565b60015460c086015160e087015160405163e8a0aed360e01b81529394506000936001600160a01b039093169263e8a0aed39262000374929091889060040162001030565b602060405180830381600087803b1580156200038f57600080fd5b505af1158015620003a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003ca919062000db5565b90506000620004f7868484604080516101c08101825260608082526000602083018190529282018390528082018390526080820183905260a0820183905260c0820183905260e0820183905261010082015261012081018290526101408101829052610160810182905261018081018290526101a08101919091528351815260208085015167ffffffffffffffff16908201526040808501519082015260608085015190820152610100808501516001600160a01b0390811660c084015261012080870151821660e08501526101408088015193850193909352610160808801519185019190915261018080880151938501939093526101a09687015190840152938416608083015291831660a08201526002548316918101919091526000549091169181019190915290565b604051620005059062000cd0565b6200051191906200106d565b604051809103906000f0801580156200052e573d6000803e3d6000fd5b50610160870151909150156200056a576200056a33828861016001518961010001516001600160a01b031662000a05909392919063ffffffff16565b604051634c1d96ab60e11b81526001600160a01b03808316600483015282919085169063983b2d5690602401600060405180830381600087803b158015620005b157600080fd5b505af1158015620005c6573d6000803e3d6000fd5b5050604051637a231bdd60e11b81526001600160a01b0384811660048301528716925063f44637ba9150602401600060405180830381600087803b1580156200060e57600080fd5b505af115801562000623573d6000803e3d6000fd5b50506040516339e6401560e11b81526001600160a01b038481166004830152871692506373cc802a9150602401600060405180830381600087803b1580156200066b57600080fd5b505af115801562000680573d6000803e3d6000fd5b5050604051634c1d96ab60e11b81526001600160a01b0384811660048301528616925063983b2d569150602401600060405180830381600087803b158015620006c857600080fd5b505af1158015620006dd573d6000803e3d6000fd5b5050604051637a231bdd60e11b81526001600160a01b0384811660048301528616925063f44637ba9150602401600060405180830381600087803b1580156200072557600080fd5b505af11580156200073a573d6000803e3d6000fd5b50506040516339e6401560e11b81526001600160a01b038481166004830152861692506373cc802a9150602401600060405180830381600087803b1580156200078257600080fd5b505af115801562000797573d6000803e3d6000fd5b5050604080516001600160a01b0388811682528781166020830152339450851692507fd007d1b8d04c15a0cadef913ed5a5c4b381d3dcd2927c2de9a6dcc1ddab2d2f8910160405180910390a3945050505050620008036000805460ff60a01b1916600160a01b179055565b919050565b6000546001600160a01b03166200081e57600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b1580156200086557600080fd5b505af11580156200087a573d6000803e3d6000fd5b5050505050565b600080546001600160a01b031615620009215760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b158015620008e157600080fd5b505afa158015620008f6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200091c919062000f93565b905090565b504290565b600054600160a01b900460ff16620009815760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016200017f565b565b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620009bf57600080fd5b505afa925050508015620009f2575060408051601f3d908101601f19168201909252620009ef9181019062000fac565b60015b620009ff57506012919050565b92915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905262000a6190859062000a67565b50505050565b600062000abe826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031662000b459092919063ffffffff16565b80519091501562000b40578080602001905181019062000adf919062000d93565b62000b405760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016200017f565b505050565b606062000b56848460008562000b60565b90505b9392505050565b60608247101562000bc35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016200017f565b843b62000c135760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200017f565b600080866001600160a01b0316858760405162000c31919062000ffd565b60006040518083038185875af1925050503d806000811462000c70576040519150601f19603f3d011682016040523d82523d6000602084013e62000c75565b606091505b509150915062000c8782828662000c92565b979650505050505050565b6060831562000ca357508162000b59565b82511562000cb45782518084602001fd5b8160405162461bcd60e51b81526004016200017f91906200101b565b6129ab806200123283390190565b600082601f83011262000cef578081fd5b813567ffffffffffffffff8082111562000d0d5762000d0d62001202565b604051601f8301601f19908116603f0116810190828211818310171562000d385762000d3862001202565b8160405283815286602085880101111562000d51578485fd5b8360208701602083013792830160200193909352509392505050565b8035620008038162001218565b803567ffffffffffffffff811681146200080357600080fd5b60006020828403121562000da5578081fd5b8151801515811462000b59578182fd5b60006020828403121562000dc7578081fd5b815162000b598162001218565b60006020828403121562000de6578081fd5b813567ffffffffffffffff8082111562000dfe578283fd5b908301906101c0828603121562000e13578283fd5b62000e1d620011a6565b82358281111562000e2c578485fd5b62000e3a8782860162000cde565b82525062000e4b6020840162000d7a565b6020820152604083013560408201526060830135606082015260808301358281111562000e76578485fd5b62000e848782860162000cde565b60808301525060a08301358281111562000e9c578485fd5b62000eaa8782860162000cde565b60a08301525060c08301358281111562000ec2578485fd5b62000ed08782860162000cde565b60c08301525060e08301358281111562000ee8578485fd5b62000ef68782860162000cde565b60e08301525061010062000f0c81850162000d6d565b9082015261012062000f2084820162000d6d565b90820152610140838101358381111562000f38578586fd5b62000f468882870162000cde565b9183019190915250610160838101359082015261018080840135908201526101a09283013592810192909252509392505050565b60006020828403121562000f8c578081fd5b5035919050565b60006020828403121562000fa5578081fd5b5051919050565b60006020828403121562000fbe578081fd5b815160ff8116811462000b59578182fd5b6000815180845262000fe9816020860160208601620011d3565b601f01601f19169290920160200192915050565b6000825162001011818460208701620011d3565b9190910192915050565b60208152600062000b59602083018462000fcf565b60608152600062001045606083018662000fcf565b828103602084015262001059818662000fcf565b91505060ff83166040830152949350505050565b60208152600082516101c08060208501526200108e6101e085018362000fcf565b91506020850151620010ac604086018267ffffffffffffffff169052565b5060408501516060850152606085015160808501526080850151620010dc60a08601826001600160a01b03169052565b5060a08501516001600160a01b03811660c08601525060c08501516001600160a01b03811660e08601525060e085015161010062001124818701836001600160a01b03169052565b80870151915050610120601f19868503018187015262001145848362000fcf565b9087015161014087810191909152870151610160808801919091528701516101808088019190915287015190935090506101a06200118d818701836001600160a01b03169052565b909501516001600160a01b031693019290925250919050565b6040516101c0810167ffffffffffffffff81118282101715620011cd57620011cd62001202565b60405290565b60005b83811015620011f0578181015183820152602001620011d6565b8381111562000a615750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200122e57600080fd5b5056fe60806040523480156200001157600080fd5b50604051620029ab380380620029ab833981016040819052620000349162000abe565b6101a0810151600080546001600160a81b0319166001600160a01b0392831617600160a01b17905561018082015160098054919092166001600160a01b031991909116179055805151620000cf5760405162461bcd60e51b815260206004820152601760248201527f50616972206e616d652063616e7420626520656d70747900000000000000000060448201526064015b60405180910390fd5b620000d9620006fc565b81602001516001600160401b031611620001365760405162461bcd60e51b815260206004820152601c60248201527f45787069726174696f6e2074696d657374616d7020696e2070617374000000006044820152606401620000c6565b60008160400151116200018c5760405162461bcd60e51b815260206004820152601f60248201527f436f6c6c61746572616c2070657220706169722063616e6e6f742062652030006044820152606401620000c6565b62000196620007a1565b6001600160a01b03166390978d1b82606001516040518263ffffffff1660e01b8152600401620001c891815260200190565b60206040518083038186803b158015620001e157600080fd5b505afa158015620001f6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021c919062000a5e565b6200026a5760405162461bcd60e51b815260206004820152601960248201527f4964656e746966696572206e6f742072656769737465726564000000000000006044820152606401620000c6565b60006200027662000842565b6001600160a01b03161415620002c05760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b2103334b73232b960911b6044820152606401620000c6565b60e08101516001600160a01b03166200031c5760405162461bcd60e51b815260206004820152601f60248201527f496e76616c69642046696e616e6369616c50726f647563744c696272617279006044820152606401620000c6565b6200032662000887565b60c0820151604051631d1d5b3960e11b81526001600160a01b039182166004820152911690633a3ab6729060240160206040518083038186803b1580156200036d57600080fd5b505afa15801562000382573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003a8919062000a5e565b620003f65760405162461bcd60e51b815260206004820152601a60248201527f436f6c6c61746572616c206e6f742077686974656c69737465640000000000006044820152606401620000c6565b6000816101400151116200044d5760405162461bcd60e51b815260206004820152601760248201527f4f4f206c6976656e6573732063616e6e6f7420626520300000000000000000006044820152606401620000c6565b63bb74480081610140015110620004a75760405162461bcd60e51b815260206004820152601560248201527f4f4f206c6976656e65737320746f6f206c6172676500000000000000000000006044820152606401620000c6565b80518051620004bf91600191602090910190620008d9565b506020810151600080546001600160401b03909216600160b01b02600160b01b600160f01b0319909216919091178155604082015160025560608201516005556080820151600780546001600160a01b039283166001600160a01b03199182161790915560a08401516008805491841691831691909117905560c08401516006805491841691831691909117905560e0840151600a80549190931691161790556200056962000842565b9050806001600160a01b031663c371dda76040518163ffffffff1660e01b815260040160206040518083038186803b158015620005a557600080fd5b505afa158015620005ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005e0919062000c1b565b61010083015160405163af5d2f3960e01b81526001600160a01b0384169163af5d2f3991620006159190309060040162000c34565b60006040518083038186803b1580156200062e57600080fd5b505afa15801562000643573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200066d919081019062000a80565b511115620006be5760405162461bcd60e51b815260206004820152601760248201527f416e63696c6c617279204461746120746f6f206c6f6e670000000000000000006044820152606401620000c6565b6101008201518051620006da91600b91602090910190620008d9565b5050610120810151600c55610140810151600d556101600151600e5562000d45565b600080546001600160a01b0316156200079c5760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200075c57600080fd5b505afa15801562000771573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000797919062000c1b565b905090565b504290565b6009546040516302abf57960e61b81527f4964656e74696669657257686974656c6973740000000000000000000000000060048201526000916001600160a01b03169063aafd5e40906024015b60206040518083038186803b1580156200080757600080fd5b505afa1580156200081c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000797919062000a38565b6009546040516302abf57960e61b81526f4f7074696d69737469634f7261636c6560801b60048201526000916001600160a01b03169063aafd5e4090602401620007ee565b6009546040516302abf57960e61b81527f436f6c6c61746572616c57686974656c6973740000000000000000000000000060048201526000916001600160a01b03169063aafd5e4090602401620007ee565b828054620008e79062000cd9565b90600052602060002090601f0160209004810192826200090b576000855562000956565b82601f106200092657805160ff191683800117855562000956565b8280016001018555821562000956579182015b828111156200095657825182559160200191906001019062000939565b506200096492915062000968565b5090565b5b8082111562000964576000815560010162000969565b80516200098c8162000d2c565b919050565b600082601f830112620009a2578081fd5b81516001600160401b0380821115620009bf57620009bf62000d16565b604051601f8301601f19908116603f01168101908282118183101715620009ea57620009ea62000d16565b8160405283815286602085880101111562000a03578485fd5b62000a1684602083016020890162000ca6565b9695505050505050565b80516001600160401b03811681146200098c57600080fd5b60006020828403121562000a4a578081fd5b815162000a578162000d2c565b9392505050565b60006020828403121562000a70578081fd5b8151801515811462000a57578182fd5b60006020828403121562000a92578081fd5b81516001600160401b0381111562000aa8578182fd5b62000ab68482850162000991565b949350505050565b60006020828403121562000ad0578081fd5b81516001600160401b038082111562000ae7578283fd5b908301906101c0828603121562000afc578283fd5b62000b0662000c7a565b82518281111562000b15578485fd5b62000b238782860162000991565b82525062000b346020840162000a20565b6020820152604083015160408201526060830151606082015262000b5b608084016200097f565b608082015262000b6e60a084016200097f565b60a082015262000b8160c084016200097f565b60c082015262000b9460e084016200097f565b60e0820152610100808401518381111562000bad578586fd5b62000bbb8882870162000991565b9183019190915250610120838101519082015261014080840151908201526101608084015190820152610180915062000bf68284016200097f565b828201526101a0915062000c0c8284016200097f565b91810191909152949350505050565b60006020828403121562000c2d578081fd5b5051919050565b604081526000835180604084015262000c5581606085016020880162000ca6565b6001600160a01b0393909316602083015250601f91909101601f191601606001919050565b6040516101c081016001600160401b038111828210171562000ca05762000ca062000d16565b60405290565b60005b8381101562000cc357818101518382015260200162000ca9565b8381111562000cd3576000848401525b50505050565b600181811c9082168062000cee57607f821691505b6020821081141562000d1057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000d4257600080fd5b50565b611c568062000d556000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806397523661116100c3578063b9a3c84c1161007c578063b9a3c84c146102dd578063b9fd36c8146102f0578063db006a75146102f9578063e3065da71461030c578063e964ae021461031f578063edfa9a9b1461032857600080fd5b8063975236611461025e5780639a9c29f6146102675780639f43ddd21461027a578063a9ae29df146102ae578063b2016bd4146102b7578063b66333cd146102ca57600080fd5b8063780900dc11610115578063780900dc146101fe57806379599f96146102115780638150fd3d1461021957806385209ee01461022157806385c98474146102425780639375f0e91461024b57600080fd5b80631c39c38d1461015d57806322f8e5661461018d57806329cb924d146101a257806340794c3b146101b85780634eef4a73146101cd5780634fe4ecbf146101f5575b600080fd5b600054610170906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6101a061019b3660046118c6565b610331565b005b6101aa6103a7565b604051908152602001610184565b6101c0610447565b6040516101849190611ac4565b6101e06101db366004611856565b6104d5565b60408051928352602083019190915201610184565b6101aa600d5481565b6101aa61020c3660046118c6565b6105e3565b6101a0610803565b6101c061094a565b60005461023590600160a81b900460ff1681565b6040516101849190611ad7565b6101aa600e5481565b600a54610170906001600160a01b031681565b6101aa60055481565b6101aa6102753660046118de565b610957565b60005461029590600160b01b900467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610184565b6101aa60045481565b600654610170906001600160a01b031681565b600754610170906001600160a01b031681565b600954610170906001600160a01b031681565b6101aa600c5481565b6101aa6103073660046118c6565b610d6b565b600854610170906001600160a01b031681565b6101aa60025481565b6101aa60035481565b6000546001600160a01b031661034657600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b15801561038c57600080fd5b505af11580156103a0573d6000803e3d6000fd5b5050505050565b600080546001600160a01b0316156104425760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561040557600080fd5b505afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d91906118ae565b905090565b504290565b6001805461045490611b8d565b80601f016020809104026020016040519081016040528092919081815260200182805461048090611b8d565b80156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b505050505081565b6000806104e0610f18565b6007546040516370a0823160e01b81526001600160a01b038581166004830152909116906370a082319060240160206040518083038186803b15801561052557600080fd5b505afa158015610539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055d91906118ae565b6008546040516370a0823160e01b81526001600160a01b038681166004830152909116906370a082319060240160206040518083038186803b1580156105a257600080fd5b505afa1580156105b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105da91906118ae565b91509150915091565b60008054600160b01b900467ffffffffffffffff166106006103a7565b106106525760405162461bcd60e51b815260206004820152601860248201527f4f6e6c792063616c6c61626c65207072652d657870697279000000000000000060448201526064015b60405180910390fd5b61065a610f18565b61066c6000805460ff60a01b19169055565b6040805160208082018352600254825282519081019092528382526106919190610f71565b516006549091506106ad906001600160a01b0316333084610fff565b6007546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401602060405180830381600087803b1580156106f957600080fd5b505af115801561070d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610731919061188e565b61073a57600080fd5b6008546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401602060405180830381600087803b15801561078657600080fd5b505af115801561079a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107be919061188e565b6107c757600080fd5b6040518290829033907f2b42f4b25222a5d447ca19dfca2afd1b8d32adfed550f7b87bf9569f6da70c0090600090a46107fe611070565b919050565b600054600160b01b900467ffffffffffffffff1661081f6103a7565b10156108695760405162461bcd60e51b81526020600482015260196024820152784f6e6c792063616c6c61626c6520706f73742d65787069727960381b6044820152606401610649565b60008054600160a81b900460ff16600281111561089657634e487b7160e01b600052602160045260246000fd5b146108e35760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374207374617465206973206e6f74204f70656e0000000000006044820152606401610649565b6108eb610f18565b6108fd6000805460ff60a01b19169055565b610905611085565b6000805460ff60a81b1916600160a81b17815560405133917f18600820405d6cf356e3556301762ca32395e72d8c81494fa344835c9da3633d91a2610948611070565b565b600b805461045490611b8d565b60008054600160b01b900467ffffffffffffffff166109746103a7565b10156109be5760405162461bcd60e51b81526020600482015260196024820152784f6e6c792063616c6c61626c6520706f73742d65787069727960381b6044820152606401610649565b6109c6610f18565b6109d86000805460ff60a01b19169055565b60008054600160a81b900460ff166002811115610a0557634e487b7160e01b600052602160045260246000fd5b1415610a485760405162461bcd60e51b8152602060048201526012602482015271155b995e1c1a5c99590818dbdb9d1c9858dd60721b6044820152606401610649565b6002600054600160a81b900460ff166002811115610a7657634e487b7160e01b600052602160045260246000fd5b14610b4557600054610a9890600160b01b900467ffffffffffffffff16611279565b6003819055600a54604051632da5236160e01b81526004810192909252610b2e916001600160a01b0390911690632da523619060240160206040518083038186803b158015610ae657600080fd5b505afa158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e91906118ae565b610b2860016113a4565b516113d9565b6004556000805460ff60a81b1916600160a91b1790555b60075460405163079cc67960e41b8152336004820152602481018590526001600160a01b03909116906379cc679090604401602060405180830381600087803b158015610b9157600080fd5b505af1158015610ba5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc9919061188e565b610bd257600080fd5b60085460405163079cc67960e41b8152336004820152602481018490526001600160a01b03909116906379cc679090604401602060405180830381600087803b158015610c1e57600080fd5b505af1158015610c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c56919061188e565b610c5f57600080fd5b604080516020808201835260045482528251808201845260025481528351918201909352858152600092610c9d9291610c97916113f1565b906113f1565b6000015190506000610cf1610ccc6040518060200160405280600454815250610cc660016113a4565b90611437565b604080516020808201835260025482528251908101909252878252610c9791906113f1565b519050610cfe8183611aff565b600654909350610d18906001600160a01b03163385611461565b604080518481526020810187905290810185905233907fe8fdc264e5a5640d893f125384c4e2c5afe2d9a04aef1129e643caaa72771cff9060600160405180910390a25050610d65611070565b92915050565b6000610d75610f18565b610d876000805460ff60a01b19169055565b60075460405163079cc67960e41b8152336004820152602481018490526001600160a01b03909116906379cc679090604401602060405180830381600087803b158015610dd357600080fd5b505af1158015610de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0b919061188e565b610e1457600080fd5b60085460405163079cc67960e41b8152336004820152602481018490526001600160a01b03909116906379cc679090604401602060405180830381600087803b158015610e6057600080fd5b505af1158015610e74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e98919061188e565b610ea157600080fd5b604080516020808201835260025482528251908101909252838252610ec691906113f1565b51600654909150610ee1906001600160a01b03163383611461565b6040518290829033907fd171fb179b26c49e23fe46eddd44d3048a1ad277b62144ac0725fbcf1dbf6d5290600090a46107fe611070565b600054600160a01b900460ff166109485760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610649565b6040805160208101909152600080825282518451610f8e91611496565b90506000610fa4670de0b6b3a764000083611b17565b90506000610fba83670de0b6b3a76400006114a2565b90508015610fe657604080516020810190915280610fd98460016114ae565b8152509350505050610d65565b6040518060200160405280838152509350505050610d65565b6040516001600160a01b038085166024830152831660448201526064810182905261106a9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526114ba565b50505050565b6000805460ff60a01b1916600160a01b179055565b600061108f61158c565b600c54909150156110b757600c546006546110b7916001600160a01b0390911690839061161b565b600554600054600654600c546040516311df92f160e01b81526001600160a01b03868116956311df92f19561110a959194600160b01b90910467ffffffffffffffff1693600b9390921691600401611a44565b602060405180830381600087803b15801561112457600080fd5b505af1158015611138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115c91906118ae565b50600554600054600d5460405163239e22ff60e11b81526001600160a01b0385169363473c45fe936111a8939192600160b01b90910467ffffffffffffffff1691600b91600401611a8a565b600060405180830381600087803b1580156111c257600080fd5b505af11580156111d6573d6000803e3d6000fd5b5050600554600054600e546040516356ad3aad60e11b81526001600160a01b038716955063ad5a755a94506112239392600160b01b900467ffffffffffffffff1691600b91600401611a8a565b602060405180830381600087803b15801561123d57600080fd5b505af1158015611251573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127591906118ae565b5050565b60008061128461158c565b600554604051635e2c665560e11b81529192506001600160a01b0383169163bc58ccaa916112bc913091908890600b906004016119e5565b60206040518083038186803b1580156112d457600080fd5b505afa1580156112e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130c919061188e565b61131557600080fd5b6005546040516353b5923960e01b81526000916001600160a01b038416916353b592399161134a918890600b90600401611a1c565b602060405180830381600087803b15801561136457600080fd5b505af1158015611378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139c91906118ae565b949350505050565b6040805160208101909152600081526040805160208101909152806113d184670de0b6b3a7640000611496565b905292915050565b60008183106113e857816113ea565b825b9392505050565b6040805160208101909152600081526040805160208101909152825184518291670de0b6b3a76400009161142491611496565b61142e9190611b17565b90529392505050565b604080516020810190915260008152604080516020810190915282518451829161142e919061173f565b6040516001600160a01b03831660248201526044810182905261149190849063a9059cbb60e01b90606401611033565b505050565b60006113ea8284611b2b565b60006113ea8284611bc8565b60006113ea8284611aff565b600061150f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661174b9092919063ffffffff16565b805190915015611491578080602001905181019061152d919061188e565b6114915760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610649565b6009546040516302abf57960e61b81526f4f7074696d69737469634f7261636c6560801b60048201526000916001600160a01b03169063aafd5e409060240160206040518083038186803b1580156115e357600080fd5b505afa1580156115f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d9190611872565b8015806116a45750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561166a57600080fd5b505afa15801561167e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a291906118ae565b155b61170f5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610649565b6040516001600160a01b03831660248201526044810182905261149190849063095ea7b360e01b90606401611033565b60006113ea8284611b4a565b606061139c848460008585843b6117a45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610649565b600080866001600160a01b031685876040516117c091906119c9565b60006040518083038185875af1925050503d80600081146117fd576040519150601f19603f3d011682016040523d82523d6000602084013e611802565b606091505b509150915061181282828661181d565b979650505050505050565b6060831561182c5750816113ea565b82511561183c5782518084602001fd5b8160405162461bcd60e51b81526004016106499190611ac4565b600060208284031215611867578081fd5b81356113ea81611c08565b600060208284031215611883578081fd5b81516113ea81611c08565b60006020828403121561189f578081fd5b815180151581146113ea578182fd5b6000602082840312156118bf578081fd5b5051919050565b6000602082840312156118d7578081fd5b5035919050565b600080604083850312156118f0578081fd5b50508035926020909101359150565b60008151808452611917816020860160208601611b61565b601f01601f19169290920160200192915050565b8054600090600181811c908083168061194557607f831692505b602080841082141561196557634e487b7160e01b86526022600452602486fd5b838852602088018280156119805760018114611991576119bc565b60ff198716825282820197506119bc565b60008981526020902060005b878110156119b65781548482015290860190840161199d565b83019850505b5050505050505092915050565b600082516119db818460208701611b61565b9190910192915050565b60018060a01b0385168152836020820152826040820152608060608201526000611a12608083018461192b565b9695505050505050565b838152826020820152606060408201526000611a3b606083018461192b565b95945050505050565b85815267ffffffffffffffff8516602082015260a060408201526000611a6d60a083018661192b565b6001600160a01b0394909416606083015250608001529392505050565b84815267ffffffffffffffff84166020820152608060408201526000611ab3608083018561192b565b905082606083015295945050505050565b6020815260006113ea60208301846118ff565b6020810160038310611af957634e487b7160e01b600052602160045260246000fd5b91905290565b60008219821115611b1257611b12611bdc565b500190565b600082611b2657611b26611bf2565b500490565b6000816000190483118215151615611b4557611b45611bdc565b500290565b600082821015611b5c57611b5c611bdc565b500390565b60005b83811015611b7c578181015183820152602001611b64565b8381111561106a5750506000910152565b600181811c90821680611ba157607f821691505b60208210811415611bc257634e487b7160e01b600052602260045260246000fd5b50919050565b600082611bd757611bd7611bf2565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b0381168114611c1d57600080fd5b5056fea26469706673582212207b2f77c970590108a37c228a767712029ca2f4748392a645f43a3ee0cec3c98764736f6c63430008040033a2646970667358221220c4cc4f402c20c05ff1846da8b95ff644b2d35e10fbbf529802a35589c8992d4264736f6c63430008040033";