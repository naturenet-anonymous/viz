import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {siteTotals} from './getSiteTotals';
import SideBarChart from './sideBySideBar';
import {outerJoinPlus} from './outerjoin';


export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let observations = siteTotals(data, "observations")
		let comments = siteTotals(data, "comments")
		let ideas = siteTotals(data, "design_ideas")
		let merged1 = outerJoinPlus(observations, comments, "site")
    let merged = outerJoinPlus(merged1, ideas, "site")

    return (
			<div id = "unit">
				<h3>Site Activity</h3>
        <SideBarChart dataset = {merged}/>
			</div>
		)
  }
}

//
