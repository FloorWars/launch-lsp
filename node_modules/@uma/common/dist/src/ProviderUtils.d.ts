/**
 * @notice Gets a web3 instance based on the network argument using the truffle config in this package.
 * This method will be subbed in when called in a truffle test context.
 */
declare function getWeb3Test(): any;
/**
 * @notice Gets a web3 instance based on the network argument using the truffle config in this package.
 * Use this for compatibility for running with or without truffle.
 * @example
 *  If a node app uses getWeb3() and you want to load network 1 with a default wallet For full list of potential network
 * names see common/src/TruffleConfig node app --network=mainnet_mnemonic
 *
 * @notice You can also specify environment variables INFURA_API_KEY, CUSTOM_NODE_URL and CUSTOM_LOCAL_NODE_PORT.
 * If not provided there are defaults which load a hardcoded infura key. Default port is 9545.
 *
 * @notice a parameterizedNetwork name can also be provided. This enables you to use the library without needing to define
 * a `--network` argument. Useful in serverless or when running node scripts.
 *
 */
export function getWeb3(parameterizedNetwork?: string): any;
export var getWeb3: typeof getWeb3;
/**
 * @notice Gets a web3 instance based on the network argument using the truffle config in this package.
 * Use this for compatibility for running with or without truffle.
 * @example
 *  If a node app uses getWeb3() and you want to load network 1 with a default wallet For full list of potential network
 * names see common/src/TruffleConfig node app --network=mainnet_mnemonic
 *
 * @notice You can also specify environment variables INFURA_API_KEY, CUSTOM_NODE_URL and CUSTOM_LOCAL_NODE_PORT.
 * If not provided there are defaults which load a hardcoded infura key. Default port is 9545.
 *
 * @notice a parameterizedNetwork name can also be provided. This enables you to use the library without needing to define
 * a `--network` argument. Useful in serverless or when running node scripts.
 *
 */
export function getWeb3(parameterizedNetwork?: string): any;
export { getWeb3Test as getWeb3 };
