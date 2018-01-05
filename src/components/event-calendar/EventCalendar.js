import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, Month, Controller } from '../index';

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');

    max-width: 224px;
    font-family: 'Roboto', sans-serif;
`;

export default class EventCalendar extends PureComponent {
    render() {
        const { weeks, weekDays, previousMonth, nextMonth, title } = this.props;
        
        return (
            <Wrapper>
                <Controller
                    previousMonth={previousMonth}
                    nextMonth={nextMonth}
                    title={title}
                />
                <Header weekDays={weekDays} />
                <Month weeks={weeks} />
            </Wrapper>
        );
    }
}

EventCalendar.propTypes = {
    weeks: PropTypes.array.isRequired,
    weekDays: PropTypes.array.isRequired,
    previousMonth: PropTypes.func.isRequired,
    nextMonth: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}
