import React from 'react';
import axios from 'axios';
import {processing} from './getKeyData';
import ProcessData from './process_users';


export default class ReadDataAndViz extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    this.state.observations = null
    this.state.comments = null
    this.state.users = null
    this.state.ideas = null
  }

  componentDidMount(){
    axios.get('https://naturenet.firebaseio.com/observations.json')
      .then((response) => {
        this.setState({observations: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('https://naturenet.firebaseio.com/comments.json')
      .then((response) => {
        this.setState({comments: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('https://naturenet.firebaseio.com/users.json')
      .then((response) => {
        this.setState({users: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('https://naturenet.firebaseio.com/ideas.json')
      .then((response) => {
        this.setState({ideas: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    const observations = this.state.observations
    const comments = this.state.comments
    const users = this.state.users
    const ideas = this.state.ideas

    if (observations === null || comments === null || ideas === null || users === null){
      return <div>Loading...</div>
    } else {
      var keyData = processing(observations, comments, ideas, users)
      return (
        <div id = "content">
          <ProcessData data = {keyData}/>
        </div>
      )
    }
  }
}
