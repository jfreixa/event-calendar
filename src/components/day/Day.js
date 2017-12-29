import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
    color: ${props => props.actualMonth ? 'black' : 'gray'};
    text-align: center;
    width: 1.5em;
`;

export default class Day extends PureComponent {
    render() {
        const { actualMonth, number } = this.props
        return <Wrapper actualMonth={actualMonth}>{number}</Wrapper>;
    }
}

Day.propTypes = {
    number: PropTypes.number.isRequired,
    actualMonth: PropTypes.bool.isRequired
}