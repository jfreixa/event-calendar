import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
    float: left;
    height: ${props => props.sizeTile}px;
    width:  ${props => props.sizeTile}px;
    line-height:  ${props => props.sizeTile}px;
    font-size: 13px;
    font-weight: 400;
    margin: 1px;
    text-align: center;
    color: ${props => props.actualMonth ? '#000' : '#646464'};
    ${props => {
        if(props.actualDay) {
            return `
                background-color: #ff7c22;
                color: #fff;
                border-radius: 3px;
            `;
        }
    }}
`;

export default class Day extends PureComponent {
    render() {
        const { actualMonth, actualDay, number } = this.props
        console.log(this.props)
        return (
            <Wrapper
                actualMonth={actualMonth}
                actualDay={actualDay}
                sizeTile={30}
            >
                {number}
            </Wrapper>
        );
    }
}

Day.propTypes = {
    number: PropTypes.number.isRequired,
    actualMonth: PropTypes.bool.isRequired
}