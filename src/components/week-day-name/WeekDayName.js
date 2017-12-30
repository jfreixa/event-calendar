import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
    text-align: center;
    width: 1.5em;
`;

export default class WeekDayName extends PureComponent {
    render() {
        return <Wrapper>{this.props.name}</Wrapper>;
    }
}

WeekDayName.proptypes = {
    name: PropTypes.string
}
