import React, { Component } from "react";


class RestoreHP extends Component {
    state = {
        health: 0
    }

    componentDidMount(){
        alert('Welcome')
    }

    restorehealth = () => {
        this.setState((state) => { return { health: state.health + 100 } })
    }

    componentWillUnmount(){
        alert('Thank You')
    }

    render() {
        return (
            <>
                <div>
                    <p>Restore Your Health</p>
                </div>
                <button onClick={this.restorehealth}>Restore</button>
                <br />
                <h4>{this.state.health} Restored</h4>
            </>
        );
    }
}
export default RestoreHP;