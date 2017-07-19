import React, { Component } from 'react';
import styled from 'styled-components';

const NotifyContainer = styled.div`
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
`;

export default ({ children }) => (
    <NotifyContainer>{children}</NotifyContainer>
);