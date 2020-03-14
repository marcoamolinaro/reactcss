import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefautLayout ({children}) {
    return <Wrapper>{Children}</Wrapper>
};

DefautLayout.propTypes = {
    children: PropTypes.element.isRequired
};  