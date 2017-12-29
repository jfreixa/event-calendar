import React, { PureComponent } from 'react';
import Day from '../day/Day';

export default class Week extends PureComponent {
    render() {
        return (
            <div>
                {this.props.days.map(({number, actualMonth}) => <Day number={number} actualMonth={actualMonth} />)}
            </div>
        );
    }
}