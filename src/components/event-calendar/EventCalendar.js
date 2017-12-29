import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class EventCalendar extends PureComponent{
    render() {
        const { events, days } = this.props;
        console.log(events, days);
        return 'Event calendar';
    }
}

EventCalendar.propTypes = {
    events: PropTypes.array,
    days: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                actualMonth: PropTypes.bool,
                day: PropTypes.number
            })
        )
    ).isRequired
}

EventCalendar.defaultProps = {
    events: []
};

// Header >> WeekDayName
// Month >> Week >> Day