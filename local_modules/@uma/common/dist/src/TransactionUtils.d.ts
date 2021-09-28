/**
 * Simulate transaction via .call() and then .send() and return receipt. If an error is thrown, return the error and add
 * a flag denoting whether it was sent on the .call() or the .send(). Enables multiple EOAs to be used when sending the
 * transaction, cycling if a lower EOA index has a pending transaction.
 * @notice Uses the ynatm package to retry the transaction with increasing gas price.
 * @param {*Object} web3.js object for making queries and accessing Ethereum related methods.
 * @param {*Object} transaction Transaction to call `.call()` and subsequently `.send()` on from `senderAccount`.
 * @param {*Object} config transaction config, e.g. { gasPrice, from }, passed to web3 transaction.
 * @return Error and type of error (originating from `.call()` or `.send()`) or transaction receipt and return value.
 */
export function runTransaction({ web3, transaction, transactionConfig, availableAccounts }: any): Promise<{
    receipt: any;
    returnValue: any;
    transactionConfig: any;
}>;
/**
 * Blocking code until a specific block number is mined. Will re-fetch the current block number every 500ms. Useful when
 * using methods called on contracts directly after state changes. Max blocking time should be ~ 15 seconds.
 * @param {Object} web3 Provider from Truffle/node to connect to Ethereum network.
 * @param {number} blockerBlockNumber block execution until this block number is mined.
 */
export function blockUntilBlockMined(web3: Object, blockerBlockNumber: number, delay?: number): Promise<void>;
/**
 * Checks if an account has a pending transaction.
 * @param {*Object} web3.js object for making queries and accessing Ethereum related methods.
 * @param {*string} account account to check.
 * @return Bool true if the account has pending transaction and false if no pending transaction.
 */
export function accountHasPendingTransactions(web3: any, account: any): Promise<boolean>;
