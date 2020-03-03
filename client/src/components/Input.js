import React, { Component } from "react";
import { pvWattsForm } from './UserFunctions';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            address:'',
            system_capacity:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        

        const newRequest = {
            address: this.state.address,
            system_capacity: this.state.system_capacity
        }

        pvWattsForm(newRequest).then(res => {
            this.props.history.push(`/charts`)
        })
    }


    render() {
        return (
            <div className="container col-sm-8 mt-5">
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Your Address</label>

                        <input
                        type="text"
                        className="form-control" 
                        name='address'
                        placeholder="e.g. 1234 Example Ave Denver, CO 80000"
                        value={this.state.address}
                        onChange={this.onChange}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">System Capacity</label>
                        <input
                        type="text"
                        className="form-control"
                        name='system_capacity'
                        placeholder="100kW"
                        value={this.state.system_capacity}
                        onChange={this.onChange}
                        
                        />
                    </div>
                </form>
                <div className="card">
                    <div className="card-body">
                        For reference by square footage:
                        <br></br>
                        10,000 sqft ~ 50kW system
                        <br></br>
                        25,000 sqft ~ 120kW system
                        <br></br>
                        50,000 sqft ~ 200kW system
                    </div>
                </div>
                <br></br>
                <button
                onClick={this.onSubmit}
                type="submit"
                className="btn btn-lg btn-success btn-block"
                >
                Submit
                </button>
            </div>
        )
    }
}

export default Input;