import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/es';

import './index.css';

import { createWeeks } from './utils';
import { EventCalendar } from './components';

moment.locale('es');

ReactDOM.render(
    <EventCalendar weeks={createWeeks(12, 2017)} />,
    document.getElementById('root')
);
