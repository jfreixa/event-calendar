import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Month from '../month/Month'

export default class EventCalendar extends PureComponent{
    render() {
        const { events, weeks } = this.props;
        console.log(events, weeks);
        return <Month weeks={weeks} />;
    }
}

EventCalendar.propTypes = {
    events: PropTypes.array,
    weeks: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                actualMonth: PropTypes.bool,
                number: PropTypes.number
            })
        )
    ).isRequired
}

EventCalendar.defaultProps = {
    events: []
};

// Header >> WeekDayName
// Month >> Week >> Day