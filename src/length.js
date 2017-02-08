import React from 'react';
import _ from 'lodash';

export default class SummaryLength extends React.Component {
  render(){
    let data = this.props.data

    return (
			<div id = 'unit'>
				<h3>NatureNet Activity Summary</h3>
				<div id = 'list'>
					<p>No. Users: {_.size(data.users)}</p>
					<p>No. Observations: {_.size(data.observations)}</p>
					<p>No. Comments: {_.size(data.comments)}</p>
					<p>No. Design Ideas: {_.size(data.ideas)}</p>
				</div>
			</div>
		)
  }
}
