import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class HorizontalBar extends React.Component{
	render () {
		const dataset = this.props.dataset
		const length = this.props.length

  	return (
      <BarChart width={800} height={500} data={dataset}
        layout='vertical'
				margin={{right: 75, left: 75}}
        >
       <XAxis type ="number" padding = {{ right: 10 }}/>
       <YAxis orientation="right" type="category"
				 dataKey="display_name" interval={0}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend/>
       <Bar dataKey="observations" stackId="a" fill="#8884d8"/>
       <Bar dataKey="comments" stackId="a" fill="#82ca9d" />
			 <Bar dataKey="design_ideas" stackId="a" fill="#ffc658" />
     </BarChart>
    );
  }
}
