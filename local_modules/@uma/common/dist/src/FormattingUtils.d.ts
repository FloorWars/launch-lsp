export function formatDateShort(timestampInSeconds: any): string;
export function formatDate(timestampInSeconds: any, web3: any): string;
export function formatHours(seconds: any, decimals?: number): string;
export function formatWei(num: any, web3: any): any;
export function formatWithMaxDecimals(num: any, decimalPlaces: any, minPrecision: any, roundUp: any, showSign: any): string;
export function createFormatFunction(web3: any, numDisplayedDecimals: any, minDisplayedPrecision: any, showSign?: boolean, decimals?: number): (valInWei: any) => string;
export function createEtherscanLinkFromtx(networkId: any): string;
export function createShortHexString(hex: any): string;
export function createEtherscanLinkMarkdown(hex: any, networkId?: number): string | null | undefined;
export function addSign(number: any): string;
import { formatFixed } from "@ethersproject/bignumber";
import { parseFixed } from "@ethersproject/bignumber";
export function ConvertDecimals(fromDecimals: any, toDecimals: any, web3: any): (amount: any) => any;
export { formatFixed, parseFixed };