import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/es';

import './index.css';

import MonthArray from './utils/create-month-array/MonthArray';
import { EventCalendar } from './components';

moment.locale('es');

const monthArray = new MonthArray();

ReactDOM.render(
    <EventCalendar weeks={monthArray.create(12, 2017)} />,
    document.getElementById('root')
);
