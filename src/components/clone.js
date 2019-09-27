import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {postAPI,putAPI} from '../actions/clone'
import { connect } from 'react-redux';

class Clone extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
                    name:'',
                    job:""
                


        }
     
    }
    handleSubmit(){
        this.props.postAPI(this.state)
        
    }
    handleEdit(){
        this.props.postAPI(this.state)
        
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
      })
    }

    render() {
       
        return (<div>
  
            <Form className="login-form">
        <Form.Item>
          
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}
            />,
         
        </Form.Item>
        <Form.Item>
         
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="job" name="job" value={this.state.job} onChange={this.handleChange.bind(this)}
            />,
         
        </Form.Item>
        <Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit.bind(this)}>
            Create
          </Button>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleEdit.bind(this)}>
            EDIT
          </Button>
         
        </Form.Item>
      </Form></div>)
    }
}
const mapStateToProps = ({clone}) => ({
    clone: clone
    
})
const mapDispatchToProps = dispatch => ({
 
  postAPI: (sth) => dispatch(postAPI(sth)),
  putAPI:(sth) => dispatch(putAPI(sth)),
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Clone);


