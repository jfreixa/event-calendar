import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import { WeekDayName } from '../index';

export default class Header extends PureComponent {
    render() {
        return (
            <div>
                {this.props.weekDays.map((name) =>
                    (<WeekDayName key={shortId.generate()} name={name} />)
                )}
            </div>
        );
    }
}

Header.propTypes = {
    weekDays: PropTypes.array.isRequired
}