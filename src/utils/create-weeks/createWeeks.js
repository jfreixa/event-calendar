import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default function createWeeks (month, year) {
    let momentMonth = month - 1;

    const date = moment().month(momentMonth).year(year);
    const start = moment(date).startOf('month').startOf('week');
    const end = moment(date).endOf('month').endOf('week');

    const range = moment.range(start, end);
    const days = Array.from(range.by('day'))
        .map(day => {
            return {
                number: day.date(),
                actualMonth: day.month() === momentMonth,
                actualDay: day.isSame(moment(), 'day')
            }
        });

    return days.reduce((rows, key, index) => (
        index % 7 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)
    ) && rows, []);
}
