export const API_KEY = `pk_e479d73242d545a2af4d509d722ce4ec`;

// filters
export const newsFilters = [
  "filter=datetime",
  "headline",
  "url",
  "source"
].join(',')

export const quoteFilters = [
  "filter=symbol",
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
  "week52Low",
  "change",
  "changePercent"
].join(',')

export const statsFilters = [
  "filter=dividendYield"
].join(',');

export const companyInfoFilters = [
  "filter=description",
  "exchange",
  "sector",
  "website",
  "symbol",
  "companyName"
].join(',')