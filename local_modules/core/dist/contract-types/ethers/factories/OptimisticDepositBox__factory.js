"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimisticDepositBox__factory = void 0;
const ethers_1 = require("ethers");
class OptimisticDepositBox__factory extends ethers_1.ContractFactory {
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
exports.OptimisticDepositBox__factory = OptimisticDepositBox__factory;
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
        name: "EndedOptimisticDepositBox",
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
        name: "NewOptimisticDepositBox",
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
                name: "withdrawalRequestTimestamp",
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
                name: "withdrawalRequestTimestamp",
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
                name: "withdrawalRequestTimestamp",
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
        name: "totalOptimisticDepositBoxCollateral",
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
                name: "collateralAmount",
                type: "uint256",
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
                internalType: "uint256",
                name: "denominatedCollateralAmount",
                type: "uint256",
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
                internalType: "uint256",
                name: "amountWithdrawn",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620014943803806200149483398101604081905262000034916200041b565b600080546001600160a81b0319166001600160a01b03831617600160a01b1790556200005f62000285565b620000726000805460ff60a01b19169055565b600380546001600160a01b0319166001600160a01b03851617905562000097620002e2565b6001600160a01b03166390978d1b836040518263ffffffff1660e01b8152600401620000c591815260200190565b60206040518083038186803b158015620000de57600080fd5b505afa158015620000f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200011991906200046e565b6200016b5760405162461bcd60e51b815260206004820152601c60248201527f556e737570706f72746564207072696365206964656e7469666965720000000060448201526064015b60405180910390fd5b6200017562000388565b604051631d1d5b3960e11b81526001600160a01b0386811660048301529190911690633a3ab6729060240160206040518083038186803b158015620001b957600080fd5b505afa158015620001ce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001f491906200046e565b620002425760405162461bcd60e51b815260206004820152601b60248201527f556e737570706f7274656420636f6c6c61746572616c20747970650000000000604482015260640162000162565b600480546001600160a01b0319166001600160a01b03861617905560028290556200027b6000805460ff60a01b1916600160a01b179055565b5050505062000490565b600054600160a01b900460ff16620002e05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640162000162565b565b6003546040516302abf57960e61b81527f4964656e74696669657257686974656c6973740000000000000000000000000060048201526000916001600160a01b03169063aafd5e40906024015b60206040518083038186803b1580156200034857600080fd5b505afa1580156200035d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003839190620003f7565b905090565b6003546040516302abf57960e61b81527f436f6c6c61746572616c57686974656c6973740000000000000000000000000060048201526000916001600160a01b03169063aafd5e40906024016200032f565b80516001600160a01b0381168114620003f257600080fd5b919050565b60006020828403121562000409578081fd5b6200041482620003da565b9392505050565b6000806000806080858703121562000431578283fd5b6200043c85620003da565b93506200044c60208601620003da565b9250604085015191506200046360608601620003da565b905092959194509250565b60006020828403121562000480578081fd5b8151801515811462000414578182fd5b610ff480620004a06000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639b56d6c9116100665780639b56d6c9146101195780639ee679e81461012c578063b6b55f251461013f578063dfddabaa14610152578063fa45aa001461015b57600080fd5b80630de15fd9146100a35780631c39c38d146100d357806322611280146100e657806322f8e566146100f057806329cb924d14610103575b600080fd5b6004546100b6906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546100b6906001600160a01b031681565b6100ee610163565b005b6100ee6100fe366004610e92565b61022d565b61010b6102a3565b6040519081526020016100ca565b61010b610127366004610e22565b610346565b6100ee61013a366004610e92565b61036f565b6100ee61014d366004610e92565b61044e565b61010b60055481565b61010b61056d565b61016b610712565b61017d6000805460ff60a01b19169055565b336000908152600160208190526040909120908101546101dc5760405162461bcd60e51b8152602060048201526015602482015274139bc81c195b991a5b99c81dda5d1a191c985dd85b605a1b60448201526064015b60405180910390fd5b8054600182015460405190815233907fb158ea6c33db5aec992a08be94850f984ed987f3d524e5ec7d0662b689093b149060200160405180910390a3600080825560018201555061022b61076b565b565b6000546001600160a01b031661024257600080fd5b60005460405163117c72b360e11b8152600481018390526001600160a01b03909116906322f8e56690602401600060405180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b5050505050565b600080546001600160a01b03161561033e5760008054906101000a90046001600160a01b03166001600160a01b03166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030157600080fd5b505afa158015610315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190610e7a565b905090565b504290565b90565b6000610350610712565b506001600160a01b031660009081526001602052604090206002015490565b3361037981610780565b610381610712565b6103936000805460ff60a01b19169055565b336000908152600160205260409020826103eb5760405162461bcd60e51b8152602060048201526019602482015278125b9d985b1a590818dbdb1b185d195c985b08185b5bdd5b9d603a1b60448201526064016101d3565b8281556103f66102a3565b60018201819055604051908152839033907fadf0d81321571e1d83f52cfa9faf7add412d39431677ee21583f0d8998a9c8389060200160405180910390a361044181600101546107df565b5061044a61076b565b5050565b610456610712565b6104686000805460ff60a01b19169055565b600081116104b45760405162461bcd60e51b8152602060048201526019602482015278125b9d985b1a590818dbdb1b185d195c985b08185b5bdd5b9d603a1b60448201526064016101d3565b33600090815260016020526040902060028101546104f85760405133907f5b4f05768e926839c662b50d15b54a8dc09e7bcecdc5555797b36befc536be7990600090a25b60028101546105079083610896565b60028201556005546105199083610896565b600555604051829033907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90600090a3600454610561906001600160a01b03163330856108a9565b5061056a61076b565b50565b6000610577610712565b6105896000805460ff60a01b19169055565b33600090815260016020819052604090912090810154158015906105b857506105b06102a3565b816001015411155b6106045760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642077697468647261772072657175657374000000000000000060448201526064016101d3565b6000610613826001015461091a565b604080516020808201835283825282519081019092528454825291925060009161063d9190610ab0565b516002840154909150811061067e5750600282015460405133907ffaef2b8b7c70f0da0a2ba1eb9e2b903a20a3b6004f0199a097e39be70119f5a890600090a25b600283015461068d9082610af5565b600284015560055461069f9082610af5565b6005556001830154604080518481526020810192909252829133917f1489278b1433363140f0068698af68fad66f0f617b6cabe5710540b57397de42910160405180910390a360008084556001840155600454610706906001600160a01b03163383610b01565b9250505061034361076b565b600054600160a01b900460ff1661022b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016101d3565b6000805460ff60a01b1916600160a01b179055565b6001600160a01b038116600090815260016020819052604090912001541561056a5760405162461bcd60e51b815260206004820152601260248201527114195b991a5b99c81dda5d1a191c985dd85b60721b60448201526064016101d3565b60006107e9610b31565b600254600480546040516311df92f160e01b8152918201929092526024810185905260a06044820152600060a482018190526001600160a01b03928316606483015260848201529192508216906311df92f19060c401602060405180830381600087803b15801561085957600080fd5b505af115801561086d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108919190610e7a565b505050565b60006108a28284610ef9565b9392505050565b6040516001600160a01b03808516602483015283166044820152606481018290526109149085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610bc0565b50505050565b600080610925610b31565b600254604051635e2c665560e11b815230600482015260248101919091526044810185905260806064820152600060848201529091506001600160a01b0382169063bc58ccaa9060a40160206040518083038186803b15801561098757600080fd5b505afa15801561099b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bf9190610e5a565b610a055760405162461bcd60e51b8152602060048201526017602482015276556e7265736f6c766564206f7261636c6520707269636560481b60448201526064016101d3565b6002546040516353b5923960e01b815260048101919091526024810184905260606044820152600060648201819052906001600160a01b038316906353b5923990608401602060405180830381600087803b158015610a6357600080fd5b505af1158015610a77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9b9190610e7a565b905060008112156108a2575060009392505050565b6040805160208101909152600081526040805160208101909152825184518291610aec91610ae690670de0b6b3a7640000610c92565b90610c9e565b90529392505050565b60006108a28284610f50565b6040516001600160a01b03831660248201526044810182905261089190849063a9059cbb60e01b906064016108dd565b6003546040516302abf57960e61b81526f4f7074696d69737469634f7261636c6560801b60048201526000916001600160a01b03169063aafd5e409060240160206040518083038186803b158015610b8857600080fd5b505afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190610e3e565b6000610c15826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610caa9092919063ffffffff16565b8051909150156108915780806020019051810190610c339190610e5a565b6108915760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101d3565b60006108a28284610f31565b60006108a28284610f11565b6060610cb98484600085610cc1565b949350505050565b606082471015610d225760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101d3565b843b610d705760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101d3565b600080866001600160a01b03168587604051610d8c9190610eaa565b60006040518083038185875af1925050503d8060008114610dc9576040519150601f19603f3d011682016040523d82523d6000602084013e610dce565b606091505b5091509150610dde828286610de9565b979650505050505050565b60608315610df85750816108a2565b825115610e085782518084602001fd5b8160405162461bcd60e51b81526004016101d39190610ec6565b600060208284031215610e33578081fd5b81356108a281610fa9565b600060208284031215610e4f578081fd5b81516108a281610fa9565b600060208284031215610e6b578081fd5b815180151581146108a2578182fd5b600060208284031215610e8b578081fd5b5051919050565b600060208284031215610ea3578081fd5b5035919050565b60008251610ebc818460208701610f67565b9190910192915050565b6020815260008251806020840152610ee5816040850160208701610f67565b601f01601f19169190910160400192915050565b60008219821115610f0c57610f0c610f93565b500190565b600082610f2c57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f4b57610f4b610f93565b500290565b600082821015610f6257610f62610f93565b500390565b60005b83811015610f82578181015183820152602001610f6a565b838111156109145750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461056a57600080fdfea2646970667358221220d2a8047ec5785c657273cd7da3b85a4b9800897a32d40259eb17dcf9f6b8188d64736f6c63430008040033";
