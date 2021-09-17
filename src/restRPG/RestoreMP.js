import React, { Component } from "react";


class RestoreMP extends Component {
    state = {
        mana: 0,
    }

    componentDidMount(){
        alert('Welcome')
    }

    restoremana = () => {
        this.setState((state) => { return { mana: state.mana + 100 } })
    }

    componentWillUnmount(){
        alert('Thank You')
    }

    render() {
        return (
            <>
                <div>
                    <p>Restore Your Mana</p>
                </div>
                <button onClick={this.restoremana}>Restore</button>
                <br />
                <h4>{this.state.mana} Restored</h4>
            </>
        );
    }
}
export default RestoreMP;