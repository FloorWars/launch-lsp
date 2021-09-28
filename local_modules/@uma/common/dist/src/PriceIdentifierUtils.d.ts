export namespace IDENTIFIER_BLACKLIST {
    const SOME_IDENTIFIER: string[];
}
export const IDENTIFIER_NON_18_PRECISION: {
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
export function getPrecisionForIdentifier(identifier: any): any;
export const OPTIMISTIC_ORACLE_IGNORE_POST_EXPIRY: string[];
export const OPTIMISTIC_ORACLE_IGNORE: string[];
