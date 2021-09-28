"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Broker__factory = void 0;
const ethers_1 = require("ethers");
class UniswapV2Broker__factory extends ethers_1.ContractFactory {
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
exports.UniswapV2Broker__factory = UniswapV2Broker__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "bool",
                name: "tradingAsEOA",
                type: "bool",
            },
            {
                internalType: "address",
                name: "uniswapRouter",
                type: "address",
            },
            {
                internalType: "address",
                name: "uniswapFactory",
                type: "address",
            },
            {
                internalType: "address[2]",
                name: "swappedTokens",
                type: "address[2]",
            },
            {
                internalType: "uint256[2]",
                name: "truePriceTokens",
                type: "uint256[2]",
            },
            {
                internalType: "uint256[2]",
                name: "maxSpendTokens",
                type: "uint256[2]",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapToPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "truePriceTokenA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "truePriceTokenB",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserveA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserveB",
                type: "uint256",
            },
        ],
        name: "computeTradeToMoveMarket",
        outputs: [
            {
                internalType: "bool",
                name: "aToB",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
        ],
        name: "getReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "reserveA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserveB",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611117806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e3ed3f9146100465780633274946114610075578063d046961a1461009d575b600080fd5b610059610054366004610f02565b6100b2565b6040805192151583526020830191909152015b60405180910390f35b610088610083366004610ccf565b610141565b6040805192835260208301919091520161006c565b6100b06100ab366004610dd5565b61021a565b005b600080856100c18587866104f7565b10915060006100d08585610673565b905060006100fe6100f983866100e657896100e8565b8a5b876100f3578b6104f7565b8a6104f7565b61067f565b905060008461010d578561010f565b865b9050808210156101285760008094509450505050610138565b61013282826107fd565b93505050505b94509492505050565b60008060006101508585610809565b509050600080610161888888610901565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561019957600080fd5b505afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610eb4565b506001600160701b031691506001600160701b03169150826001600160a01b0316876001600160a01b03161461020857808261020b565b81815b90999098509650505050505050565b835187901580159061022f5750602085015115155b61027a5760405162461bcd60e51b815260206004820152601760248201527653776170546f50726963653a205a45524f5f505249434560481b60448201526064015b60405180910390fd5b835115158061028c5750602084015115155b6102d25760405162461bcd60e51b815260206004820152601760248201527614ddd85c151bd41c9a58d94e8816915493d7d4d4115391604a1b6044820152606401610271565b60008080806102ef8b8b8360200201518c60016020020151610141565b8a5160208c01519294509092506103079184846100b2565b909450925050508061035b5760405162461bcd60e51b815260206004820152601b60248201527f53776170546f50726963653a205a45524f5f414d4f554e545f494e00000000006044820152606401610271565b60008261036c57602087015161036f565b86515b90508082111561037d578091505b60008361038e5760208a0151610391565b89515b90506000846103a1578a516103a7565b60208b01515b90506103b48287866109da565b8d156103c6576103c682333087610b09565b604080516002808252606082018352600092602083019080368337019050509050828160008151811061040957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050818160018151811061044b57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526040516338ed173960e01b8152908816906338ed17399061048f90889060009086908f908f90600401610f6c565b600060405180830381600087803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104e59190810190610d11565b50505050505050505050505050505050565b600080806000198587098587029250828110838203039150508060001415610531576000841161052657600080fd5b50829004905061066c565b80841161053d57600080fd5b600084868809808403938111909203919050600061055d86196001611036565b861695869004959384900493600081900304600101905061057e818461106e565b90931792600061058f87600361106e565b600218905061059e818861106e565b6105a990600261108d565b6105b3908261106e565b90506105bf818861106e565b6105ca90600261108d565b6105d4908261106e565b90506105e0818861106e565b6105eb90600261108d565b6105f5908261106e565b9050610601818861106e565b61060c90600261108d565b610616908261106e565b9050610622818861106e565b61062d90600261108d565b610637908261106e565b9050610643818861106e565b61064e90600261108d565b610658908261106e565b9050610664818661106e565b955050505050505b9392505050565b600061066c828461106e565b60008161068e57506000919050565b816001600160801b82106106a75760809190911c9060401b5b6801000000000000000082106106c25760409190911c9060201b5b64010000000082106106d95760209190911c9060101b5b6201000082106106ee5760109190911c9060081b5b61010082106107025760089190911c9060041b5b601082106107155760049190911c9060021b5b600882106107215760011b5b600161072d828661104e565b6107379083611036565b901c90506001610747828661104e565b6107519083611036565b901c90506001610761828661104e565b61076b9083611036565b901c9050600161077b828661104e565b6107859083611036565b901c90506001610795828661104e565b61079f9083611036565b901c905060016107af828661104e565b6107b99083611036565b901c905060016107c9828661104e565b6107d39083611036565b901c905060006107e3828661104e565b90508082106107f257806107f4565b815b95945050505050565b600061066c828461108d565b600080826001600160a01b0316846001600160a01b0316141561087c5760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b6064820152608401610271565b826001600160a01b0316846001600160a01b03161061089c57828461089f565b83835b90925090506001600160a01b0382166108fa5760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f4144445245535300006044820152606401610271565b9250929050565b60008060006109108585610809565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016109b89291906001600160f81b0319815260609290921b6bffffffffffffffffffffffff1916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1790529151600092839290871691610a369190610f33565b6000604051808303816000865af19150503d8060008114610a73576040519150601f19603f3d011682016040523d82523d6000602084013e610a78565b606091505b5091509150818015610aa2575080511580610aa2575080806020019051810190610aa29190610db9565b610b025760405162461bcd60e51b815260206004820152602b60248201527f5472616e7366657248656c7065723a3a73616665417070726f76653a2061707060448201526a1c9bdd994819985a5b195960aa1b6064820152608401610271565b5050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290881691610b6d9190610f33565b6000604051808303816000865af19150503d8060008114610baa576040519150601f19603f3d011682016040523d82523d6000602084013e610baf565b606091505b5091509150818015610bd9575080511580610bd9575080806020019051810190610bd99190610db9565b610c3f5760405162461bcd60e51b815260206004820152603160248201527f5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472604482015270185b9cd9995c919c9bdb4819985a5b1959607a1b6064820152608401610271565b505050505050565b80356001600160a01b0381168114610c5e57600080fd5b919050565b600082601f830112610c73578081fd5b610c7b610fdc565b808385604086011115610c8c578384fd5b835b6002811015610cad578135845260209384019390910190600101610c8e565b509095945050505050565b80516001600160701b0381168114610c5e57600080fd5b600080600060608486031215610ce3578283fd5b610cec84610c47565b9250610cfa60208501610c47565b9150610d0860408501610c47565b90509250925092565b60006020808385031215610d23578182fd5b825167ffffffffffffffff80821115610d3a578384fd5b818501915085601f830112610d4d578384fd5b815181811115610d5f57610d5f6110ba565b8060051b9150610d70848301611005565b8181528481019084860184860187018a1015610d8a578788fd5b8795505b83861015610dac578051835260019590950194918601918601610d8e565b5098975050505050505050565b600060208284031215610dca578081fd5b815161066c816110d0565b600080600080600080600080610160898b031215610df1578384fd5b8835610dfc816110d0565b97506020610e0b8a8201610c47565b9750610e1960408b01610c47565b96508a607f8b0112610e29578485fd5b610e31610fdc565b8060608c0160a08d018e811115610e46578889fd5b885b6002811015610e6c57610e5a83610c47565b85529385019391850191600101610e48565b50829950610e7a8f82610c63565b98505050505050610e8e8a60e08b01610c63565b9250610e9d6101208a01610c47565b915061014089013590509295985092959890939650565b600080600060608486031215610ec8578283fd5b610ed184610cb8565b9250610edf60208501610cb8565b9150604084015163ffffffff81168114610ef7578182fd5b809150509250925092565b60008060008060808587031215610f17578384fd5b5050823594602084013594506040840135936060013592509050565b60008251815b81811015610f535760208186018101518583015201610f39565b81811115610f615782828501525b509190910192915050565b600060a082018783526020878185015260a0604085015281875180845260c0860191508289019350845b81811015610fbb5784516001600160a01b031683529383019391830191600101610f96565b50506001600160a01b03969096166060850152505050608001529392505050565b6040805190810167ffffffffffffffff81118282101715610fff57610fff6110ba565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561102e5761102e6110ba565b604052919050565b60008219821115611049576110496110a4565b500190565b60008261106957634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611088576110886110a4565b500290565b60008282101561109f5761109f6110a4565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146110de57600080fd5b5056fea2646970667358221220308e6a9f14a7ae58b607c1655889fa13e65b41c06d08b678c5fd156138f2804a64736f6c63430008040033";
