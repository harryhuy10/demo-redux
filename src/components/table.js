import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
const { Column, ColumnGroup } = Table;

class Tables extends Component {
    constructor(props) {
        super(props);
     
    }
    data = [

        {
            id: '',
            email: '',
            first_name: '',
            last_name: '',
            avatar: ''
        },
    ];


    render() {
        if(this.props.data[0]) {
            this.data= this.props.data
        }
        return (<Table dataSource={this.data}>
          
                <Column title="First Name" dataIndex="first_name" key="first_name" />
                <Column title="Last Name" dataIndex="last_name" key="last_name" />
            
            <Column title="email" dataIndex="email" key="email" />
            <Column title="avatar" dataIndex="avatar" key="avatar" />
    
    
        </Table>)
    }
}
export default Tables