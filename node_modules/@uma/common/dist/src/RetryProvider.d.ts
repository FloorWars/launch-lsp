export class RetryProvider {
    /**
     * @notice Constructs new retry provider.
     * @param {Array} config config object:
     *   [
     *      {
     *        retries: 3,
     *        delay: 1
     *        url: https://mainnet.infura.io/v3/ACCOUNT_ID,
     *        options: {
     *          timeout: 15000
     *        }
     *      },
     *      {
     *        retries: 5,
     *        delay: 1,
     *        url: ws://99.999.99.99
     *      }
     *   ]
     */
    constructor(configs: any);
    providerCaches: any;
    send(payload: any, callback: any): void;
    disconnect(...all: any[]): void;
    supportsSubscriptions(): boolean;
    _constructOrGetProvider(index: any): any;
    _runRetry(fn: any, providerIndex?: number, retryIndex?: number): any;
}
