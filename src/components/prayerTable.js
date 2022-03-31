import React from "react";
import { getCurrentDate, getCurrentDayPlusDays } from "./Date";
import timetable from "./timetable";

// const highlight = prayer => ['Fajr', 'Zuhr'].includes(prayer) ? { backgroundColor: 'red' } : {}

function PrayerTable({ name }) {

    // console.log(highlight(name))
    return (
        <table style={{ marginBottom: "15px" }}>
            <thead>
                <tr>
                    <th></th>
                    <th>Athan</th>
                    <th>Iqama</th>
                </tr>
            </thead>
            <tbody>
                <tr id="row1" style={{ backgroundColor: name === 'Fajr' ? 'grey' : '' }}>
                    <td>Fajr</td>
                    <td>{timetable[getCurrentDayPlusDays(1)]["fajr_begins"]}</td>
                    <td>{timetable[getCurrentDayPlusDays(1)]["fajr_jammah"]}</td>
                </tr>
                <tr className="row2" style={{ backgroundColor: name === 'Zuhr' ? 'grey' : '' }}>
                    <td>Zuhr</td>
                    <td>{timetable[getCurrentDate]["zuhr_begins"]}</td>
                    <td>{timetable[getCurrentDate]["zuhr_jammah"]}</td>
                </tr>
                <tr className="row3" style={{ backgroundColor: name === 'Asr' ? 'grey' : '' }}>
                    <td>Asr</td>
                    <td>{timetable[getCurrentDate]["asr_begins"]}</td>
                    <td>{timetable[getCurrentDate]["asr_jammah"]}</td>
                </tr>
                <tr className="row4" style={{ backgroundColor: name === 'Maghrib' ? 'grey' : '' }}>
                    <td>Maghrib</td>
                    <td>{timetable[getCurrentDate]["maghrib_begins"]}</td>
                    <td>{timetable[getCurrentDate]["maghrib_jammah"]}</td>
                </tr>
                <tr className="row5" style={{ backgroundColor: name === 'Isha' ? 'grey' : '' }}>
                    <td>Isha</td>
                    <td>{timetable[getCurrentDate]["isha_begins"]}</td>
                    <td>{timetable[getCurrentDate]["isha_jammah"]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PrayerTable;