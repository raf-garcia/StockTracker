import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {chartDayData} from './sampleChartData'

const chart = (props) => {

    const data = [];
    for(let i = 0; i < chartDayData.length; i++){
        data[i] = {name: chartDayData[i].minute, price: chartDayData[i].average};
    }

    return (
      <ResponsiveContainer width="70%" aspect={0.9} minWidth={360} maxHeight={800}>
        <AreaChart data={data} margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis orientation="right" domain={['dataMin', 'auto']}/>
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
}
export default chart;