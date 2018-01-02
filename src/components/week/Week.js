import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styled from 'styled-components';

import { Day } from '../index';

const Wrapper = styled.div`
    display: flex;
`;

export default class Week extends PureComponent {
    render() {
        return (
            <Wrapper>
                {this.props.days.map(({ number, actualMonth, actualDay }) =>
                    (<Day
                        key={shortId.generate()}
                        number={number}
                        actualMonth={actualMonth}
                        actualDay={actualDay}
                    />)
                )}
            </Wrapper>
        );
    }
}

Week.propTypes = {
    days: PropTypes.array.isRequired
}