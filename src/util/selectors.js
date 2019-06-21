export const selectChartDataDay = (chartDataDay) => {
  return chartDataDay.filter(data => data.average).map(data => ({ name: data.minute, price: data.average }));
};

export const selectCompanyStats = (companyData) => {
  return {
    companyStats: [
        {
            value: companyData.close,
            name: "Previous Close"
        },    
        {
            name: "Day Range",
            value: {
                high: companyData.high,
                low: companyData.low
            }
        },
        {
            value: companyData.latestVolume,
            name: "Volume"
        },
        {
            value: companyData.marketCap,
            name: "Market Cap"
        },
        {
            value: companyData.peRatio,
            name: "P/E Ratio"
        },
        {
            value: companyData.open,
            name: "Open"
        },    
        {
            name: "52 Week Range",
            value: {
                high: companyData.week52High,
                low: companyData.week52Low
            }
        },
        {
            value: companyData.avgTotalVolume,
            name: "Total Avg Volume"
        },
        {
            value: companyData.actualEPS,
            name: "Earnings Per Share"
        },
        {
            value: companyData.dividendYield,
            name: "Dividend & Yield"
        }
    ]
};
}