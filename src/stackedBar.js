import React from 'react';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class StackedBarChart extends React.Component{
	render () {
		const dataset = this.props.dataset
  	return (
    	<BarChart width={600} height={300} data={dataset}
           margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="observations" stackId="a" fill="#8884d8" />
       <Bar dataKey="comments" stackId="a" fill="#82ca9d" />
			 <Bar dataKey="design_ideas" stackId="a" fill="#ffc658" />
      </BarChart>
    );
  }
}
