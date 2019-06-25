export const API_KEY = `pk_ab51846bce904c91983be92734acee97`;

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

export const chartDataFilters = [
  "filter=date",
  "minute",
  "label",
  "close",
  "average"
].join(',');