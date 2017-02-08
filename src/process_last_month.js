import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {lastMonth} from './getLastMonth';
import SimpleBarChart from './simpleBar';
import InteractiveBarChart from './interactiveBar';
import {merge} from './mergeForStackedBarChart';

export default class ProcessMonth extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let observations = lastMonth(data.observations, "observations")
		let comments = lastMonth(data.comments, "comments")
		let ideas = lastMonth(data.ideas, "design_ideas")
		let merged = merge(observations, comments, ideas, "time")

    return (
			<div id = "unit">
				<h3>Activity Last Month</h3>
				<InteractiveBarChart data = {merged}/>
			</div>
		)
  }
}
