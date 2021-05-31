import React from 'react';
import {naiData, nashData} from "./data";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import TeamSchedule from "./TeamSchedule";

export default class PWSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_of_teams: [],
            team: "Select Team",
        };

    }

    // rerender when team changed
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.childSchool !== prevProps.childSchool) {
            this.createTeamsList();
        }
    }

    // generate team list of school
    createTeamsList() {
        let team_list = [];
        // nash
        if (this.props.childSchool == 0) {
            for (let team_data of nashData) {
                for (const [key, value] of Object.entries(team_data)) {
                    if (key === "Team Name") {
                        team_list.push(value);
                    }
                }
            }
        }
        // nai
        else if (this.props.childSchool == 1) {
            for (let team_data of naiData) {
                for (const [key, value] of Object.entries(team_data)) {
                    if (key === "Team Name") {
                        team_list.push(value);
                    }
                }
            }
        }
        // convert to set
        let team_list_unique = [...new Set(team_list)];

        // set state
        this.setState({list_of_teams: team_list_unique});
    }

    // handle change of team
    handleChangeTeam = (e) => {
        this.setState({team: e.target.value});
    }

    render() {
        return <div>
            <h2>Select Team</h2>
            <div className="select-container">
                <select value={this.state.team} onChange={this.handleChangeTeam}>
                    {this.state.list_of_teams.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <br/>
            <hr />
            <div>
                <TeamSchedule childTeam={this.state.team} childChildSchool={this.props.childSchool}/>
            </div>

        </div>
    }

}