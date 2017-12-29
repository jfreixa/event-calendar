import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Week from '../week/Week'

export default class Month extends PureComponent {
    render() {
        return this.props.weeks.map(week => <Week days={week} />);
    }
}

Month.propTypes = {
    days: PropTypes.array.isRequired
}
