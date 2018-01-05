import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default function createWeeks (month, year, actualDay) {
    const date = moment().month(month).year(year);
    const start = moment(date).startOf('month').startOf('week');
    const end = moment(date).endOf('month').endOf('week');

    const range = moment.range(start, end);
    const days = Array.from(range.by('day'))
        .map(day => {
            return {
                number: day.date(),
                actualMonth: day.month() === month,
                actualDay: day.isSame(moment(actualDay, "DD-MM-YYYY"), 'day')
            }
        });

    return days.reduce((rows, key, index) => (
        index % 7 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)
    ) && rows, []);
}
