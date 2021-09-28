"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigStoreInterface__factory = void 0;
const ethers_1 = require("ethers");
class ConfigStoreInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ConfigStoreInterface__factory = ConfigStoreInterface__factory;
const _abi = [
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
];
