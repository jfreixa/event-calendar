import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/es';

import './index.css';

import { createWeeks, createWeekDays } from './utils';
import { EventCalendar } from './components';

moment.locale('es');

let apiEvents = [
    {day: 2, assisted: ["Gym", "Run"], missed: []},
    {day: 8, assisted: [], missed: ["Gym", "Run"]}    
];

let weeks = createWeeks(1, 2018, moment().format('DD-MM-YYYY'));

weeks = weeks.map(week => week.map(day => {
    if (!day.actualMonth) {
        return day;
    }
    let event = apiEvents.find(event => event.day === day.number);
    return event ? { 
        ...day,
        assisted: event.assisted,
        missed: event.missed
    } : day; 
}));

ReactDOM.render(
    <EventCalendar
        weeks={weeks}
        weekDays={createWeekDays()}
    />,
    document.getElementById('root')
);
