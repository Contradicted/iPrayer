import React from "react";
import timetable from "./timetable";

function PrayerTable() {
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
                <tr>
                    <td>Fajr</td>
                    <td>{timetable["fajr_begins"]}</td>
                    <td>{timetable["fajr_jammah"]}</td>
                </tr>
                <tr>
                    <td>Zuhr</td>
                    <td>{timetable["zuhr_begins"]}</td>
                    <td>{timetable["zuhr_jammah"]}</td>
                </tr>
                <tr>
                    <td>Asr</td>
                    <td>{timetable["asr_begins"]}</td>
                    <td>{timetable["asr_jammah"]}</td>
                </tr>
                <tr>
                    <td>Maghrib</td>
                    <td>{timetable["maghrib_begins"]}</td>
                    <td>{timetable["maghrib_jammah"]}</td>
                </tr>
                <tr>
                    <td>Isha</td>
                    <td>{timetable["isha_begins"]}</td>
                    <td>{timetable["isha_jammah"]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PrayerTable;