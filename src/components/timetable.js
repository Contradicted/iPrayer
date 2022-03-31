import { getCurrentDate, getCurrentDayPlusDays } from "./Date";

const timetable = {
    [getCurrentDate]: {
        "date": getCurrentDate,
        "fajr_begins": "5:05",
        "fajr_jammah": "5:25",
        "zuhr_begins": "1:10",
        "zuhr_jammah": "1:30",
        "asr_begins": "4:36",
        "asr_jammah": "5:45",
        "maghrib_begins": "7:33",
        "maghrib_jammah": "7:40",
        "isha_begins": "8:50",
        "isha_jammah": "9:15"
    },
    [getCurrentDayPlusDays(1)]: {
        "date": getCurrentDate,
        "fajr_begins": "5:05",
        "fajr_jammah": "5:25",
        "zuhr_begins": "1:10",
        "zuhr_jammah": "1:30",
        "asr_begins": "4:36",
        "asr_jammah": "5:45",
        "maghrib_begins": "7:33",
        "maghrib_jammah": "7:40",
        "isha_begins": "8:50",
        "isha_jammah": "9:15"
    }
}
export default timetable;