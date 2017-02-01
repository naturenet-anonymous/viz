import React from 'react';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


export default class SimpleBarChart extends React.Component{
	render () {
    const dataset = this.props.dataset
    const color = this.props.color
		const dataKey = this.props.dataKey
  	return (
    	<BarChart width={600} height={300} data={dataset}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey = "time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey = {dataKey} fill={color} />
      </BarChart>
    );
  }
}
