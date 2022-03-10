import React, { Component } from 'react';
import moment from 'moment';
import timetable from './timetable';

class NextJammahTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NextJammahTime: this.getNextJammahTime()
        };
    }

    stringToTime(stringTime) {
        return moment(stringTime, 'HH:mm a').format('HH:mm');
    }

    getCurrentTime() {
        return moment().format('HH:mm');
    }

    getNextJammahTime() {
        const todayTimetable = timetable;
        const currentTime = moment().format("h:mm a");

        for (const property in todayTimetable) {
            if (property.endsWith("_jammah")) {
                if (this.stringToTime(`${todayTimetable['fajr_jammah']} AM`) > currentTime) {
                    return {
                        name: 'Fajr',
                        time: `${todayTimetable['fajr_jammah']}`
                    }
                }
                if (`${todayTimetable['zuhr_jammah']} PM` > currentTime) {
                    return {
                        name: 'Zuhr',
                        time: `${todayTimetable['zuhr_jammah']}`
                    }
                }
                if (`${todayTimetable['asr_jammah']} PM` > currentTime) {
                    return {
                        name: 'Asr',
                        time: `${todayTimetable['asr_jammah']}`,
                    }
                }
                if (`${todayTimetable['maghrib_jammah']} PM` > currentTime) {
                    return {
                        name: 'Maghrib',
                        time: `${todayTimetable['maghrib_jammah']}`
                    }
                }
                if (`${todayTimetable['isha_jammah']} PM` > currentTime) {
                    return {
                        name: 'Isha',
                        time: `${todayTimetable['isha_jammah']}`
                    }
                }
            }
        }
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Next Jama'ah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.NextJammahTime.name}</td>
                    </tr>
                    <tr>
                        <td>{this.state.NextJammahTime.time}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default NextJammahTime;