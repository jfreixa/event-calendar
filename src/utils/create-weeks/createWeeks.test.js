import createWeeks from './createWeeks';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

describe('Should create the correct arrays', () => {
    test('Last day of the month is Sunday', () => {
        let december2017 = [
            [
                { "actualDay": false, "actualMonth": false, "number": 27 },
                { "actualDay": false, "actualMonth": false, "number": 28 },
                { "actualDay": false, "actualMonth": false, "number": 29 },
                { "actualDay": false, "actualMonth": false, "number": 30 },
                { "actualDay": false, "actualMonth": true, "number": 1 },
                { "actualDay": false, "actualMonth": true, "number": 2 },
                { "actualDay": false, "actualMonth": true, "number": 3 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 4 },
                { "actualDay": false, "actualMonth": true, "number": 5 },
                { "actualDay": false, "actualMonth": true, "number": 6 },
                { "actualDay": false, "actualMonth": true, "number": 7 },
                { "actualDay": false, "actualMonth": true, "number": 8 },
                { "actualDay": false, "actualMonth": true, "number": 9 },
                { "actualDay": false, "actualMonth": true, "number": 10 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 11 },
                { "actualDay": false, "actualMonth": true, "number": 12 },
                { "actualDay": false, "actualMonth": true, "number": 13 },
                { "actualDay": false, "actualMonth": true, "number": 14 },
                { "actualDay": false, "actualMonth": true, "number": 15 },
                { "actualDay": false, "actualMonth": true, "number": 16 },
                { "actualDay": false, "actualMonth": true, "number": 17 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 18 },
                { "actualDay": false, "actualMonth": true, "number": 19 },
                { "actualDay": false, "actualMonth": true, "number": 20 },
                { "actualDay": false, "actualMonth": true, "number": 21 },
                { "actualDay": false, "actualMonth": true, "number": 22 },
                { "actualDay": false, "actualMonth": true, "number": 23 },
                { "actualDay": false, "actualMonth": true, "number": 24 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 25 },
                { "actualDay": false, "actualMonth": true, "number": 26 },
                { "actualDay": false, "actualMonth": true, "number": 27 },
                { "actualDay": false, "actualMonth": true, "number": 28 },
                { "actualDay": false, "actualMonth": true, "number": 29 },
                { "actualDay": false, "actualMonth": true, "number": 30 },
                { "actualDay": false, "actualMonth": true, "number": 31 }
            ]
        ];
        expect(createWeeks(12, 2017, "01-01-2000")).toEqual(december2017);
    });

    test('First day of the month is Monday', () => {
        let may2017 = [
            [
                { "actualDay": false, "actualMonth": true, "number": 1 },
                { "actualDay": false, "actualMonth": true, "number": 2 },
                { "actualDay": false, "actualMonth": true, "number": 3 },
                { "actualDay": false, "actualMonth": true, "number": 4 },
                { "actualDay": false, "actualMonth": true, "number": 5 },
                { "actualDay": false, "actualMonth": true, "number": 6 },
                { "actualDay": false, "actualMonth": true, "number": 7 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 8 },
                { "actualDay": false, "actualMonth": true, "number": 9 },
                { "actualDay": false, "actualMonth": true, "number": 10 },
                { "actualDay": false, "actualMonth": true, "number": 11 },
                { "actualDay": false, "actualMonth": true, "number": 12 },
                { "actualDay": false, "actualMonth": true, "number": 13 },
                { "actualDay": false, "actualMonth": true, "number": 14 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 15 },
                { "actualDay": false, "actualMonth": true, "number": 16 },
                { "actualDay": false, "actualMonth": true, "number": 17 },
                { "actualDay": false, "actualMonth": true, "number": 18 },
                { "actualDay": false, "actualMonth": true, "number": 19 },
                { "actualDay": false, "actualMonth": true, "number": 20 },
                { "actualDay": false, "actualMonth": true, "number": 21 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 22 },
                { "actualDay": false, "actualMonth": true, "number": 23 },
                { "actualDay": false, "actualMonth": true, "number": 24 },
                { "actualDay": false, "actualMonth": true, "number": 25 },
                { "actualDay": false, "actualMonth": true, "number": 26 },
                { "actualDay": false, "actualMonth": true, "number": 27 },
                { "actualDay": false, "actualMonth": true, "number": 28 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 29 },
                { "actualDay": false, "actualMonth": true, "number": 30 },
                { "actualDay": false, "actualMonth": true, "number": 31 },
                { "actualDay": false, "actualMonth": false, "number": 1 },
                { "actualDay": false, "actualMonth": false, "number": 2 },
                { "actualDay": false, "actualMonth": false, "number": 3 },
                { "actualDay": false, "actualMonth": false, "number": 4 }
            ]
        ];
        expect(createWeeks(5, 2017, "01-01-2000")).toEqual(may2017);
    });

    test('Leap year on February', () => {
        let february2016 = [
            [
                { "actualDay": false, "actualMonth": true, "number": 1 },
                { "actualDay": false, "actualMonth": true, "number": 2 },
                { "actualDay": false, "actualMonth": true, "number": 3 },
                { "actualDay": false, "actualMonth": true, "number": 4 },
                { "actualDay": false, "actualMonth": true, "number": 5 },
                { "actualDay": false, "actualMonth": true, "number": 6 },
                { "actualDay": false, "actualMonth": true, "number": 7 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 8 },
                { "actualDay": false, "actualMonth": true, "number": 9 },
                { "actualDay": false, "actualMonth": true, "number": 10 },
                { "actualDay": false, "actualMonth": true, "number": 11 },
                { "actualDay": false, "actualMonth": true, "number": 12 },
                { "actualDay": false, "actualMonth": true, "number": 13 },
                { "actualDay": false, "actualMonth": true, "number": 14 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 15 },
                { "actualDay": false, "actualMonth": true, "number": 16 },
                { "actualDay": false, "actualMonth": true, "number": 17 },
                { "actualDay": false, "actualMonth": true, "number": 18 },
                { "actualDay": false, "actualMonth": true, "number": 19 },
                { "actualDay": false, "actualMonth": true, "number": 20 },
                { "actualDay": false, "actualMonth": true, "number": 21 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 22 },
                { "actualDay": false, "actualMonth": true, "number": 23 },
                { "actualDay": false, "actualMonth": true, "number": 24 },
                { "actualDay": false, "actualMonth": true, "number": 25 },
                { "actualDay": false, "actualMonth": true, "number": 26 },
                { "actualDay": false, "actualMonth": true, "number": 27 },
                { "actualDay": false, "actualMonth": true, "number": 28 }
            ],
            [
                { "actualDay": false, "actualMonth": true, "number": 29 },
                { "actualDay": false, "actualMonth": false, "number": 1 },
                { "actualDay": false, "actualMonth": false, "number": 2 },
                { "actualDay": false, "actualMonth": false, "number": 3 },
                { "actualDay": false, "actualMonth": false, "number": 4 },
                { "actualDay": false, "actualMonth": false, "number": 5 },
                { "actualDay": false, "actualMonth": false, "number": 6 }
            ]
        ];
        expect(createWeeks(2, 2016, "01-01-2000")).toEqual(february2016);
    });

    test('Actual month property in previous month is false', () => {
        let february2015 = createWeeks(2, 2015, "01-01-2000");
        const firstDay = february2015[0];
        expect(firstDay.actualMonth).toBeFalsy();
    });

    test('Actual month property in next month is false', () => {
        const february2015 = createWeeks(2, 2015, "01-01-2000");
        const lastDay = february2015[february2015.length - 1]
        expect(lastDay.actualMonth).toBeFalsy();
    });

    test('Actual day is correctly setted', () => {
        const january2018 = createWeeks(1, 2018, "01-01-2018");
        const today = january2018
            .reduce((days, week) => days.concat(week), [])
            .find(day => day.number === 1);
        expect(today.actualDay).toBeTruthy();
    });

    test('Actual day is not in the current month', () => {
        const january2018 = createWeeks(1, 2018, "01-01-2019");
        const noActualDay = january2018
            .reduce((days, week) => days.concat(week), [])
            .some(day => day.actualDay === true);
        expect(noActualDay).toBeFalsy();
    });
});