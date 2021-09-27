"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findContractVersion = exports.getTruffleContract = exports.getAddress = exports.getAbi = exports.EthersContracts = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const common_1 = require("@uma/common");
const FindContractVersion_1 = require("./src/FindContractVersion");
Object.defineProperty(exports, "findContractVersion", { enumerable: true, get: function () { return FindContractVersion_1.findContractVersion; } });
const truffleContract = require("@truffle/contract");
exports.EthersContracts = __importStar(require("./contract-types/ethers"));
/**
 * @notice Gets the directory for version of core specified by an input version string.
 * @param {String} version Version string in the form of x.y.z.
 */
const getDirectoryForVersion = (version) => {
    // Note: this establishes a convention where any previous core version that is pulled in here must be aliased in the
    // package.json file as follows:
    // "@uma/core-x-y-z": "npm:@uma/core@x.y.z"
    // This forces yarn to pull the package @uma/core with version x.y.z into a local package name/folder with name
    // @uma/core-x-y-z.
    // To reiterate: any version passed in here must be listed in the package.json.
    const packageName = `@uma/core-${version.split(".").join("-")}`;
    return path_1.default.dirname(require.resolve(`${packageName}/package.json`));
};
/**
 * @notice Gets the truffle artifact for an UMA contract.
 * @param {String} contractName Name of the UMA contract whose artifact object will be returned.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getArtifact = (contractName, version = "latest") => {
    const contractDirectory = version === "latest" ? __dirname + "/.." : getDirectoryForVersion(version);
    const filePath = path_1.default.join(contractDirectory, "build", "contracts", `${contractName}.json`);
    if (!fs_1.default.existsSync(filePath)) {
        throw new Error(`No contract artifact found at ${filePath}`);
    }
    return JSON.parse(fs_1.default.readFileSync(filePath).toString());
};
/**
 * @notice Gets the abi for an UMA contract.
 * @param {String} contractName Name of the UMA contract whose abi will be returned.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getAbiProd = (contractName, version = "latest") => {
    const artifact = getArtifact(contractName, version);
    return artifact.abi;
};
/**
 * @notice Gets the deployed address for an UMA contract.
 * @param {String} contractName Name of the UMA contract whose address will be returned.
 * @param {Integer} networkId Network ID of the network where that contract is deployed.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getAddressProd = (contractName, networkId, version = "latest") => {
    const artifact = getArtifact(contractName, version);
    if (!artifact.networks[networkId]) {
        return null;
        // For now we will return null to not break upstream tests in some edge cases, like the serverless bots.
        // throw new Error(`No deployment of ${contractName} found for network ${networkId}`);
    }
    return artifact.networks[networkId].address;
};
/**
 * @notice Creates a new truffle contract instance based on an existing web3 instance (using its provider).
 * If a web3 instance is not provided, this function will use getWeb3() to attempt to create one.
 * @param {String} contractName Name of the UMA contract to be instantiated.
 * @param {Object} [web3] Custom web3 instance whose provider should be injected into the truffle contract.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getTruffleContractProd = (contractName, web3, version = "latest") => {
    // If there is no web3, use getWeb3() to retrieve one.
    const resolvedWeb3 = web3 || common_1.getWeb3();
    const artifact = getArtifact(contractName, version);
    const Contract = truffleContract(artifact);
    Contract.setProvider(resolvedWeb3.currentProvider);
    return Contract;
};
/**
 * @notice Creates a new truffle contract instance using artifacts. This method will automatically be exported instead
 * of the above method in the case that this is being used in a truffle test context.
 * @param {String} contractName Name of the UMA contract to be instantiated.
 * @param {Object} [web3] web3 object, only used in the case that version != latest.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getTruffleContractTest = (contractName, web3, version = "latest") => {
    return version === "latest"
        ? artifacts.require(contractName)
        : getTruffleContractProd(contractName, web3, version);
};
/**
 * @notice Gets the contract address. This method will automatically be exported instead of getAdress in the case that
 * this is being used in a truffle test context.
 * @param {String} contractName Name of the UMA contract whose address is to be retrieved.
 * @param {Integer} networkId  Network ID of the network where that contract is deployed.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getAddressTest = (contractName, networkId, version = "latest") => {
    const truffleContract = getTruffleContractTest(contractName, undefined, version);
    const { _provisioner } = artifacts;
    if (truffleContract.networks[networkId]) {
        return truffleContract.networks[networkId].address;
    }
    else if (_provisioner?._deploymentAddresses[contractName] && _provisioner?._networkConfig.chainId === networkId) {
        // In the production hardhat case, there is no networks object, so we fall back to hardhat's global list of deployed addresses as long as hardhat's network id matches the one passed in.
        // Note: this is a bit hacky because it depends on internal hardhat details.
        return _provisioner._deploymentAddresses[contractName];
    }
    else if (hardhatTestingAddresses[contractName]) {
        // If running tests in hardhat, check if there is a testing address set.
        return hardhatTestingAddresses[contractName];
    }
    else {
        throw new Error(`No address found for contract ${contractName} on network ${networkId}`);
    }
};
/**
 * @notice Gets the contract abi. This method will automatically be exported instead of getAbi() in the case that
 * this is being used in a truffle test context.
 * @param {String} contractName Name of the UMA contract whose abi is to be retrieved.
 * @param {String} [version] version identifier x.y.z for the contract. Defaults to "latest".
 */
const getAbiTest = (contractName, version = "latest") => {
    const truffleContract = getTruffleContractTest(contractName, undefined, version);
    return truffleContract.abi;
};
const globalArtifactsExists = Boolean(global.artifacts);
const getAbi = globalArtifactsExists ? getAbiTest : getAbiProd;
exports.getAbi = getAbi;
const getAddress = globalArtifactsExists ? getAddressTest : getAddressProd;
exports.getAddress = getAddress;
const getTruffleContract = globalArtifactsExists ? getTruffleContractTest : getTruffleContractProd;
exports.getTruffleContract = getTruffleContract;
