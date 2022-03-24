import './App.css';
import Clock from 'react-live-clock';
import PrayerTable from './components/prayerTable';
import timetable from './components/timetable';
import moment from 'moment';
import { getCurrentDate, getCurrentDayPlusDays } from './components/Date';
import Countdown from 'react-countdown';

function getPrayerData() {

  const todayTimetable = timetable[getCurrentDate];
  const currentTime = moment(moment().format("YYYY-MM-DD hh:mm"))

  for (const property in todayTimetable) {
    if (property.endsWith("_jammah")) {
      if (currentTime.isBefore(moment(`${todayTimetable['fajr_jammah']} AM`, 'hh:mm'))) {
        return {
          name: 'Fajr',
          time: todayTimetable['fajr_jammah']
        }
      }

      if (currentTime.isBefore(moment(`${todayTimetable['zuhr_jammah']} PM`, 'hh:mm'))) {
        return {
          name: 'Zuhr',
          time: todayTimetable['zuhr_jammah']
        }
      }

      if (currentTime.isBefore(moment(`${todayTimetable['asr_jammah']} PM`, 'hh:mm'))) {
        return {
          name: 'Asr',
          time: todayTimetable['asr_jammah'],
        }
      }

      if (currentTime.isBefore(moment(`${todayTimetable['maghrib_jammah']} PM`, 'hh:mm'))) {
        return {
          name: 'Maghrib',
          time: todayTimetable['maghrib_jammah']
        }
      }

      if (currentTime.isBefore(moment(`${todayTimetable['isha_jammah']} PM`, 'hh:mm'))) {
        return {
          name: 'Isha',
          time: todayTimetable['isha_jammah']
        }
      }
    }
  }

  // Next Day
  let nextDayFajr = timetable[getCurrentDayPlusDays(1)]["fajr_jammah"];
  nextDayFajr = moment(nextDayFajr, 'hh:mm').add(1, 'day');
  return {
    name: 'Fajr',
    time: todayTimetable['fajr_jammah'],
    remaining: nextDayFajr
  }
}

function App() {

  return (
    <div className="App">
      <h1><Clock format={'hh:mm A'} ticking={true} /></h1>
      <h2>{getCurrentDate}</h2>

      <div>
        <PrayerTable />
        <h3>The call to prayer of {getPrayerData().name} is in</h3>
        <Countdown
          date={getPrayerData().remaining}
          intervalDelay={0}
          precision={3}
          daysInHours={true}
        />
      </div>
    </div>
  );
}
export default App;
