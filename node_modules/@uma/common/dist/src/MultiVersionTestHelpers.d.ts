/**
 * Used in conjunction with versionedIt within tests, this method will return true if the currentTestIterationVersion
 * is part of the SUPPORTED_CONTRACT_VERSIONS and supportedVersions (or is any), else returns false.
 * @param {Object} supportedVersions array of supported contract types & versions for a given test.
 * @param {Object} SUPPORTED_CONTRACT_VERSIONS array of supported contract types & versions for all tests within a test file.
 * @param {Object} currentTestIterationVersion object containing the current contract type & version for the current test.
 * @returns {bool} true of the current test iteration version is part of & supportedVersions & SUPPORTED_CONTRACT_VERSIONS
 * or any, false otherwise.
 */
export function runTestForVersion(supportedVersions: Object, SUPPORTED_CONTRACT_VERSIONS: Object, currentTestIterationVersion: Object): any;
/**
 * Used in unit tests that test multiple smart contract versions at the same time, this method will create constructor
 * parameters in accordance with the contract version and execution context.
 * @param {Object} contractVersion object containing the contractVersion and Type to be used with the constructor params
 * @param {Object} contextObjects object containing nested objects which provide context on the creation of the constructor
 * params. Note each key type defined in the requiredContextObjects must be provided to correctly use this method.
 * @param {Object} overrideConstructorParams optional override for the constructor params generated.
 * @returns {Object} version compatible constructor parameters.
 */
export function createConstructorParamsForContractVersion(contractVersion: Object, contextObjects: Object, overrideConstructorParams?: Object): Object;
export const SUPPORTED_CONTRACT_VERSIONS: {
    contractType: string;
    contractVersion: string;
}[];
export const TESTED_CONTRACT_VERSIONS: {
    contractType: string;
    contractVersion: string;
}[];
