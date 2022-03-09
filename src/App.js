import './App.css';
import Clock from 'react-live-clock';
import PrayerTable from './components/prayerTable';
import timetable from './components/timetable';
import moment from 'moment';
import date_utils from './components/Date';
import Countdown from 'react-countdown';

function getPrayerData() {
  const todayTimetable = timetable;
  const currentTime = moment(moment().format("YYYY-MM-DD hh:mm"));

  for (const property in todayTimetable) {
    if (property.endsWith("_jammah")) {
      const jammahTime = moment(todayTimetable[property], 'hh:mm');
      if (currentTime.isBefore(jammahTime)) {
        console.log(jammahTime);
      }
    }
  }
}

getPrayerData();

function App() {
  return (
    <div className="App">
      <h1><Clock format={'hh:mm'} ticking={true} /></h1>
      <h2>{date_utils}</h2>

      <div>
        <PrayerTable />
        <Countdown
          date={moment().add(10, 'second')}
          intervalDelay={0}
          precision={3}
          daysInHours={true}
        />
      </div>
    </div>
  );
}
export default App;
