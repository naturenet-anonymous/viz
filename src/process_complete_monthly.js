import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {monthlyData} from './getMonthlyData';
import SimpleBarChart from './simpleBar';
import InteractiveBarChart from './interactiveBar';
import {merge} from './mergeForStackedBarChart';


export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let observations = monthlyData(data.observations, "observations")
		let comments = monthlyData(data.comments, "comments")
		let ideas = monthlyData(data.ideas, "design_ideas")
		let merged = merge(observations, comments, ideas, 'time')

    return (
			<div id = "unit">
				<h3>Activity Since Launch</h3>
				<InteractiveBarChart data = {merged}/>
			</div>
		)
  }
}
