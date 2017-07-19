import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default ({ children }) => (
    <Container>{children}</Container>
);