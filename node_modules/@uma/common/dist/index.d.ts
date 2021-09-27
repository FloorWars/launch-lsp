declare const _exports: {
    getTickFromPrice: typeof import("./src/UniswapV3Helpers").getTickFromPrice;
    encodePriceSqrt: typeof import("./src/UniswapV3Helpers").encodePriceSqrt;
    decodePriceSqrt: typeof import("./src/UniswapV3Helpers").decodePriceSqrt;
    getCurrentPrice: typeof import("./src/UniswapV3Helpers").getCurrentPrice;
    encodePath: typeof import("./src/UniswapV3Helpers").encodePath;
    getMinTick: typeof import("./src/UniswapV3Helpers").getMinTick;
    getMaxTick: typeof import("./src/UniswapV3Helpers").getMaxTick;
    getTickBitmapIndex: typeof import("./src/UniswapV3Helpers").getTickBitmapIndex;
    computePoolAddress: typeof import("./src/UniswapV3Helpers").computePoolAddress;
    FeeAmount: {
        LOW: number;
        MEDIUM: number;
        HIGH: number;
    };
    TICK_SPACINGS: {
        [x: number]: number;
    };
    RetryProvider: typeof import("./src/RetryProvider").RetryProvider;
    getHardhatConfig: typeof import("./src/HardhatConfig").getHardhatConfig;
    addGlobalHardhatTestingAddress: typeof import("./src/HardhatConfig").addGlobalHardhatTestingAddress;
    getWeb3(parameterizedNetwork?: string): any;
    getTruffleConfig: typeof import("./src/TruffleConfig").getTruffleConfig;
    getNodeUrl: typeof import("./src/TruffleConfig").getNodeUrl;
    mnemonic: string;
    enableControllableTiming: typeof import("./src/MigrationUtils").enableControllableTiming;
    deploy: typeof import("./src/MigrationUtils").deploy;
    setToExistingAddress: typeof import("./src/MigrationUtils").setToExistingAddress;
    getKeysForNetwork: typeof import("./src/MigrationUtils").getKeysForNetwork;
    addToTdr: typeof import("./src/MigrationUtils").addToTdr;
    isPublicNetwork: typeof import("./src/MigrationUtils").isPublicNetwork;
    MetaMaskTruffleProvider: typeof import("./src/MetaMaskTruffleProvider").MetaMaskTruffleProvider;
    ManagedSecretProvider: typeof import("./src/gckms/ManagedSecretProvider").ManagedSecretProvider;
    runDefaultFixture: typeof import("./src/hardhat/fixtures/default.js").runDefaultFixture;
    runTestForVersion: typeof import("./src/MultiVersionTestHelpers.js").runTestForVersion;
    createConstructorParamsForContractVersion: typeof import("./src/MultiVersionTestHelpers.js").createConstructorParamsForContractVersion;
    SUPPORTED_CONTRACT_VERSIONS: {
        contractType: string;
        contractVersion: string;
    }[];
    TESTED_CONTRACT_VERSIONS: {
        contractType: string;
        contractVersion: string;
    }[];
    TEST_DECIMAL_COMBOS: {
        tokenSymbol: string;
        tokenName: string;
        collateralDecimals: number;
        syntheticDecimals: number;
        priceFeedDecimals: number;
    }[];
    IDENTIFIER_BLACKLIST: {
        SOME_IDENTIFIER: string[];
    };
    IDENTIFIER_NON_18_PRECISION: {
        USDBTC: number;
        "STABLESPREAD/USDC": number;
        "STABLESPREAD/BTC": number;
        "ELASTIC_STABLESPREAD/USDC": number;
        BCHNBTC: number;
        AMPLUSD: number;
        "COMPUSDC-APR-FEB28/USDC": number;
        "COMPUSDC-APR-MAR28/USDC": number;
        TEST8DECIMALS: number;
        TEST8DECIMALSANCIL: number;
        TEST6DECIMALS: number;
        TEST6DECIMALSANCIL: number;
    };
    getPrecisionForIdentifier: (identifier: any) => any;
    OPTIMISTIC_ORACLE_IGNORE_POST_EXPIRY: string[];
    OPTIMISTIC_ORACLE_IGNORE: string[];
    getVotingRoles: (account: string, voting: Object, designatedVoting?: Object | undefined) => {
        votingContract: Object;
        votingAccount: any;
        signingAddress: string;
    };
    getLatestEvent: (eventName: any, request: any, roundId: any, account: any, votingContract: any) => Promise<any>;
    constructCommitment: (request: Object, roundId: string, web3: Object, price: any, signingAccount: string, votingAccount: string, decimals?: string | null) => Promise<{
        identifier: any;
        time: any;
        hash: any;
        encryptedVote: string;
        price: string;
        salt: any;
    }>;
    constructReveal: (request: Object, roundId: string, web3: Object, signingAccount: string, votingContract: Object, votingAccount: string) => Promise<{
        identifier: any;
        time: any;
        price: any;
        salt: any;
    }>;
    batchCommitVotes: (newCommitments: any, votingContract: any, account: any) => Promise<{
        successes: any[];
        batches: number;
    }>;
    batchRevealVotes: (newReveals: any, votingContract: any, account: any) => Promise<{
        successes: any[];
        batches: number;
    }>;
    batchRetrieveRewards: (requests: any, roundId: any, votingContract: any, votingAccount: any, signingAccount: any) => Promise<{
        successes: any[];
        batches: number;
    }>;
    averageBlockTimeSeconds: typeof import("./src/TimeUtils.js").averageBlockTimeSeconds;
    getFromBlock: typeof import("./src/TimeUtils.js").getFromBlock;
    estimateBlocksElapsed: typeof import("./src/TimeUtils.js").estimateBlocksElapsed;
    didContractThrow: typeof import("./src/SolidityTestUtils.js").didContractThrow;
    mineTransactionsAtTime: typeof import("./src/SolidityTestUtils.js").mineTransactionsAtTime;
    advanceBlockAndSetTime: typeof import("./src/SolidityTestUtils.js").advanceBlockAndSetTime;
    takeSnapshot: typeof import("./src/SolidityTestUtils.js").takeSnapshot;
    revertToSnapshot: typeof import("./src/SolidityTestUtils.js").revertToSnapshot;
    stopMining: typeof import("./src/SolidityTestUtils.js").stopMining;
    startMining: typeof import("./src/SolidityTestUtils.js").startMining;
    SolcoverConfig: {
        providerOptions: {
            network_id: number;
        };
        skipFiles: string[];
    };
    getRandomSignedInt: typeof import("./src/Random.js").getRandomSignedInt;
    getRandomUnsignedInt: typeof import("./src/Random.js").getRandomUnsignedInt;
    PublicNetworks: {
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
    getBridgeChainId: (netId: any) => any;
    createObjectFromDefaultProps: (overrideProps?: Object | undefined, defaultProps: any) => {};
    formatDateShort: (timestampInSeconds: any) => string;
    formatDate: (timestampInSeconds: any, web3: any) => string;
    formatHours: (seconds: any, decimals?: number) => string;
    formatWei: (num: any, web3: any) => any;
    formatWithMaxDecimals: (num: any, decimalPlaces: any, minPrecision: any, roundUp: any, showSign: any) => string;
    createFormatFunction: (web3: any, numDisplayedDecimals: any, minDisplayedPrecision: any, showSign?: boolean, decimals?: number) => (valInWei: any) => string;
    createEtherscanLinkFromtx: typeof import("./src/FormattingUtils.js").createEtherscanLinkFromtx;
    createShortHexString: typeof import("./src/FormattingUtils.js").createShortHexString;
    createEtherscanLinkMarkdown: typeof import("./src/FormattingUtils.js").createEtherscanLinkMarkdown;
    addSign: typeof import("./src/FormattingUtils.js").addSign;
    formatFixed: typeof import("@ethersproject/bignumber").formatFixed;
    parseFixed: typeof import("@ethersproject/bignumber").parseFixed;
    ConvertDecimals: (fromDecimals: any, toDecimals: any, web3: any) => (amount: any) => any;
    RegistryRolesEnum: {
        OWNER: string;
        CONTRACT_CREATOR: string;
    };
    VotePhasesEnum: {
        COMMIT: string;
        REVEAL: string;
    };
    LiquidationStatesEnum: {
        UNINITIALIZED: string;
        PRE_DISPUTE: string;
        PENDING_DISPUTE: string;
        DISPUTE_SUCCEEDED: string;
        DISPUTE_FAILED: string;
    };
    PostWithdrawLiquidationRewardsStatusTranslations: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
    };
    PositionStatesEnum: {
        OPEN: string;
        EXPIRED_PRICE_REQUESTED: string;
        EXPIRED_PRICE_RECEIVED: string;
    };
    PriceRequestStatusEnum: {
        NOT_REQUESTED: string;
        ACTIVE: string;
        RESOLVED: string;
        FUTURE: string;
    };
    OptimisticOracleRequestStatesEnum: {
        INVALID: string;
        REQUESTED: string;
        PROPOSED: string;
        EXPIRED: string;
        DISPUTED: string;
        RESOLVED: string;
        SETTLED: string;
    };
    computeTopicHash: typeof import("./src/EncryptionHelper.js").computeTopicHash;
    computeVoteHash: typeof import("./src/EncryptionHelper.js").computeVoteHash;
    computeVoteHashAncillary: typeof import("./src/EncryptionHelper.js").computeVoteHashAncillary;
    getKeyGenMessage: typeof import("./src/EncryptionHelper.js").getKeyGenMessage;
    computeCollateralizationRatio: typeof import("./src/EmpUtils.js").computeCollateralizationRatio;
    encryptMessage: typeof import("./src/Crypto.js").encryptMessage;
    addressFromPublicKey: typeof import("./src/Crypto.js").addressFromPublicKey;
    decryptMessage: typeof import("./src/Crypto.js").decryptMessage;
    recoverPublicKey: typeof import("./src/Crypto.js").recoverPublicKey;
    deriveKeyPairFromSignatureTruffle: typeof import("./src/Crypto.js").deriveKeyPairFromSignatureTruffle;
    deriveKeyPairFromSignatureMetamask: typeof import("./src/Crypto.js").deriveKeyPairFromSignatureMetamask;
    getMessageSignatureTruffle: typeof import("./src/Crypto.js").getMessageSignatureTruffle;
    getMessageSignatureMetamask: typeof import("./src/Crypto.js").getMessageSignatureMetamask;
    signMessage: typeof import("./src/Crypto.js").signMessage;
    runTransaction: ({ web3, transaction, transactionConfig, availableAccounts }: any) => Promise<{
        receipt: any;
        returnValue: any;
        transactionConfig: any;
    }>;
    blockUntilBlockMined: (web3: Object, blockerBlockNumber: number, delay?: number) => Promise<void>;
    accountHasPendingTransactions: (web3: any, account: any) => Promise<boolean>;
    revertWrapper: (result: Object) => Object | null;
    createContractObjectFromJson: (contractJsonObject: any, _web3?: any) => any;
    replaceLibraryBindingReferenceInArtitifact: (artifact: object, libraryName: string) => any;
    BATCH_MAX_COMMITS: number;
    BATCH_MAX_REVEALS: number;
    BATCH_MAX_RETRIEVALS: number;
    MAX_UINT_VAL: string;
    MAX_SAFE_ALLOWANCE: string;
    MAX_SAFE_JS_INT: number;
    ZERO_ADDRESS: string;
    interfaceName: {
        FinancialContractsAdmin: string;
        Oracle: string;
        Registry: string;
        Store: string;
        IdentifierWhitelist: string;
        CollateralWhitelist: string;
        AddressWhitelist: string;
        OptimisticOracle: string;
        Bridge: string;
        GenericHandler: string;
        MockOracleAncillary: string;
        SinkOracle: string;
    };
    UMA_FIRST_EMP_BLOCK: number;
    decodeTransaction: typeof import("./src/AdminUtils.js").decodeTransaction;
    isAdminRequest: typeof import("./src/AdminUtils.js").isAdminRequest;
    getAdminRequestId: typeof import("./src/AdminUtils.js").getAdminRequestId;
    translateAdminVote: (voteValue: any) => "No Vote" | "YES" | "NO" | "INVALID ADMIN VOTE";
    getAllContracts: typeof import("./src/AbiUtils.js").getAllContracts;
    getAbiDecoder: typeof import("./src/AbiUtils.js").getAbiDecoder;
};
export = _exports;
