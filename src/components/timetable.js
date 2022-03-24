import { getCurrentDate, getCurrentDayPlusDays } from "./Date";

const timetable = {
    [getCurrentDate]: {
        "date": getCurrentDate,
        "fajr_begins": "4:50",
        "fajr_jammah": "5:00",
        "zuhr_begins": "12:20",
        "zuhr_jammah": "1:00",
        "asr_begins": "3:05",
        "asr_jammah": "4:15",
        "maghrib_begins": "5:59",
        "maghrib_jammah": "6:03",
        "isha_begins": "7:00",
        "isha_jammah": "7:30"
    },
    [getCurrentDayPlusDays(1)]: {
        "date": getCurrentDate,
        "fajr_begins": "4:50",
        "fajr_jammah": "5:00",
        "zuhr_begins": "12:20",
        "zuhr_jammah": "1:00",
        "asr_begins": "3:05",
        "asr_jammah": "4:15",
        "maghrib_begins": "5:59",
        "maghrib_jammah": "6:03",
        "isha_begins": "7:00",
        "isha_jammah": "7:30"
    }
}
export default timetable;