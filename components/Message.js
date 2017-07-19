import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.p`
	font-size: 14px;
	color: #333;
	max-width: 1024px;
	padding: 0 20px;
	@media (min-width: 600px) {
		font-size: 18px;
	}
`;

export default ({ children }) => (
    <Message>{children}</Message>
);