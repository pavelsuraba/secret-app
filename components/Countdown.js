import Rect from 'react';

import styled from 'styled-components';

const Countdown = styled.div`
    font-size: 32px;

	@media (min-width: 600px) {
        font-size: 52px;
	}
`;

export default ({ children }) => (
    <Countdown>{children}</Countdown>
);