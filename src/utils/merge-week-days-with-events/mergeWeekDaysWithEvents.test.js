import mergeWeekDaysWithEvents from './mergeWeekDaysWithEvents';

test('Passing 2 empty arrays should return an empty array', () => {
    const weekDays = [];
    const events = [];
    expect(mergeWeekDaysWithEvents(weekDays, events)).toEqual([]);
});

test('Should be the same if events are empty', () => {
    const weekDays = [
        [{}],
        [{}, {}],
        [{}, {}, {}],
        [{}, {}, {}, {}]
    ];
    const events = [];
    const weekDaysWithEvents = mergeWeekDaysWithEvents(weekDays, events);

    expect(weekDaysWithEvents).toEqual(weekDays);
});


test('Should be adding correctly the assisted and missed array', () => {
    const weekDays = [
        [{number: 2, actualMonth: true}]
    ];
    const events = [{day: 2, assisted: ["Running"], missed: ["Swimming"]}];
    const weekDaysWithEvents = mergeWeekDaysWithEvents(weekDays, events);

    const expected = [
        [{number: 2, actualMonth: true, assisted: ["Running"], missed: ["Swimming"]}]
    ];

    expect(weekDaysWithEvents).toEqual(expected);
});

test('Should be not added to the previous month', () => {
    const weekDays = [
        [{number: 31, actualMonth: false}]
    ];
    const events = [{day: 31, assisted: ["Running", "Swimming"], missed: []}];
    const weekDaysWithEvents = mergeWeekDaysWithEvents(weekDays, events);

    const expected = [
        [{number: 31, actualMonth: false}]
    ];

    expect(weekDaysWithEvents).toEqual(expected);
});