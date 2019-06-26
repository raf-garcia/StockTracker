import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

export default class chart extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: [] };
  }
  
  componentDidMount() {
    this.setState({ chartData: this.props.oneDayData });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.oneDayData !== this.props.oneDayData) {
      this.setState({ chartData: this.props.oneDayData });
    }
  }
  
  setChartData(chartData) {
    this.setState({ chartData });
  }
  
  render() {
    const { oneDayData, fiveDayData, oneMonthData, oneYearData, fiveYearData, maxData } = this.props;
    
    return (
      <div className='chart'>
        <div className='chart__select'>
          <a href="#" onClick={() => this.setChartData(oneDayData)}>  1D  </a>
          <a href="#" onClick={() => this.setChartData(fiveDayData)}>  5D  </a>
          <a href="#" onClick={() => this.setChartData(oneMonthData)}>  1M  </a>
          <a href="#" onClick={() => this.setChartData(oneYearData)}>  1Y  </a>
          <a href="#" onClick={() => this.setChartData(fiveYearData)}>  5Y  </a>
          <a href="#" onClick={() => this.setChartData(maxData)}>  MAX  </a>
        </div>

        <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart data={this.state.chartData} margin={{
            top: 0, right: 0, left: 0, bottom: 0,
          }} >

            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#8884d8" stopOpacity={1} />
                <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateTime" interval={"preserveStart"} tick={{stroke: '#f4f6f9', strokeWidth: 0.1}}/>
            <YAxis orientation="right" domain={['dataMin', 'auto']} tick={{stroke: '#f4f6f9', strokeWidth: 0.1}} />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} labelStyle={{ color: 'black' }} />
            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="url(#colorPrice)" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}


