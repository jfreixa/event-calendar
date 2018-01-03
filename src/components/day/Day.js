import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import shortId from 'shortid';

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
    ${props => (
        props.actualDay
        && `
            background-color: #ff7c22;
            color: #fff;
            border-radius: 3px;
        `
    )}
`;

const Assisted = styled.p`
    margin: 0;
    color: green;
`;

const Missed = styled.p`
    margin: 0;
    color: red;
`;

const ReactTooltipStyled = styled(ReactTooltip)`
    color: #686868 !important;
    background-color: #fff !important;
    font-size: 16px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
    opacity: 1 !important;
    &.place-top {
        &:after {
            border-top-color: #fff !important;
            border-top-style: solid !important;
            border-top-width: 6px !important;
        }
    }
`;

export default class Day extends PureComponent {
    render() {
        const { actualMonth, actualDay, number, assisted, missed } = this.props
        const id = shortId.generate();
        
        return (
            <Fragment>
                <Wrapper
                    actualMonth={actualMonth}
                    actualDay={actualDay}
                    sizeTile={30}
                    data-tip="tooltip"
                    data-tip-disable={!(assisted.length || missed.length)}
                    data-for={id}
                    data-multiline={true}
                >
                    {number}
                </Wrapper>
                <ReactTooltipStyled
                    data-multiline={true}
                    id={id}
                    type="light"
                    place="top"
                    effect="solid"
                >
                    <Fragment>
                        {assisted.map(name => <Assisted key={shortId.generate()}>{name}</Assisted>)}
                        {missed.map(name => <Missed key={shortId.generate()}>{name}</Missed>)}
                    </Fragment>
                </ReactTooltipStyled>
            </Fragment>
        );
    }
}

Day.propTypes = {
    number: PropTypes.number.isRequired,
    actualMonth: PropTypes.bool.isRequired,
    actualDay: PropTypes.bool.isRequired,
    assisted: PropTypes.arrayOf(PropTypes.string),
    missed: PropTypes.arrayOf(PropTypes.string)
}

Day.defaultProps = {
    assisted: [],
    missed: []
}