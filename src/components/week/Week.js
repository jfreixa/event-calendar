import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Day } from '../index';

export default class Week extends PureComponent {
    render() {
        return (
            <div>
                {this.props.days.map(({ number, actualMonth }) => <Day number={number} actualMonth={actualMonth} />)}
            </div>
        );
    }
}

Week.propTypes = {
    days: PropTypes.array.isRequired
}