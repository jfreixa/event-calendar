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
        weeks={createWeeks(1, 2018, moment().format('DD-MM-YYYY'))}
        weekDays={createWeekDays()}
    />,
    document.getElementById('root')
);
