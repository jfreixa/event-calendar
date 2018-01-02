import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/es';

import './index.css';

import { createWeeks, createWeekDays } from './utils';
import { EventCalendar } from './components';

moment.locale('es');

ReactDOM.render(
    <EventCalendar
        weeks={createWeeks(12, 2017)}
        weekDays={createWeekDays()}
    />,
    document.getElementById('root')
);
