import moment from 'moment'
moment.locale('es')

export default class MonthArray {
    create(month, year) {
        let momentMonth = month - 1;
        const date = moment().month(momentMonth).year(year);
        const first = moment(date).startOf('month').startOf('week');
        const last = moment(date).endOf('month').endOf('week');

        let iterateDate = moment(first).subtract(1, 'days');
        let monthArray = [];

        do {
            iterateDate.add(1, 'day');
            monthArray.push({
                day: iterateDate.date(),
                actualMonth: iterateDate.month() === momentMonth
            })
        } while (!iterateDate.isSame(last, 'day'));

        return monthArray;
    }
}
