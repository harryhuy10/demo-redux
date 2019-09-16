
import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction'
import { changeInput } from './actions/changeInput'
import { callingAPI } from './actions/getAPI'
import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
    
  }
  changeInput = (sth) => {
    console.log("sth", sth)
    this.props.changeInput(sth);
   
  }
  getAPI = () => {
    this.props.callingAPI();
  }
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    this.setState({ value: event.target.value });
  }
  handleClick() {
    this.props.history.push({
      pathname: '/child',
      state: {

      }
  });
  }
  
  render() {
    
    return (
      <div className="App">
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.getAPI}>getAPI</button>
        <p>Result</p>
        <p>{this.props.simpleReducer}</p>
        <p>{this.props.changeReducer}</p>
        

        <input type="text" value={this.state.value} name="name" onChange={this.handleSubmit} />
        <button onClick={() => this.changeInput(this.state.value)}>Test redux action</button>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <button >Click Me R</button>
      </div>
    );
  }
}
const  objectToArray = (obj) => Object.keys(obj).map((i) => obj[i])
const mapStateToProps = ({simpleReducer,changeReducer,getAPIReducer}) => ({
  simpleReducer:objectToArray(simpleReducer),
  changeReducer:objectToArray(changeReducer),
  getAPIReducer:objectToArray(getAPIReducer),
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  changeInput: (sth) => dispatch(changeInput(sth)),
  callingAPI: () => dispatch(callingAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);