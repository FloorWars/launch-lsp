/**
 * This is a hack to handle reverts for view/pure functions that don't actually revert on public networks.
 * See https://forum.openzeppelin.com/t/require-in-view-pure-functions-dont-revert-on-public-networks/1211 for more
 * info.
 * @param {Object} result Return value from calling a contract's view-only method.
 * @return null if the call reverted or the view method's result.
 */
export function revertWrapper(result: Object): Object | null;
/**
 * create a truffle contract from a json object, usually read in from an artifact.
 * @param {*} contractJsonObject json object representing a contract.
 * @param {Object} web3 instance. In unit tests this is globally accessable but when used in production needs injection.
 * @returns truffle contract instance
 */
export function createContractObjectFromJson(contractJsonObject: any, _web3?: any): any;
/**
 * Helper to enable enables library linking on artifacts that were not compiled within this repo, such as artifacts
 * produced by an external project. Can also be useful if the artifact was compiled using ethers.
 * @param {object} artifact representing the compiled contract instance.
 * @param {string} libraryName to be found and replaced within the artifact.
 * @returns
 */
export function replaceLibraryBindingReferenceInArtitifact(artifact: object, libraryName: string): any;
