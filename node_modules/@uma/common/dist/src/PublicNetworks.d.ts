export const PublicNetworks: {
    1: {
        name: string;
        ethFaucet: null;
        etherscan: string;
        daiAddress: string;
        wethAddress: string;
    };
    3: {
        name: string;
        ethFaucet: string;
        etherscan: string;
        daiAddress: string;
        wethAddress: string;
    };
    4: {
        name: string;
        ethFaucet: string;
        etherscan: string;
        daiAddress: string;
        wethAddress: string;
    };
    5: {
        name: string;
        etherscan: string;
    };
    42: {
        name: string;
        ethFaucet: string;
        etherscan: string;
        daiAddress: string;
        wethAddress: string;
    };
    137: {
        name: string;
        etherscan: string;
        customTruffleConfig: {
            confirmations: number;
            timeoutBlocks: number;
        };
    };
    80001: {
        name: string;
        etherscan: string;
        customTruffleConfig: {
            confirmations: number;
            timeoutBlocks: number;
        };
    };
};
export function getBridgeChainId(netId: any): any;
