export const selectChartDataDay = (chartDataDay) => {
  let newChartDataArray = [];

  for (let i = 0; i < chartDataDay.length; i++) {
    const data = chartDataDay[i];
    if (data.average != null) {
      newChartDataArray.push({ name: data.minute, price: data.average });
    }
  }

  return newChartDataArray;
};