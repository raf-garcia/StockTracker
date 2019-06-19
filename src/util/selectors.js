export const selectChartDataDay = (chartDataDay) => {
  return chartDataDay.filter(data => data.average).map(data => ({ name: data.minute, price: data.average }));
};