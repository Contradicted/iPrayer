import moment from "moment";

export const getCurrentDate = moment().format('dddd MMM Do, YYYY');

export const getCurrentDayPlusDays = (days) => moment().add(days, 'days').format("MM/DD/YYYY");
