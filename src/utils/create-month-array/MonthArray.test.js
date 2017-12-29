import MonthArray from './MonthArray';

describe('Should create the correct arrays', () => {
    let monthArray;
    beforeAll(() => {
        monthArray = new MonthArray();
    });
    test('Last day of the month is Sunday', () => {
        let december2017 = [
            [
                { "actualMonth": false, "day": 27 },
                { "actualMonth": false, "day": 28 },
                { "actualMonth": false, "day": 29 },
                { "actualMonth": false, "day": 30 },
                { "actualMonth": true, "day": 1 },
                { "actualMonth": true, "day": 2 },
                { "actualMonth": true, "day": 3 }
            ],
            [
                { "actualMonth": true, "day": 4 },
                { "actualMonth": true, "day": 5 },
                { "actualMonth": true, "day": 6 },
                { "actualMonth": true, "day": 7 },
                { "actualMonth": true, "day": 8 },
                { "actualMonth": true, "day": 9 },
                { "actualMonth": true, "day": 10 }
            ],
            [
                { "actualMonth": true, "day": 11 },
                { "actualMonth": true, "day": 12 },
                { "actualMonth": true, "day": 13 },
                { "actualMonth": true, "day": 14 },
                { "actualMonth": true, "day": 15 },
                { "actualMonth": true, "day": 16 },
                { "actualMonth": true, "day": 17 }
            ],
            [
                { "actualMonth": true, "day": 18 },
                { "actualMonth": true, "day": 19 },
                { "actualMonth": true, "day": 20 },
                { "actualMonth": true, "day": 21 },
                { "actualMonth": true, "day": 22 },
                { "actualMonth": true, "day": 23 },
                { "actualMonth": true, "day": 24 }
            ],
            [
                { "actualMonth": true, "day": 25 },
                { "actualMonth": true, "day": 26 },
                { "actualMonth": true, "day": 27 },
                { "actualMonth": true, "day": 28 },
                { "actualMonth": true, "day": 29 },
                { "actualMonth": true, "day": 30 },
                { "actualMonth": true, "day": 31 }
            ]
        ];
        expect(monthArray.create(12, 2017)).toEqual(december2017);
    });

    test('First day of the month is Monday', () => {
        let may2017 = [
            [
                { "actualMonth": true, "day": 1 },
                { "actualMonth": true, "day": 2 },
                { "actualMonth": true, "day": 3 },
                { "actualMonth": true, "day": 4 },
                { "actualMonth": true, "day": 5 },
                { "actualMonth": true, "day": 6 },
                { "actualMonth": true, "day": 7 }
            ],
            [
                { "actualMonth": true, "day": 8 },
                { "actualMonth": true, "day": 9 },
                { "actualMonth": true, "day": 10 },
                { "actualMonth": true, "day": 11 },
                { "actualMonth": true, "day": 12 },
                { "actualMonth": true, "day": 13 },
                { "actualMonth": true, "day": 14 }
            ],
            [
                { "actualMonth": true, "day": 15 },
                { "actualMonth": true, "day": 16 },
                { "actualMonth": true, "day": 17 },
                { "actualMonth": true, "day": 18 },
                { "actualMonth": true, "day": 19 },
                { "actualMonth": true, "day": 20 },
                { "actualMonth": true, "day": 21 }
            ],
            [
                { "actualMonth": true, "day": 22 },
                { "actualMonth": true, "day": 23 },
                { "actualMonth": true, "day": 24 },
                { "actualMonth": true, "day": 25 },
                { "actualMonth": true, "day": 26 },
                { "actualMonth": true, "day": 27 },
                { "actualMonth": true, "day": 28 }
            ],
            [
                { "actualMonth": true, "day": 29 },
                { "actualMonth": true, "day": 30 },
                { "actualMonth": true, "day": 31 },
                { "actualMonth": false, "day": 1 },
                { "actualMonth": false, "day": 2 },
                { "actualMonth": false, "day": 3 },
                { "actualMonth": false, "day": 4 }
            ]
        ];
        expect(monthArray.create(5, 2017)).toEqual(may2017);
    });

    test('Leap year on February', () => {
        let february2016 = [
            [
                { "actualMonth": true, "day": 1 },
                { "actualMonth": true, "day": 2 },
                { "actualMonth": true, "day": 3 },
                { "actualMonth": true, "day": 4 },
                { "actualMonth": true, "day": 5 },
                { "actualMonth": true, "day": 6 },
                { "actualMonth": true, "day": 7 }
            ],
            [
                { "actualMonth": true, "day": 8 },
                { "actualMonth": true, "day": 9 },
                { "actualMonth": true, "day": 10 },
                { "actualMonth": true, "day": 11 },
                { "actualMonth": true, "day": 12 },
                { "actualMonth": true, "day": 13 },
                { "actualMonth": true, "day": 14 }
            ],
            [
                { "actualMonth": true, "day": 15 },
                { "actualMonth": true, "day": 16 },
                { "actualMonth": true, "day": 17 },
                { "actualMonth": true, "day": 18 },
                { "actualMonth": true, "day": 19 },
                { "actualMonth": true, "day": 20 },
                { "actualMonth": true, "day": 21 }
            ],
            [
                { "actualMonth": true, "day": 22 },
                { "actualMonth": true, "day": 23 },
                { "actualMonth": true, "day": 24 },
                { "actualMonth": true, "day": 25 },
                { "actualMonth": true, "day": 26 },
                { "actualMonth": true, "day": 27 },
                { "actualMonth": true, "day": 28 }
            ],
            [
                { "actualMonth": true, "day": 29 },
                { "actualMonth": false, "day": 1 },
                { "actualMonth": false, "day": 2 },
                { "actualMonth": false, "day": 3 },
                { "actualMonth": false, "day": 4 },
                { "actualMonth": false, "day": 5 },
                { "actualMonth": false, "day": 6 }
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