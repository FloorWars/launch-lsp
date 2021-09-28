"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenFactory__factory = void 0;
const ethers_1 = require("ethers");
class TokenFactory__factory extends ethers_1.ContractFactory {
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
exports.TokenFactory__factory = TokenFactory__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "tokenName",
                type: "string",
            },
            {
                internalType: "string",
                name: "tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "tokenDecimals",
                type: "uint8",
            },
        ],
        name: "createToken",
        outputs: [
            {
                internalType: "contract ExpandedIERC20",
                name: "newToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506000805460ff191660011790556122458061002d6000396000f3fe60806040523480156200001157600080fd5b50600436106200002e5760003560e01c8063e8a0aed31462000033575b600080fd5b6200004a62000044366004620001f4565b62000066565b6040516001600160a01b03909116815260200160405180910390f35b60006200007262000143565b620000826000805460ff19169055565b6000868686868660405162000097906200019c565b620000a7959493929190620002ab565b604051809103906000f080158015620000c4573d6000803e3d6000fd5b506040516339e6401560e11b81523360048201529091506001600160a01b038216906373cc802a90602401600060405180830381600087803b1580156200010a57600080fd5b505af11580156200011f573d6000803e3d6000fd5b50505050809150506200013a6000805460ff19166001179055565b95945050505050565b60005460ff166200019a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640160405180910390fd5b565b611f2380620002ed83390190565b60008083601f840112620001bc578182fd5b50813567ffffffffffffffff811115620001d4578182fd5b602083019150836020828501011115620001ed57600080fd5b9250929050565b6000806000806000606086880312156200020c578081fd5b853567ffffffffffffffff8082111562000224578283fd5b6200023289838a01620001aa565b909750955060208801359150808211156200024b578283fd5b506200025a88828901620001aa565b909450925050604086013560ff8116811462000274578182fd5b809150509295509295909350565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b606081526000620002c160608301878962000282565b8281036020840152620002d681868862000282565b91505060ff83166040830152969550505050505056fe60806040523480156200001157600080fd5b5060405162001f2338038062001f238339810160408190526200003491620006e6565b82828282828160039080519060200190620000519291906200058d565b508051620000679060049060208401906200058d565b50506006805460ff191660ff8416179055506200008760008033620000fb565b620000a460015b6040805160008082526020820190925262000264565b620000b060026200008e565b50506006805461ff00191661010017905550620000cc620003c3565b620000dd6006805461ff0019169055565b620000f26006805461ff001916610100179055565b505050620007e2565b826000808281526005602052604090206001015460ff1660028111156200013257634e487b7160e01b600052602160045260246000fd5b14620001855760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064015b60405180910390fd5b60008481526005602052604090206001808201805460ff191682800217905550838155620001c360028201846200041e602090811b62000ccc17901c565b60008481526005602052604081206001015460ff166002811115620001f857634e487b7160e01b600052602160045260246000fd5b14156200025d5760405162461bcd60e51b815260206004820152603c602482015260008051602062001f0383398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c650000000060648201526084016200017c565b5050505050565b826000808281526005602052604090206001015460ff1660028111156200029b57634e487b7160e01b600052602160045260246000fd5b14620002ea5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000060448201526064016200017c565b600084815260056020908152604090912060018101805460ff191660021790558481559062000329906003830190859062000cd66200042e821b17901c565b60008481526005602052604081206001015460ff1660028111156200035e57634e487b7160e01b600052602160045260246000fd5b14156200025d5760405162461bcd60e51b8152602060048201526038602482015260008051602062001f0383398151915260448201527f20746f206d616e61676520612073686172656420726f6c65000000000000000060648201526084016200017c565b600654610100900460ff166200041c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016200017c565b565b6200042a82826200048f565b5050565b60005b81518110156200048a5762000475838383815181106200046157634e487b7160e01b600052603260045260246000fd5b60200260200101516200051060201b60201c565b806200048181620007a4565b91505062000431565b505050565b6001600160a01b038116620004f35760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b60648201526084016200017c565b81546001600160a01b0319166001600160a01b0391909116179055565b6001600160a01b038116620005685760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c650060448201526064016200017c565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b8280546200059b9062000767565b90600052602060002090601f016020900481019282620005bf57600085556200060a565b82601f10620005da57805160ff19168380011785556200060a565b828001600101855582156200060a579182015b828111156200060a578251825591602001919060010190620005ed565b50620006189291506200061c565b5090565b5b808211156200061857600081556001016200061d565b600082601f83011262000644578081fd5b81516001600160401b0380821115620006615762000661620007cc565b604051601f8301601f19908116603f011681019082821181831017156200068c576200068c620007cc565b81604052838152602092508683858801011115620006a8578485fd5b8491505b83821015620006cb5785820183015181830184015290820190620006ac565b83821115620006dc57848385830101525b9695505050505050565b600080600060608486031215620006fb578283fd5b83516001600160401b038082111562000712578485fd5b620007208783880162000633565b9450602086015191508082111562000736578384fd5b50620007458682870162000633565b925050604084015160ff811681146200075c578182fd5b809150509250925092565b600181811c908216806200077c57607f821691505b602082108114156200079e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415620007c557634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b61171180620007f26000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806373cc802a116100f9578063a9059cbb11610097578063ab3545e511610071578063ab3545e51461038c578063d97c05be146103b7578063dd62ed3e146103ca578063f44637ba1461040357600080fd5b8063a9059cbb14610353578063aa271e1a14610366578063aaa14ca31461037957600080fd5b80637cdc1cb9116100d35780637cdc1cb91461031257806395d89b4114610325578063983b2d561461032d578063a457c2d71461034057600080fd5b806373cc802a146102d957806374d0a676146102ec57806379cc6790146102ff57600080fd5b8063313ce5671161016657806342966c681161014057806342966c68146102775780634334614a1461028a5780636be7658b1461029d57806370a08231146102b057600080fd5b8063313ce5671461023c578063395093511461025157806340c10f191461026457600080fd5b806302846858146101ae57806306fdde03146101c3578063095ea7b3146101e157806318160ddd1461020457806323b872dd146102165780633092afd514610229575b600080fd5b6101c16101bc3660046113e1565b610416565b005b6101cb610451565b6040516101d891906114d2565b60405180910390f35b6101f46101ef36600461146f565b6104e3565b60405190151581526020016101d8565b6002545b6040519081526020016101d8565b6101f4610224366004611434565b6104fa565b6101c16102373660046113e1565b6105b0565b60065460405160ff90911681526020016101d8565b6101f461025f36600461146f565b6105d2565b6101f461027236600461146f565b610609565b6101c1610285366004611498565b610647565b6101f46102983660046113e1565b61067d565b6101c16102ab3660046114b0565b61069b565b6102086102be3660046113e1565b6001600160a01b031660009081526020819052604090205490565b6101c16102e73660046113e1565b61077f565b6101c16102fa3660046114b0565b6107a2565b6101f461030d36600461146f565b610886565b6101f46103203660046114b0565b6108ba565b6101cb61099d565b6101c161033b3660046113e1565b6109ac565b6101f461034e36600461146f565b6109d0565b6101f461036136600461146f565b610a61565b6101f46103743660046113e1565b610a6e565b6101c1610387366004611498565b610a82565b61039f61039a366004611498565b610b4c565b6040516001600160a01b0390911681526020016101d8565b6101c16103c53660046114b0565b610bc6565b6102086103d8366004611402565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101c16104113660046113e1565b610caa565b61041e610d2a565b61042e6006805461ff0019169055565b61043a60025b8261069b565b61044e6006805461ff001916610100179055565b50565b60606003805461046090611675565b80601f016020809104026020016040519081016040528092919081815260200182805461048c90611675565b80156104d95780601f106104ae576101008083540402835291602001916104d9565b820191906000526020600020905b8154815290600101906020018083116104bc57829003601f168201915b5050505050905090565b60006104f0338484610d83565b5060015b92915050565b6000610507848484610ea8565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105915760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105a585336105a0868561165e565b610d83565b506001949350505050565b6105b8610d2a565b6105c86006805461ff0019169055565b61043a6001610434565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104f09185906105a0908690611646565b6000600161061781336108ba565b6106335760405162461bcd60e51b8152600401610588906115c0565b61063d8484611080565b5060019392505050565b600261065381336108ba565b61066f5760405162461bcd60e51b8152600401610588906115c0565b610679338361115f565b5050565b6000610687610d2a565b61069360025b836108ba565b90505b919050565b81600260008281526005602052604090206001015460ff1660028111156106d257634e487b7160e01b600052602160045260246000fd5b146106ef5760405162461bcd60e51b815260040161058890611574565b600083815260056020526040902054839061070a90336108ba565b6107265760405162461bcd60e51b815260040161058890611602565b600084815260056020526040902061074190600301846112ae565b60405133906001600160a01b0385169086907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a450505050565b610787610d2a565b6107976006805461ff0019169055565b61043a600082610bc6565b81600260008281526005602052604090206001015460ff1660028111156107d957634e487b7160e01b600052602160045260246000fd5b146107f65760405162461bcd60e51b815260040161058890611574565b600083815260056020526040902054839061081190336108ba565b61082d5760405162461bcd60e51b815260040161058890611602565b600084815260056020526040902061084890600301846112d0565b60405133906001600160a01b0385169086907f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f90600090a450505050565b6000600261089481336108ba565b6108b05760405162461bcd60e51b8152600401610588906115c0565b61063d848461115f565b600082815260056020526040812060018082015460ff1660028111156108f057634e487b7160e01b600052602160045260246000fd5b14156109125760028101546001600160a01b038481169116145b9150506104f4565b6002600182015460ff16600281111561093b57634e487b7160e01b600052602160045260246000fd5b1415610964576001600160a01b038316600090815260038201602052604090205460ff1661090a565b60405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081c9bdb19525960921b6044820152606401610588565b60606004805461046090611675565b6109b4610d2a565b6109c46006805461ff0019169055565b61043a60015b826107a2565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610a525760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610588565b61063d33856105a0868561165e565b60006104f0338484610ea8565b6000610a78610d2a565b610693600161068d565b80600260008281526005602052604090206001015460ff166002811115610ab957634e487b7160e01b600052602160045260246000fd5b14610ad65760405162461bcd60e51b815260040161058890611574565b81610ae181336108ba565b610afd5760405162461bcd60e51b8152600401610588906115c0565b6000838152600560205260409020610b1890600301336112ae565b6040513390819085907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af90600090a4505050565b600081600160008281526005602052604090206001015460ff166002811115610b8557634e487b7160e01b600052602160045260246000fd5b14610ba25760405162461bcd60e51b815260040161058890611525565b6000838152600560205260409020600201546001600160a01b031691505b50919050565b81600160008281526005602052604090206001015460ff166002811115610bfd57634e487b7160e01b600052602160045260246000fd5b14610c1a5760405162461bcd60e51b815260040161058890611525565b6000838152600560205260409020548390610c3590336108ba565b610c515760405162461bcd60e51b815260040161058890611602565b6000848152600560205260409020610c6c906002018461134b565b60405133906001600160a01b0385169086907f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74690600090a450505050565b610cb2610d2a565b610cc26006805461ff0019169055565b61043a60026109ca565b610679828261134b565b60005b8151811015610d2557610d1383838381518110610d0657634e487b7160e01b600052603260045260246000fd5b60200260200101516112d0565b80610d1d816116aa565b915050610cd9565b505050565b600654610100900460ff16610d815760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610588565b565b6001600160a01b038316610de55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610588565b6001600160a01b038216610e465760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610588565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610f0c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610588565b6001600160a01b038216610f6e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610588565b6001600160a01b03831660009081526020819052604090205481811015610fe65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610588565b610ff0828261165e565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290611026908490611646565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161107291815260200190565b60405180910390a350505050565b6001600160a01b0382166110d65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610588565b80600260008282546110e89190611646565b90915550506001600160a01b03821660009081526020819052604081208054839290611115908490611646565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166111bf5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610588565b6001600160a01b038216600090815260208190526040902054818110156112335760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610588565b61123d828261165e565b6001600160a01b0384166000908152602081905260408120919091556002805484929061126b90849061165e565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610e9b565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166113265760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152606401610588565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b0381166113ad5760405162461bcd60e51b815260206004820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608401610588565b81546001600160a01b0319166001600160a01b0391909116179055565b80356001600160a01b038116811461069657600080fd5b6000602082840312156113f2578081fd5b6113fb826113ca565b9392505050565b60008060408385031215611414578081fd5b61141d836113ca565b915061142b602084016113ca565b90509250929050565b600080600060608486031215611448578081fd5b611451846113ca565b925061145f602085016113ca565b9150604084013590509250925092565b60008060408385031215611481578182fd5b61148a836113ca565b946020939093013593505050565b6000602082840312156114a9578081fd5b5035919050565b600080604083850312156114c2578182fd5b8235915061142b602084016113ca565b6000602080835283518082850152825b818110156114fe578581018301518582016040015282016114e2565b8181111561150f5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602f908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526e204578636c757369766520726f6c6560881b606082015260800190565b6020808252602c908201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460408201526b2053686172656420726f6c6560a01b606082015260800190565b60208082526022908201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6040820152616c6560f01b606082015260800190565b60208082526024908201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60408201526330b3b2b960e11b606082015260800190565b60008219821115611659576116596116c5565b500190565b600082821015611670576116706116c5565b500390565b600181811c9082168061168957607f821691505b60208210811415610bc057634e487b7160e01b600052602260045260246000fd5b60006000198214156116be576116be6116c5565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122079b9f810d528df0d90bd1f115a1c6003dd8c44f52ab5a2c5a9ccd6d8e78eb38464736f6c63430008040033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65a264697066735822122013bc8340f2d9a88b1a75b5a4b4873b60f6db703896145a30de819e0334dc7b0264736f6c63430008040033";
