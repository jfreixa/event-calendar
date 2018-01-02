import moment from 'moment';

export default function createWeekDays () {
    return moment.weekdaysMin(true);
}