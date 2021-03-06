import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {userTotals} from './getUserTotals';
import SimpleBarChart from './simpleBar';
import HorizontalBar from './horizontalStackedBar';
import {outerJoinPlus} from './outerjoin';


export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let users = _.map(data.users, (d) => {
      var dict = {user: d.id, display_name: d.display_name, site: d.affiliation}
      return dict; })
    let observations = userTotals(data.observations, "observations", "observer")
		let comments = userTotals(data.comments, "comments", "commenter")
		let ideas = userTotals(data.ideas, "design_ideas", "submitter")
    let merged1 = outerJoinPlus(users, observations, "user")
		let merged2 = outerJoinPlus(merged1, comments, "user")
    let merged = outerJoinPlus(merged2, ideas, "user")
    let sorted = _.orderBy(merged, function(d) {
      return d.observations + d.comments + d.design_ideas
    }, 'desc')
    console.log(sorted);
    let length = _.size(sorted)

    return (
			<div id = "unit">
				<h3>User Activity</h3>
        <HorizontalBar dataset = {sorted} length = {length}/>
			</div>
		)
  }
}

//
