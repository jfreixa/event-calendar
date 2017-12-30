import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Month } from '../index'

export default class EventCalendar extends PureComponent {
    render() {
        const { events, weeks } = this.props;
        console.log(events, weeks);
        // Header >> WeekDayName
        return (
            <Fragment>
                <Header weekDays={['DL', 'DM', 'DM', 'DJ', 'DV', 'DS', 'DM']} />
                <Month weeks={weeks} />
            </Fragment>
        );
    }
}

EventCalendar.propTypes = {
    events: PropTypes.array,
    weeks: PropTypes.array.isRequired
}

EventCalendar.defaultProps = {
    events: []
};
