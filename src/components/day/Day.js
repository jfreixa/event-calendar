import React, { PureComponent, Fragment } from 'react';

export default class Day extends PureComponent {
    render() {
        return <Fragment>{this.props.number}</Fragment>;
    }
}