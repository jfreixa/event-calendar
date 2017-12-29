import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Month } from '../index'

export default class EventCalendar extends PureComponent {
    render() {
        const { events, weeks } = this.props;
        console.log(events, weeks);
        // Header >> WeekDayName
        return <Month weeks={weeks} />;
    }
}

EventCalendar.propTypes = {
    events: PropTypes.array,
    weeks: PropTypes.array.isRequired
}

EventCalendar.defaultProps = {
    events: []
};
