import './App.css';
import React from 'react';
import Clock from 'react-live-clock';
import PrayerTable from './components/prayerTable';
import timetable from './components/timetable';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import moment from 'moment';
import { getCurrentDate, getCurrentDayPlusDays } from './components/Date';
import Countdown, { zeroPad } from 'react-countdown';

// Converts String to Time
function stringToTime(stringTime) {
  return moment(moment(stringTime, 'HH:mm a').format('YYYY-MM-DD HH:mm'));
}

// Calculates the Next Jammah Time
function getPrayerData() {

  const todayTimetable = timetable[getCurrentDate];
  const currentTime = moment(moment().format("YYYY-MM-DD HH:mm"))

  for (const property in todayTimetable) {
    if (property.endsWith("_jammah")) {
      if (currentTime.isBefore(stringToTime(`${todayTimetable['fajr_jammah']} AM`))) {
        return {
          name: 'Fajr',
          time: todayTimetable['fajr_jammah'],
          remaining: stringToTime(`${todayTimetable['fajr_jammah']} AM`)
        }
      }

      if (currentTime.isBefore(stringToTime(`${todayTimetable['zuhr_jammah']} PM`))) {
        return {
          name: 'Zuhr',
          time: todayTimetable['zuhr_jammah'],
          remaining: stringToTime(`${todayTimetable['zuhr_jammah']} PM`)
        }
      }

      if (currentTime.isBefore(stringToTime(`${todayTimetable['asr_jammah']} PM`))) {
        return {
          name: 'Asr',
          time: todayTimetable['asr_jammah'],
          remaining: stringToTime(`${todayTimetable['asr_jammah']} PM`)
        }
      }

      if (currentTime.isBefore(stringToTime(`${todayTimetable['maghrib_jammah']} PM`))) {
        return {
          name: 'Maghrib',
          time: todayTimetable['maghrib_jammah'],
          remaining: stringToTime(`${todayTimetable['maghrib_jammah']} PM`)
        }
      }

      if (currentTime.isBefore(stringToTime(`${todayTimetable['isha_jammah']} PM`))) {
        return {
          name: 'Isha',
          time: todayTimetable['isha_jammah'],
          remaining: stringToTime(`${todayTimetable['isha_jammah']} PM`)
        }
      }
    }
  }

  // Next Day
  let nextDayFajr = timetable[getCurrentDayPlusDays(1)]["fajr_jammah"];
  nextDayFajr = moment(nextDayFajr, 'HH:mm').add(1, 'day');
  return {
    name: 'Fajr',
    time: todayTimetable['fajr_jammah'],
    remaining: nextDayFajr,
  }
}

// Callback function
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>The call to prayer has started</span>
  } else {
    return (
      <div>
        <div className='coming-soon'>
          <div>
            <h2>The call to prayer of <u>{getPrayerData().name}</u> is in</h2>
            <div className='countdown'>
              <div className='countdown-hour'>
                <h3 className='hour'>{zeroPad(hours)}:</h3>
                <h3>Hour</h3>
              </div>
              <div className='countdown-minute'>
                <h3 className='minute'>{zeroPad(minutes)}:</h3>
                <h3>Minute</h3>
              </div>
              <div className='countdown-second'>
                <h3 className='second'>{zeroPad(seconds)}</h3>
                <h3>Second</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

console.log(getPrayerData())

function App() {

  const { remaining, name } = getPrayerData();

  return (
    <div className="App">
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div>
            <h1><Clock format={'hh:mm A'} ticking={true} /></h1>
            <h2>{getCurrentDate}</h2>
            <PrayerTable
              name={name}
            />
          </div>
          <div>
            <Countdown
              key={remaining}
              date={remaining}
              intervalDelay={0}
              precision={3}
              daysInHours={true}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
