import React, { Component } from 'react';

import styled from 'styled-components';

const Button = styled.button`
    height: 35px;
    margin: 0;
    padding: 0 15px;
    font-size: 14px;
    background-color: cyan;
    border: none;
    cursor: pointer;
    font-family: 'Cutive Mono', monospace;
    transition: all 300ms ease;
    color: #003e3e;
	@media (min-width: 600px) {
        height: 50px;
        font-size: 16px;
        padding: 0 20px;
	}
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #53e0e0;
    }
`;

export default ({ children, props }) => (
    <Button {...props}>{children}</Button>
);