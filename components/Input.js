import React, { Component } from 'react';

import styled from 'styled-components';

const Input = styled.input`
    height: 35px;
    margin: 0;
    padding: 0;
    outline: none;
    border: 1px solid #bdc3c7;
    width: 170px;
    padding: 0 0 0 15px;
    font-size: 14px;
    font-family: 'Cutive Mono', monospace;

	@media (min-width: 600px) {
        width: 275px;
        font-size: 16px;
        height: 50px;
	}

    &:focus {
        border: 1px solid cyan;
    }
`;

export default (props) => (
    <Input {...props} />
);