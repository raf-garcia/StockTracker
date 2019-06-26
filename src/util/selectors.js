import {changeToPercent } from './numberFormatter';

export const selectChartDataDay = (chartDataDay) => {
  return chartDataDay.filter(data => data.average).map(data => ({ dateTime: data.label, price: data.average }));
};

export const selectCompanyStats = (companyData) => {
  return {
    companyStatsLeft: [
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
        }
    ],
    companyStatsRight: [
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
            value: changeToPercent(companyData.dividendYield),
            name: "Dividend & Yield"
        }
    ]
};
}

const dateFormatter = date => date.split('-')[1] + "-" + date.split('-')[2];

export const selectChartDataFiveDay = fiveDayDataArray => fiveDayDataArray.filter(data => data.average).map(data => ({ dateTime: dateFormatter(data.date), price: data.average })).reverse();

export const selectChartDataOneMonth = oneMonthDataArray => oneMonthDataArray.filter(data => data.close).map(data => ({ dateTime: data.label, price: data.close }));

const yearDateFormatter = date => {
    // 'Jun 19, 62'
    const dateYear = date.split(' ')[2].toString();
    const dateNow = new Date();
    let dateYearNow = dateNow.toDateString().split(' ')[3].slice(2);

    if (dateYear > dateYearNow) {
        return '19' + dateYear;
    } else {
        return '20' + dateYear;
    }
};

export const selectChartDataYear = yearDataArray => yearDataArray.filter(data => data.close).map(data => ({
dateTime: yearDateFormatter(data.label), price: data.close }));