"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialProductLibrary__factory = void 0;
const ethers_1 = require("ethers");
class FinancialProductLibrary__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FinancialProductLibrary__factory = FinancialProductLibrary__factory;
const _abi = [
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
                name: "oraclePrice",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "requestTime",
                type: "uint256",
            },
        ],
        name: "transformPrice",
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
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "oraclePrice",
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
                name: "collateralRequirement",
                type: "tuple",
            },
        ],
        name: "transformCollateralRequirement",
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
                internalType: "bytes32",
                name: "priceIdentifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "requestTime",
                type: "uint256",
            },
        ],
        name: "transformPriceIdentifier",
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
];
