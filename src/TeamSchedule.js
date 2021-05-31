import React from 'react';
import {naiData, nashData} from "./data";

export default class TeamSchedule extends React.Component {
    constructor(props) {
        super(props);
        // team is props.childTeam
        this.state = {
            local_team_data: []
        }
    }

    // rerender when team changed
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.childTeam !== prevProps.childTeam) {
            this.createTeamSchedule();
        }
    }

    // display team schedule
    createTeamSchedule() {
        let holder_data_team = [];
        // nash
        if (this.props.childChildSchool == 0) {
            for (let team_data of nashData) {
                // console.log(team_data)
                if (team_data["Team Name"] == this.props.childTeam) {
                    holder_data_team.push(team_data);
                }
            }
        }
        else if (this.props.childChildSchool == 1) {
            for (let team_data of naiData) {
                // console.log(team_data)
                if (team_data["Team Name"] == this.props.childTeam) {
                    holder_data_team.push(team_data);
                }
            }
        }
        this.setState({local_team_data: holder_data_team});
    }

    render() {
        return (<div>
            <table class="table">
                <tr>
                    <th>Team Name</th>
                    <th>Time</th>
                    <th>Event (or team name)</th>
                    <th>Location</th>
                    <th>Roster</th>
                </tr>
            {

                this.state.local_team_data.map(function (d, idx) {
                    return (
                        <tr key={idx}>
                            <td>{d["Team Name"]}</td>
                            <td>{d["Time"]}</td>
                            <td>{d["Event (or team name)"]}</td>
                            <td>{d["Location"]}</td>
                            <td>{d["Roster"]}</td>
                        </tr>
                    )
                })
            }
            </table>
        </div>)
    }
}