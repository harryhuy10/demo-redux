
import logo from './logo.svg';
import './App.css';

import { simpleAction,hardAction } from './actions/simpleAction'
import { changeInput } from './actions/changeInput'
import { callingAPI } from './actions/getAPI'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Button,Input  } from 'antd';
import Tables from './components/table'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
    
  }
  hardAction = (event) => {
    this.props.hardAction();
    
  }
  changeInput = (sth) => {
    console.log("sth", sth)
    this.props.changeInput(sth);
   
  }
  getAPI = () => {
     this.props.callingAPI().then(()=>{
      if(this.props.getAPIReducer.result){
        this.setState({
          ...this.state,
          getAPIReducer:this.props.getAPIReducer.result
        })
      }
      console.log("huy",this.props.getAPIReducer)
    });
    
    
  }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      getAPIReducer: [],
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
      

  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}><div className="App">
        <Button  type="primary" onClick={this.simpleAction}>Test redux action</Button >
        <Button  type="danger" onClick={this.getAPI.bind(this)}>getAPI</Button>
        <p>Result</p>
        <p>{this.props.simpleReducer}</p>
        <p>{this.props.changeReducer}</p>
        <Tables data = {this.state.getAPIReducer}/>
        {/* <p> {JSON.stringify(this.props.getAPIReducer)}</p> */}
        <Input  type="text" value={this.state.value} name="name" onChange={this.handleSubmit} />
        
        <Button type="primary" onClick={() => this.changeInput(this.state.value)}>Test redux action</Button >
        <Button type="dash" onClick={this.handleClick.bind(this)}>Click Me</Button>
        <Button type="danger" onClick={this.hardAction.bind(this)}>Click Me R</Button>
      </div></Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
      
    
  }
}
const  objectToArray = (obj) => Object.keys(obj).map((i) => obj[i])
const mapStateToProps = ({simpleReducer,changeReducer,getAPIReducer}) => ({
  simpleReducer:objectToArray(simpleReducer),
  changeReducer:objectToArray(changeReducer),
  getAPIReducer:getAPIReducer,
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  changeInput: (sth) => dispatch(changeInput(sth)),
  callingAPI: () => dispatch(callingAPI()),
  hardAction: () => dispatch(hardAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);