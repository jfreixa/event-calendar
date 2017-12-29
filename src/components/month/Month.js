import React, { PureComponent } from 'react';
import Week from '../week/Week'

export default class Month extends PureComponent {
    render() {
        return this.props.weeks.map(week => <Week days={week} />);
    }
}