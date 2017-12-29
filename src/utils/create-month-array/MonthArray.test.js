import MonthArray from './MonthArray';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

describe('Should create the correct arrays', () => {
    let monthArray;
    beforeAll(() => {
        monthArray = new MonthArray();
    });
    test('Last day of the month is Sunday', () => {
        let december2017 = [
            [
                { "actualMonth": false, "number": 27 },
                { "actualMonth": false, "number": 28 },
                { "actualMonth": false, "number": 29 },
                { "actualMonth": false, "number": 30 },
                { "actualMonth": true, "number": 1 },
                { "actualMonth": true, "number": 2 },
                { "actualMonth": true, "number": 3 }
            ],
            [
                { "actualMonth": true, "number": 4 },
                { "actualMonth": true, "number": 5 },
                { "actualMonth": true, "number": 6 },
                { "actualMonth": true, "number": 7 },
                { "actualMonth": true, "number": 8 },
                { "actualMonth": true, "number": 9 },
                { "actualMonth": true, "number": 10 }
            ],
            [
                { "actualMonth": true, "number": 11 },
                { "actualMonth": true, "number": 12 },
                { "actualMonth": true, "number": 13 },
                { "actualMonth": true, "number": 14 },
                { "actualMonth": true, "number": 15 },
                { "actualMonth": true, "number": 16 },
                { "actualMonth": true, "number": 17 }
            ],
            [
                { "actualMonth": true, "number": 18 },
                { "actualMonth": true, "number": 19 },
                { "actualMonth": true, "number": 20 },
                { "actualMonth": true, "number": 21 },
                { "actualMonth": true, "number": 22 },
                { "actualMonth": true, "number": 23 },
                { "actualMonth": true, "number": 24 }
            ],
            [
                { "actualMonth": true, "number": 25 },
                { "actualMonth": true, "number": 26 },
                { "actualMonth": true, "number": 27 },
                { "actualMonth": true, "number": 28 },
                { "actualMonth": true, "number": 29 },
                { "actualMonth": true, "number": 30 },
                { "actualMonth": true, "number": 31 }
            ]
        ];
        expect(monthArray.create(12, 2017)).toEqual(december2017);
    });

    test('First day of the month is Monday', () => {
        let may2017 = [
            [
                { "actualMonth": true, "number": 1 },
                { "actualMonth": true, "number": 2 },
                { "actualMonth": true, "number": 3 },
                { "actualMonth": true, "number": 4 },
                { "actualMonth": true, "number": 5 },
                { "actualMonth": true, "number": 6 },
                { "actualMonth": true, "number": 7 }
            ],
            [
                { "actualMonth": true, "number": 8 },
                { "actualMonth": true, "number": 9 },
                { "actualMonth": true, "number": 10 },
                { "actualMonth": true, "number": 11 },
                { "actualMonth": true, "number": 12 },
                { "actualMonth": true, "number": 13 },
                { "actualMonth": true, "number": 14 }
            ],
            [
                { "actualMonth": true, "number": 15 },
                { "actualMonth": true, "number": 16 },
                { "actualMonth": true, "number": 17 },
                { "actualMonth": true, "number": 18 },
                { "actualMonth": true, "number": 19 },
                { "actualMonth": true, "number": 20 },
                { "actualMonth": true, "number": 21 }
            ],
            [
                { "actualMonth": true, "number": 22 },
                { "actualMonth": true, "number": 23 },
                { "actualMonth": true, "number": 24 },
                { "actualMonth": true, "number": 25 },
                { "actualMonth": true, "number": 26 },
                { "actualMonth": true, "number": 27 },
                { "actualMonth": true, "number": 28 }
            ],
            [
                { "actualMonth": true, "number": 29 },
                { "actualMonth": true, "number": 30 },
                { "actualMonth": true, "number": 31 },
                { "actualMonth": false, "number": 1 },
                { "actualMonth": false, "number": 2 },
                { "actualMonth": false, "number": 3 },
                { "actualMonth": false, "number": 4 }
            ]
        ];
        expect(monthArray.create(5, 2017)).toEqual(may2017);
    });

    test('Leap year on February', () => {
        let february2016 = [
            [
                { "actualMonth": true, "number": 1 },
                { "actualMonth": true, "number": 2 },
                { "actualMonth": true, "number": 3 },
                { "actualMonth": true, "number": 4 },
                { "actualMonth": true, "number": 5 },
                { "actualMonth": true, "number": 6 },
                { "actualMonth": true, "number": 7 }
            ],
            [
                { "actualMonth": true, "number": 8 },
                { "actualMonth": true, "number": 9 },
                { "actualMonth": true, "number": 10 },
                { "actualMonth": true, "number": 11 },
                { "actualMonth": true, "number": 12 },
                { "actualMonth": true, "number": 13 },
                { "actualMonth": true, "number": 14 }
            ],
            [
                { "actualMonth": true, "number": 15 },
                { "actualMonth": true, "number": 16 },
                { "actualMonth": true, "number": 17 },
                { "actualMonth": true, "number": 18 },
                { "actualMonth": true, "number": 19 },
                { "actualMonth": true, "number": 20 },
                { "actualMonth": true, "number": 21 }
            ],
            [
                { "actualMonth": true, "number": 22 },
                { "actualMonth": true, "number": 23 },
                { "actualMonth": true, "number": 24 },
                { "actualMonth": true, "number": 25 },
                { "actualMonth": true, "number": 26 },
                { "actualMonth": true, "number": 27 },
                { "actualMonth": true, "number": 28 }
            ],
            [
                { "actualMonth": true, "number": 29 },
                { "actualMonth": false, "number": 1 },
                { "actualMonth": false, "number": 2 },
                { "actualMonth": false, "number": 3 },
                { "actualMonth": false, "number": 4 },
                { "actualMonth": false, "number": 5 },
                { "actualMonth": false, "number": 6 }
            ]
        ];
        expect(monthArray.create(2, 2016)).toEqual(february2016);
    });

    test('Actual month property in previous month is false', () => {
        let february2015 = monthArray.create(2, 2015);
        const firstDay = february2015[0];
        expect(firstDay.actualMonth).toBeFalsy();
    });

    test('Actual month property in next month is false', () => {
        const february2015 = monthArray.create(2, 2015);
        const lastDay = february2015[february2015.length - 1]
        expect(lastDay.actualMonth).toBeFalsy();
    });
});