import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';


import CardProduct from './container/CardProduct/CardProduct';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // const Card = (props) => {
    //   return (
    //     <div class="card">
    //       <p class="name">{props.name}</p>
    //       <p class="job">{props.job}</p>
    //     </div>
    //   )
    // }
    
    // const App =()=>{
    //   return (
    //     <div>
    //       <Card name="Siti" job="Mahasiswa" />
    //       <Card name="Qotijah" job="Student" />
    //     </div>
    //   )
    // }
    //ReactDOM.render(<App/>,document.querySelector('#root'))
    
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  state = {
    order: 4,
    name: 'sitiq'
}
//diganti props
// handlePlus=()=>{
//     // alert ('Plus Button');
//     this.setState({
//         order: this.state.order + 1
//     })
// }

// handleMinus=()=>{
//     // alert ('Minus Button');
//     if(this.state.order > 0){
//     this.setState({
//         order: this.state.order - 1
//         })
//     }
// }

handleCounterChange =(newValue) => {
    this.setState({
        order:newValue
    })

}

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Siti</Menu.Item>
              <Menu.Item key="4">Qotijah</Menu.Item>
              <Menu.Item key="5">SQ</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <FileOutlined />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Siti</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* tambahan */}
              {/* <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                  <Card title="Student" bordered={false}>
                  Siti
                  </Card>
                  </Col>
                <Col span={8}>
                  <Card title="Dosen" bordered={false}>
                  Bp.
                 </Card>
                </Col>
                <Col span={8}>
                <Card title="Keterangan" bordered={false}>
                V
                </Card>
                </Col>
                </Row>
                </div> */}
      
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <b>SHOPPING</b>
                        {/* <img src="" alt=""/> */}
                    </div>
                <div className="troley">
                    <img src="https://icon-icons.com/icons2/67/PNG/128/shoppingcart_compra_13339.png" alt=""/>
                    <div className="count">{this.state.order}</div>
                  </div>
                </div>
                <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)} />
            </Fragment>   
        
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Siti Q</Footer>
        </Layout>
      </Layout>
    );
  }
}
  
export default App;
