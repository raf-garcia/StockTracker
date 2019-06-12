const API_KEY = `pk_4c9d7e256ac94209b05b3ec930d3dd60`;
const filterResults = [
  // from Quote
  "symbol",
  "companyName",
  "open",
  "close",
  "high",
  "low",
  "latestPrice",
  "latestVolume",
  "avgTotalVolume",
  "marketCap",
  "peRatio",

  // News
  "datetime"
];

// Company Information
export const fetchCompanyInformation = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${API_KEY}`)
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error", e);
  }
}

// key stats
export const fetchCompanyQuote =  async (symbol) => {
  // let attributes = "close,high,low,latestVolume,marketCap,peRatio,open,week52high,week52low,avgTotalVolume";
  
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/?token=${API_KEY}`);
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

export const fetchCompanyEPS = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/earnings/1/actualEPS/?token=${API_KEY}`);
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

export const fetchDividendYield = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/stats/dividendYield&token=${API_KEY}`);
    debugger
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error", e);
  }
}

// news
export const fetchMarketNews = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/news/last/5/?token=${API_KEY}`);
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

// batch info
export const batchInfo = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/batch?types=quote,news,stats&filter=dividendYield&last=5&token=${API_KEY}`);
    let json = await response.json();
    console.log(json);
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

// company overview

// quote
// Key Stats to filter
/* 
close (previous close)
high, low (Day Range)
latestVolume (volume)
marketCap (Market Cap)
peRatio (P/E Ratio)
open (Open)
week52High, week52Low (52 week range)
avgTotalVolume (Total Avg. Volume)
*/

// 