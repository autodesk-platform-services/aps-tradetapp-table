const express = require('express');
const { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions } = require('../services/aps.js');
const {getFinancials, getQualifications} = require("../services/aps");



const sample_data = {
    "pagination": {
        "cursorState": null,
        "limit": 20,
        "nextUrl": null,
        "previousUrl": null
    },
    "results": [
        {
            "id": "602156a978c314006631b6c8",
            "uniqueId": null,
            "companyName": "Building Connected Test ",
            "hasParentCompany": true,
            "parentCompanyName": "Autodesk Test Inc",
            "riskEvaluationScore": 4,
            "benchmarks": {
                "overallBenchmarkingScore": 45,
                "overallBenchmarkingYear": 2024,
                "debtScore": 44,
                "debtYear": 2024,
                "liquidityScore": 47,
                "liquidityYear": 2024,
                "profitabilityScore": 49,
                "profitabilityYear": 2024,
                "turnoverScore": 42,
                "turnoverYear": 2024
            },
            "keyMetrics": {
                "dartRates": [
                    {
                        "score": null,
                        "year": 2022
                    },
                    {
                        "score": null,
                        "year": 2021
                    },
                    {
                        "score": null,
                        "year": 2013
                    }
                ],
                "experienceModificationRatings": [
                    {
                        "score": 0.0,
                        "year": 2023
                    },
                    {
                        "score": 0.0,
                        "year": 2022
                    },
                    {
                        "score": 0.0,
                        "year": 2021
                    }
                ],
                "recordableIncidentRates": [
                    {
                        "score": null,
                        "year": 2022
                    },
                    {
                        "score": null,
                        "year": 2021
                    },
                    {
                        "score": null,
                        "year": 2013
                    }
                ],
                "aggregateTotalCapacity": null,
                "largestProject": 1200000.0,
                "largestProjectYear": 2020,
                "netCashFlow": 1133512.0,
                "netCashFlowYear": 2024,
                "singleProjectCapacity": null,
                "workingCapital": 400000.0,
                "workingCapitalYear": 2024
            },
            "statements": [
                {
                    "period": 12,
                    "type": "AUDITED",
                    "date": "2024-02-06",
                    "rawData": {
                        "accountsPayable": 1898769.0,
                        "accountsReceivable": 1679876.0,
                        "amountOfCreditUsed": 20000.0,
                        "billingInExcessOfCost": 234528.0,
                        "cashAndCashEquivalents": 2256743.0,
                        "costInExcessOfBillings": 288767.0,
                        "costsOfGoodsSold": 1262529.0,
                        "currentLiabilities": 200000.0,
                        "earningsBeforeIncomeTaxes": 4676354.0,
                        "equity": 100000.0,
                        "interestExpense": 23452.0,
                        "interestIncome": 20000.0,
                        "marketableSecurities": 56747.0,
                        "netCashFromFinancing": 898988.0,
                        "netCashFromInvestments": 200000.0,
                        "netCashFromOperations": 34524.0,
                        "netIncome": 2989768.0,
                        "revenueSales": 4563573.0,
                        "totalAssets": 600000.0,
                        "currentAssets": 600000.0,
                        "totalLiabilities": 500000.0,
                        "totalLineOfCredit": 1000000.0
                    },
                    "metrics": {
                        "accountsReceivableTurnover": 2.7166,
                        "assetTurnoverRatio": 7.606,
                        "cashToOverbillings": 9.6225,
                        "currentRatio": 3.0,
                        "daysOfCashOnHand": -618.4677,
                        "debtLessCashToEquity": -17.5674,
                        "debtRatio": 0.8333,
                        "equityToTotalLiabilities": 0.2,
                        "debtToEquity": 5.0,
                        "grossProfitMargin": 0.7233,
                        "underbillingsToCurrentAssets": 0.4813,
                        "netProfitMargin": 0.6551,
                        "quickRatio": 19.9668,
                        "returnOnAssets": 4.9829,
                        "equityToSales": 0.0219,
                        "workingCapitalToSales": 0.0877,
                        "underbillingsToWc": 0.7219,
                        "workingCapitalCompression": 0.6667,
                        "workingCapitalTurnover": 11.4089,
                        "customRatios": [
                            {
                                "name": "Liquidity",
                                "value": 3.7612
                            },
                            {
                                "name": "Underbillings toequity",
                                "value": 2.8877
                            },
                            {
                                "name": "Available Capacity",
                                "value": 60000.0
                            },
                            {
                                "name": "Equity Utilization Ratio",
                                "value": 45.6357
                            }
                        ]
                    }
                },
                {
                    "period": 12,
                    "type": "AUDITED",
                    "date": "2023-02-10",
                    "rawData": {
                        "accountsPayable": 2331116.0,
                        "accountsReceivable": 9000.0,
                        "amountOfCreditUsed": 345000.0,
                        "billingInExcessOfCost": 1151641.0,
                        "cashAndCashEquivalents": 2828109.0,
                        "costInExcessOfBillings": 37000.0,
                        "costsOfGoodsSold": 2365543.0,
                        "currentLiabilities": 8206383.0,
                        "earningsBeforeIncomeTaxes": 5678654.0,
                        "equity": 3024226.0,
                        "interestExpense": 234556.0,
                        "interestIncome": 300000.0,
                        "marketableSecurities": 4000.0,
                        "netCashFromFinancing": 6574763.0,
                        "netCashFromInvestments": 465733.0,
                        "netCashFromOperations": 3008733.0,
                        "netIncome": 3089753.0,
                        "revenueSales": 4000000.0,
                        "totalAssets": 8206383.0,
                        "currentAssets": 8206383.0,
                        "totalLiabilities": 8206383.0,
                        "totalLineOfCredit": 1000000.0
                    },
                    "metrics": {
                        "accountsReceivableTurnover": 444.4444,
                        "assetTurnoverRatio": 0.4874,
                        "cashToOverbillings": 2.4557,
                        "currentRatio": 1.0,
                        "daysOfCashOnHand": -294.1212,
                        "debtLessCashToEquity": 1.7784,
                        "debtRatio": 1.0,
                        "equityToTotalLiabilities": 0.3685,
                        "debtToEquity": 2.7135,
                        "grossProfitMargin": 0.4086,
                        "underbillingsToCurrentAssets": 0.0045,
                        "netProfitMargin": 0.7724,
                        "quickRatio": 0.3462,
                        "returnOnAssets": 0.3765,
                        "equityToSales": 0.7561,
                        "workingCapitalToSales": null,
                        "underbillingsToWc": null,
                        "workingCapitalCompression": null,
                        "workingCapitalTurnover": null,
                        "customRatios": []
                    }
                }
            ]
        },
        {
            "id": "5430e7bc5cdc2e0300dd8b78",
            "uniqueId": null,
            "companyName": "j3",
            "hasParentCompany": true,
            "parentCompanyName": "Autodesk",
            "riskEvaluationScore": 5,
            "benchmarks": {
                "debtScore": null,
                "debtYear": null,
                "liquidityScore": null,
                "liquidityYear": null,
                "profitabilityScore": null,
                "profitabilityYear": null,
                "turnoverScore": null,
                "turnoverYear": null,
                "overallBenchmarkingScore": null,
                "overallBenchmarkingYear": null
            },
            "keyMetrics": {
                "dartRates": [
                    {
                        "score": null,
                        "year": 2022
                    },
                    {
                        "score": 0.0,
                        "year": 2021
                    },
                    {
                        "score": 104000.0,
                        "year": 2020
                    },
                    {
                        "score": null,
                        "year": 2019
                    },
                    {
                        "score": null,
                        "year": 2018
                    }
                ],
                "experienceModificationRatings": [
                    {
                        "score": 0.0,
                        "year": 2024
                    },
                    {
                        "score": 0.9,
                        "year": 2023
                    },
                    {
                        "score": 0.91,
                        "year": 2022
                    },
                    {
                        "score": 2.0,
                        "year": 2021
                    },
                    {
                        "score": 0.0,
                        "year": 2020
                    }
                ],
                "recordableIncidentRates": [
                    {
                        "score": null,
                        "year": 2022
                    },
                    {
                        "score": 0.0,
                        "year": 2021
                    },
                    {
                        "score": 144000.0,
                        "year": 2020
                    },
                    {
                        "score": null,
                        "year": 2019
                    },
                    {
                        "score": null,
                        "year": 2018
                    }
                ],
                "aggregateTotalCapacity": null,
                "largestProject": 1200000.0,
                "largestProjectYear": 2020,
                "netCashFlow": 1133512.0,
                "netCashFlowYear": 2024,
                "singleProjectCapacity": null,
                "workingCapital": 400000.0,
                "workingCapitalYear": 2024
            },
            "statements": [
                {
                    "period": 12,
                    "type": "AUDITED",
                    "date": "2024-02-06",
                    "rawData": {
                        "accountsPayable": 1898769.0,
                        "accountsReceivable": 1679876.0,
                        "amountOfCreditUsed": 20000.0,
                        "billingInExcessOfCost": 234528.0,
                        "cashAndCashEquivalents": 2256743.0,
                        "costInExcessOfBillings": 288767.0,
                        "costsOfGoodsSold": 1262529.0,
                        "currentLiabilities": 200000.0,
                        "earningsBeforeIncomeTaxes": 4676354.0,
                        "equity": 100000.0,
                        "interestExpense": 23452.0,
                        "interestIncome": 20000.0,
                        "marketableSecurities": 56747.0,
                        "netCashFromFinancing": 898988.0,
                        "netCashFromInvestments": 200000.0,
                        "netCashFromOperations": 34524.0,
                        "netIncome": 2989768.0,
                        "revenueSales": 4563573.0,
                        "totalAssets": 600000.0,
                        "currentAssets": 600000.0,
                        "totalLiabilities": 500000.0,
                        "totalLineOfCredit": 1000000.0
                    },
                    "metrics": {
                        "accountsReceivableTurnover": 2.7166,
                        "assetTurnoverRatio": 7.606,
                        "cashToOverbillings": 9.6225,
                        "currentRatio": 3.0,
                        "daysOfCashOnHand": -618.4677,
                        "debtLessCashToEquity": -17.5674,
                        "debtRatio": 0.8333,
                        "equityToTotalLiabilities": 0.2,
                        "debtToEquity": 5.0,
                        "grossProfitMargin": 0.7233,
                        "underbillingsToCurrentAssets": 0.4813,
                        "netProfitMargin": 0.6551,
                        "quickRatio": 19.9668,
                        "returnOnAssets": 4.9829,
                        "equityToSales": 0.0219,
                        "workingCapitalToSales": 0.0877,
                        "underbillingsToWc": 0.7219,
                        "workingCapitalCompression": 0.6667,
                        "workingCapitalTurnover": 11.4089,
                        "customRatios": [
                            {
                                "name": "Liquidity",
                                "value": 3.7612
                            },
                            {
                                "name": "Underbillings toequity",
                                "value": 2.8877
                            },
                            {
                                "name": "Available Capacity",
                                "value": 60000.0
                            },
                            {
                                "name": "Equity Utilization Ratio",
                                "value": 45.6357
                            }
                        ]
                    }
                },
                {
                    "period": 12,
                    "type": "AUDITED",
                    "date": "2023-02-10",
                    "rawData": {
                        "accountsPayable": 2331116.0,
                        "accountsReceivable": 9000.0,
                        "amountOfCreditUsed": 345000.0,
                        "billingInExcessOfCost": 1151641.0,
                        "cashAndCashEquivalents": 2828109.0,
                        "costInExcessOfBillings": 37000.0,
                        "costsOfGoodsSold": 2365543.0,
                        "currentLiabilities": 8206383.0,
                        "earningsBeforeIncomeTaxes": 5678654.0,
                        "equity": 3024226.0,
                        "interestExpense": 234556.0,
                        "interestIncome": 300000.0,
                        "marketableSecurities": 4000.0,
                        "netCashFromFinancing": 6574763.0,
                        "netCashFromInvestments": 465733.0,
                        "netCashFromOperations": 3008733.0,
                        "netIncome": 3089753.0,
                        "revenueSales": 4000000.0,
                        "totalAssets": 8206383.0,
                        "currentAssets": 8206383.0,
                        "totalLiabilities": 8206383.0,
                        "totalLineOfCredit": 1000000.0
                    },
                    "metrics": {
                        "accountsReceivableTurnover": 444.4444,
                        "assetTurnoverRatio": 0.4874,
                        "cashToOverbillings": 2.4557,
                        "currentRatio": 1.0,
                        "daysOfCashOnHand": -294.1212,
                        "debtLessCashToEquity": 1.7784,
                        "debtRatio": 1.0,
                        "equityToTotalLiabilities": 0.3685,
                        "debtToEquity": 2.7135,
                        "grossProfitMargin": 0.4086,
                        "underbillingsToCurrentAssets": 0.0045,
                        "netProfitMargin": 0.7724,
                        "quickRatio": 0.3462,
                        "returnOnAssets": 0.3765,
                        "equityToSales": 0.7561,
                        "workingCapitalToSales": null,
                        "underbillingsToWc": null,
                        "workingCapitalCompression": null,
                        "workingCapitalTurnover": null,
                        "customRatios": []
                    }
                }
            ]
        }
    ]
}













let router = express.Router();
router.use('/api/tradetapp', authRefreshMiddleware);

router.get('/api/tradetapp/financials', async function (req, res, next) {
    try {
        const financials = await getFinancials(req.internalOAuthToken);
        // res.json(financials);
        res.json(sample_data);
    } catch (err) {
        next(err);
    }
});

router.get('/api/tradetapp/qualifications', async function (req, res, next) {
    try {
        const qualifications = await getQualifications(req.internalOAuthToken);
        res.json(qualifications);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
