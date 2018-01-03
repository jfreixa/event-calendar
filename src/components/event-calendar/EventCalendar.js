import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Month } from '../index'

export default class EventCalendar extends PureComponent {
    render() {
        const { weeks, weekDays } = this.props;
        
        return (
            <Fragment>
                <Header weekDays={weekDays} />
                <Month weeks={weeks} />
            </Fragment>
        );
    }
}

EventCalendar.propTypes = {
    weeks: PropTypes.array.isRequired,
    weekDays: PropTypes.array.isRequired
}

EventCalendar.defaultProps = {
    events: []
};
