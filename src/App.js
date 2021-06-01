import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import PWSchedule from './PWSchedule.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

// 0 = NASH, 1 = NAI
const school_options = [
    {
       label: "Choose School",
       value: -1
    },
    {
        label: 'NASH',
        value: 0
    },
    {
        label: 'NAI',
        value: 1
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: -1,
            school_label: "Choose School"
        }
    }

    handleSelect = (e) => {
        this.setState({school: e.target.value});
        this.setState({school_label: e.target.label});

    }

    render() {
        return <div className="App">
            <h1>Welcome to NA Project Water Schedule</h1>

            <h2>Select Your School</h2>
            <div className="select-container">
                <select value={this.state.school_label} onChange={this.handleSelect}>
                    {school_options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <PWSchedule childSchool={this.state.school}/>
        </div>
    }
}
