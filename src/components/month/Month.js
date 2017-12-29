import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import { Week } from '../index';

export default class Month extends PureComponent {
    render() {
        return this.props.weeks.map(week => <Week key={shortId.generate()} days={week} />);
    }
}

Month.propTypes = {
    weeks: PropTypes.array.isRequired
}
