import './App.css';
import Clock from 'react-live-clock';
import PrayerTable from './components/prayerTable';
import timetable from './components/timetable';
import moment from 'moment';
import date_utils from './components/Date';
import Countdown from 'react-countdown';

function getPrayerData() {

  const todayTimetable = timetable;
  const currentTime = moment().format("h:mm a");

  // for (const property in todayTimetable) {
  //   if (property.endsWith("_jammah")) {
  //     const jammahTime = moment(todayTimetable[property], 'hh:mm');
  //     if (currentTime.isBefore(jammahTime)) {
  //       console.log("*** UPCOMING PRAYER ***")
  //       console.log("Prayer: " + property)
  //       console.log("Time: " + todayTimetable[property])
  //     }
  //   }
  // }

  function stringToTime(stringTime) {
    return moment(stringTime, 'HH:mm a').format('HH:mm');
  }

  for (const property in todayTimetable) {
    if (property.endsWith("_jammah")) {
      if (stringToTime(`${todayTimetable['fajr_jammah']} AM`) > currentTime) {
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

console.log("*** UPCOMING PRAYER ***")
console.log("Prayer: " + getPrayerData().name)
console.log("Time: " + getPrayerData().time)

function App() {
  return (
    <div className="App">
      <h1><Clock format={'hh:mm A'} ticking={true} /></h1>
      <h2>{date_utils}</h2>

      <div>
        <PrayerTable />
        <h3>The call to prayer for {getPrayerData().name} is in</h3>
        <Countdown
          date={getPrayerData()}
          intervalDelay={0}
          precision={3}
          daysInHours={true}
        />
      </div>
    </div>
  );
}
export default App;
