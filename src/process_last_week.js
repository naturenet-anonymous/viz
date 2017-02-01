import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {lastWeek} from './getLastWeek';
import SimpleBarChart from './simpleBar';
import InteractiveBarChart from './interactiveBar';
import {merge} from './mergeForStackedBarChart';

export default class ProcessWeek extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let observations = lastWeek(data.observations, "observations")
		let comments = lastWeek(data.comments, "comments")
		let ideas = lastWeek(data.ideas, "design_ideas")
		let merged = merge(observations, comments, ideas, "time")

    return (
			<div id = "unit">
				<h3>Activity Last Week</h3>
				<InteractiveBarChart data = {merged}/>
			</div>
		)
  }
}
