/**
 * @notice Return average block-time for a period.
 */
export function averageBlockTimeSeconds(): Promise<number>;
export function getFromBlock(web3: any): Promise<number>;
/**
 * @notice Estimates the blocks elapsed over a certain number of seconds.
 * @param seconds the number of seconds.
 * @param cushionPercentage the percentage to add to the number as a cushion.
 */
export function estimateBlocksElapsed(seconds: any, cushionPercentage?: number): Promise<number>;
