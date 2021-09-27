declare const _exports: {
    runDefaultFixture: typeof import("./src/hardhat/fixtures/default").runDefaultFixture;
    runTestForVersion: typeof import("./src/MultiVersionTestHelpers").runTestForVersion;
    createConstructorParamsForContractVersion: typeof import("./src/MultiVersionTestHelpers").createConstructorParamsForContractVersion;
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
    averageBlockTimeSeconds: typeof import("./src/TimeUtils").averageBlockTimeSeconds;
    getFromBlock: typeof import("./src/TimeUtils").getFromBlock;
    estimateBlocksElapsed: typeof import("./src/TimeUtils").estimateBlocksElapsed;
    didContractThrow: typeof import("./src/SolidityTestUtils").didContractThrow;
    mineTransactionsAtTime: typeof import("./src/SolidityTestUtils").mineTransactionsAtTime;
    advanceBlockAndSetTime: typeof import("./src/SolidityTestUtils").advanceBlockAndSetTime;
    takeSnapshot: typeof import("./src/SolidityTestUtils").takeSnapshot;
    revertToSnapshot: typeof import("./src/SolidityTestUtils").revertToSnapshot;
    stopMining: typeof import("./src/SolidityTestUtils").stopMining;
    startMining: typeof import("./src/SolidityTestUtils").startMining;
    SolcoverConfig: {
        providerOptions: {
            network_id: number;
        };
        skipFiles: string[];
    };
    getRandomSignedInt: typeof import("./src/Random").getRandomSignedInt;
    getRandomUnsignedInt: typeof import("./src/Random").getRandomUnsignedInt;
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
    createEtherscanLinkFromtx: typeof import("./src/FormattingUtils").createEtherscanLinkFromtx;
    createShortHexString: typeof import("./src/FormattingUtils").createShortHexString;
    createEtherscanLinkMarkdown: typeof import("./src/FormattingUtils").createEtherscanLinkMarkdown;
    addSign: typeof import("./src/FormattingUtils").addSign;
    formatFixed: typeof import("@ethersproject/bignumber/lib/fixednumber").formatFixed;
    parseFixed: typeof import("@ethersproject/bignumber/lib/fixednumber").parseFixed;
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
    computeTopicHash: typeof import("./src/EncryptionHelper").computeTopicHash;
    computeVoteHash: typeof import("./src/EncryptionHelper").computeVoteHash;
    computeVoteHashAncillary: typeof import("./src/EncryptionHelper").computeVoteHashAncillary;
    getKeyGenMessage: typeof import("./src/EncryptionHelper").getKeyGenMessage;
    computeCollateralizationRatio: typeof import("./src/EmpUtils").computeCollateralizationRatio;
    encryptMessage: typeof import("./src/Crypto").encryptMessage;
    addressFromPublicKey: typeof import("./src/Crypto").addressFromPublicKey;
    decryptMessage: typeof import("./src/Crypto").decryptMessage;
    recoverPublicKey: typeof import("./src/Crypto").recoverPublicKey;
    deriveKeyPairFromSignatureTruffle: typeof import("./src/Crypto").deriveKeyPairFromSignatureTruffle;
    deriveKeyPairFromSignatureMetamask: typeof import("./src/Crypto").deriveKeyPairFromSignatureMetamask;
    getMessageSignatureTruffle: typeof import("./src/Crypto").getMessageSignatureTruffle;
    getMessageSignatureMetamask: typeof import("./src/Crypto").getMessageSignatureMetamask;
    signMessage: typeof import("./src/Crypto").signMessage;
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
    decodeTransaction: typeof import("./src/AdminUtils").decodeTransaction;
    isAdminRequest: typeof import("./src/AdminUtils").isAdminRequest;
    getAdminRequestId: typeof import("./src/AdminUtils").getAdminRequestId;
    translateAdminVote: (voteValue: any) => "No Vote" | "YES" | "NO" | "INVALID ADMIN VOTE";
    getAllContracts: typeof import("./src/AbiUtils").getAllContracts;
    getAbiDecoder: typeof import("./src/AbiUtils").getAbiDecoder;
};
export = _exports;
