#!/bin/bash

MNE="ENTER YOUR OWN MNEMONIC WORDS HERE"
PrID="USDBTC" # TODO USDfw10PUNK when approved as Price ID

NODE_PATH=./local_modules node index.js --gasprice 80 --url https://speedy-nodes-nyc.moralis.io/d376b2384f04b47cf322a1c2/polygon/mumbai --mnemonic "$MNE" --pairName "USDfw10PUNK Covered Call Token Pair December 2021" --expirationTimestamp 1640995199 --collateralPerPair 1000000000000000000 --priceIdentifier $PrID --longSynthName "USDfw10PUNK Covered Call Token December 2021" --longSynthSymbol USDfw10PUNKc800k-1221 --shortSynthName "USDfw10PUNK Covered Call Short Token December 2021" --shortSynthSymbol USDfw10PUNKc800k-1221s --collateralToken 0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e  --fpl CoveredCall --strikePrice 1250000000000 --prepaidProposerBond 20000000000000000000 --optimisticOracleProposerBond 40000000000000000000

