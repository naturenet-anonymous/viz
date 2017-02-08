import React from 'react';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import StackedBarChart from './stackedBar';
import SimpleBarChart from './simpleBar';

export default class InteractiveBarChart extends React.Component{

	constructor(props){
		super(props)

		this.state = {}
		this.state.activity = 'all'
	}


	render(){
    const data = this.props.data
		console.log(data);
		const activity = this.state.activity
		console.log(activity);

		const handleClickAll = (event) => {
			console.log('event', event)
			this.setState({activity: 'all'})
		}

		const handleClickObs = (event) => {
			console.log('event', event)
			this.setState({activity: 'observations'})
		}

		const handleClickCom = (event) => {
			console.log('event', event)
			this.setState({activity: 'comments'})
		}

		const handleClickDI = (event) => {
			console.log('event', event)
			this.setState({activity: 'design_ideas'})
		}

		if (this.state.activity == 'all'){
			return(
			<div id = "unit">
				<div id = "buttons">
					<button onClick={handleClickAll} id = "active">All</button>
					<button onClick={handleClickObs}>Observations</button>
					<button onClick={handleClickCom}>Comments</button>
					<button onClick={handleClickDI}>Design Ideas</button>
				</div>
				<div>
						<StackedBarChart dataset = {data}/>
					</div>
			</div>
		)
		}

		else if (this.state.activity == 'observations'){
			return(
			<div id = "unit">
				<div id = "buttons">
					<button onClick={handleClickAll}>All</button>
					<button onClick={handleClickObs} id = "active">Observations</button>
					<button onClick={handleClickCom}>Comments</button>
					<button onClick={handleClickDI}>Design Ideas</button>
				</div>
				<div>
						<SimpleBarChart dataset = {data} dataKey="observations" color="#8884d8"/>
				</div>
			</div>
		)
		}

		else if (this.state.activity == 'comments'){
			return(
			<div id = "unit">
				<div id = "buttons">
					<button onClick={handleClickAll}>All</button>
					<button onClick={handleClickObs}>Observations</button>
					<button onClick={handleClickCom} id = "active">Comments</button>
					<button onClick={handleClickDI}>Design Ideas</button>
				</div>
				<div>
						<SimpleBarChart dataset = {data} dataKey="comments" color="#82ca9d"/>
				</div>
			</div>
		)
		}


		else {
			return(
			<div id = "unit">
				<div id = "buttons">
					<button onClick={handleClickAll}>All</button>
					<button onClick={handleClickObs}>Observations</button>
					<button onClick={handleClickCom}>Comments</button>
					<button onClick={handleClickDI} id = "active">Design Ideas</button>
				</div>
				<div>
						<SimpleBarChart dataset = {data} dataKey="design_ideas" color="#ffc658"/>
				</div>
			</div>
		)
		}
	}
}
