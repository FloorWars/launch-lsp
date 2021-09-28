export function getTickFromPrice(price: any, poolFee: any): any;
export function encodePriceSqrt(reserve1: any, reserve0: any): any;
export function decodePriceSqrt(priseSqrt: any): any;
export function getCurrentPrice(poolAddress: any, web3: any): Promise<any>;
export function encodePath(path: any, fees: any): string;
export function getMinTick(tickSpacing: any): number;
export function getMaxTick(tickSpacing: any): number;
export function getTickBitmapIndex(tick: any, tickSpacing: any): any;
export function computePoolAddress(factoryAddress: any, tokenA: any, tokenB: any, fee: any): string;
export namespace FeeAmount {
    const LOW: number;
    const MEDIUM: number;
    const HIGH: number;
}
export const TICK_SPACINGS: {
    [x: number]: number;
};
