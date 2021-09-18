import { Component } from "react"; 
import React from "react";
import 'antd/dist/antd.css';
import RestoreHP from "./RestoreHP";
import RestoreMP from "./RestoreMP";
import { Layout, Typography } from 'antd';

const { Header, Content} = Layout;
const { Text } = Typography;


class Menu extends Component {
    state = {
        restoreHP: false,
        restoreMP: false
    }

    RestoreHP1 = () => {
        this.setState(() => {
            return {
                restoreHP: !this.state.restoreHP
            }
        })
    }

    RestoreMP2 = () => {
        this.setState(() => {
            return {
                restoreMP: !this.state.restoreMP
            }
        })
    }

    render() {
        return (
            <>
         <Layout>  
        <Header style={{background:'##8b7d7b', justifyContent:'space-between', display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '20px 40px'}}>
          <Text style={{fontFamily:'Neufreit', color:'#FFFFFF', fontSize: '25px'}}>REST AREA</Text>
          <Text style={{fontFamily:'Monospace', color:'#FFFFFF', fontSize: '20px', margin: '0px'}}>Kelompok 13</Text>
        </Header>
        <Content style={{textAlign:'center', display: 'inline-block'}}>
        <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <button onClick={this.RestoreHP1}>{this.state.restoreHP ? 'Close' : 'Open'} Restore HP</button>
                        {this.state.restoreHP && <RestoreHP />}
                    </div>
                    <div style={{ width: "50%" }}>
                        <button onClick={this.RestoreMP2}>{this.state.restoreMP ? 'Close' : 'Open'} Restore MP</button>
                        {this.state.restoreMP && <RestoreMP />}
                    </div>
                </div>
        </Content>    
        
        </Layout>
            </>
        );
    }
}

export default Menu;