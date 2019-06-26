import React, { useState } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const Chart = (props) => {
  const { oneDayData, fiveDayData, oneMonthData, oneYearData, fiveYearData, maxData } = props;
  const [chartData, setChartData] = useState(oneDayData)

  return (
    <div className = 'chart'>
      <div className = 'chart__select'>
        <a href="#" onClick={ () => setChartData(oneDayData) }>  1D  </a>
        <a href="#" onClick={ () => setChartData(fiveDayData)}>  5D  </a>
        <a href="#" onClick={ () => setChartData(oneMonthData)}>  1M  </a>
        <a href="#" onClick={() => setChartData(oneYearData)}>  1Y  </a>
        <a href="#" onClick={() => setChartData(fiveYearData)}>  5Y  </a>
        <a href="#" onClick={() => setChartData(maxData)}>  MAX  </a>
      </div>

      <ResponsiveContainer width="100%" aspect={1.8}>
        <AreaChart data={chartData} margin={{
            top: 0, right: 0, left: 0, bottom: 0,
          }} >

          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#8884d8" stopOpacity={1} />
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateTime"/>
          <YAxis orientation="right" domain={['dataMin', 'auto']}/>
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }}/>
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="url(#colorPrice)" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;


