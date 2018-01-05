import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';

import { createWeeks, createWeekDays, mergeWeekDaysWithEvents } from '../../utils';
import { EventCalendar } from '../../components';

moment.locale('en');

const apiEvents = [
    {day: 2, assisted: ["Gym", "Run"], missed: []},
    {day: 8, assisted: [], missed: ["Gym", "Run"]}    
];


export default class Calendar extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            date: moment()
        };
    }

    getWeeks() {
        const month = this.state.date.month();
        const year = this.state.date.year();
        const weeks = createWeeks(month, year, moment().format('DD-MM-YYYY'));
        return mergeWeekDaysWithEvents(weeks, apiEvents);
    }

    handleNext = () => {
        this.setState(({date}) => ({
            date: date.add(1, 'month')
        }));
    }

    handlePrevious = () => {
        this.setState(({date}) => ({
            date: date.subtract(1, 'month')
        }));
    }

    getNameTitle() {
        return this.state.date.format('MMMM YYYY');
    }

    render() {
        return (
            <EventCalendar
                title={this.getNameTitle()}
                weeks={this.getWeeks()}
                weekDays={createWeekDays()}
                nextMonth={this.handleNext}
                previousMonth={this.handlePrevious}
            />
        );
    }
}

Calendar.propTypes = {}
