import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MonthArray from './utils/create-month-array/MonthArray'
import EventCalendar from './components/event-calendar/EventCalendar'

const monthArray = new MonthArray();

ReactDOM.render(<EventCalendar days={monthArray.create(12, 2017)} />, document.getElementById('root'));
