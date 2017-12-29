import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Day extends PureComponent {
    render() {
        return <Fragment>{this.props.number}</Fragment>;
    }
}

Day.propTypes = {
    number: PropTypes.number.isRequired,
    actualMonth: PropTypes.bool.isRequired
}