import { Component } from "react"; 
import React from "react";
import RestoreHP from "./RestoreHP";
import RestoreMP from "./RestoreMP";


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
                <h1>Rest Area</h1>
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
            </>
        );
    }
}

export default Menu;