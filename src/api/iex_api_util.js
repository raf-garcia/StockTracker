const API_KEY = `pk_4c9d7e256ac94209b05b3ec930d3dd60`;

// filters
const newsFilters = [
  "datetime",
  "headline",
  "url",
  "source"
].join(',')

const quoteFilters = [
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
  "week52High",
  "week52Low"
].join(',')

const statsFilters = [
  "dividendYield"
].join(',');

const companyInfoFilters = [
  "description",
  "exchange",
  "sector",
  "website",
  "symbol",
  "companyName"
].join(',')

// Company Information
export const fetchCompanyInformation = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/company/?filter=${companyInfoFilters}&token=${API_KEY}`)
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error", e);  
  }
}

// key stats
export const fetchCompanyQuote =  async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/?filter=${quoteFilters}&token=${API_KEY}`);
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

export const fetchCompanyEPS = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/earnings/1/actualEPS/?token=${API_KEY}`);
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

export const fetchDividendYield = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/stats/?filter=${statsFilters}&token=${API_KEY}`);
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error", e);
  }
}

// news
export const fetchCompanyNews = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/news/last/5/?filter=${newsFilters}&token=${API_KEY}`);
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error", e);
  }
}

// peers
export const fetchTopPeers = async (symbol) => {
  try {
    let response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/peers/?token=${API_KEY}`);
    let json = await response.json();
    return json;
  }
  catch(e) {
    console.log("Error: ", e);
  }
}