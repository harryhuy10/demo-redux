<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Childrent extends Component {
    render() {
        return (
        <div>
          <p> {JSON.stringify(this.props.simple)}</p>
        <p> {JSON.stringify(this.props.change)}</p>
        <p> {JSON.stringify(this.props.getAPIReducer)}</p>
        </div>
        )
    }
}
const mapStateToProps = ({simpleReducer,changeReducer,getAPIReducer}) => ({
        simple: simpleReducer,
        change: changeReducer,
        getAPIReducer: getAPIReducer
  })
  const mapDispatchToProps = dispatch => ({
 
  })
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Childrent extends Component {
    render() {
        return (
        <div>
          <p> {JSON.stringify(this.props.simple)}</p>
        <p> {JSON.stringify(this.props.change)}</p>
        <p> {JSON.stringify(this.props.getAPIReducer)}</p>
        </div>
        )
    }
}
const mapStateToProps = ({simpleReducer,changeReducer,getAPIReducer}) => ({
        simple: simpleReducer,
        change: changeReducer,
        getAPIReducer: getAPIReducer
  })
  const mapDispatchToProps = dispatch => ({
 
  })
>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
  export default connect(mapStateToProps, mapDispatchToProps)(Childrent);