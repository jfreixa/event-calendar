import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styled from 'styled-components';

import { WeekDayName } from '../index';

const WeekDays = styled.div`
    display: flex;
    text-align: center;
`;

export default class Header extends PureComponent {
    render() {
        return (
            <WeekDays>
                {this.props.weekDays.map((name) =>
                    (<WeekDayName key={shortId.generate()} name={name} />)
                )}
            </WeekDays>
        );
    }
}

Header.propTypes = {
    weekDays: PropTypes.array.isRequired
}