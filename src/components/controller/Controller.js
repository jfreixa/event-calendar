import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TiArrowLeft from 'react-icons/lib/ti/arrow-left';
import TiArrowRight from 'react-icons/lib/ti/arrow-right';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    font-size: 30px;
    color: #646464;
`;

const Title = styled.div`
    flex-grow: 1;
    font-size: 20px;
`;

export default class Controller extends PureComponent {
    render() {
        const { previousMonth, nextMonth, title } = this.props;
        return (
            <Wrapper>
                <TiArrowLeft onClick={previousMonth} />
                <Title>{title}</Title>
                <TiArrowRight onClick={nextMonth} />
            </Wrapper>
        );
    }
}

Controller.propTypes = {
    previousMonth: PropTypes.func.isRequired,
    nextMonth: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}