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
        getAPIReducer: getAPIReducer,
  })
  const mapDispatchToProps = dispatch => ({
 
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Childrent);