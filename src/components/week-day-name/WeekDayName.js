import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
    cursor: default;
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-weight: 500;
    color: #646464;
    text-transform: uppercase;
    margin: 1px;
`;

export default class WeekDayName extends PureComponent {
    render() {
        return <Wrapper>{this.props.name}</Wrapper>;
    }
}

WeekDayName.proptypes = {
    name: PropTypes.string
}
