import React, { Component } from 'react';
import keymap from '../keymap';
import Input from './Input';
import Button from './Button';

import styled from 'styled-components';

const Form = styled.form`
    margin: 35px 0 0 0;
    display: flex;
    justify-content: center;
`;

let previousInput;

export default ({ value, _setGlobalstate, _handleSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        _handleSubmit();
    }

    const handleValueChange = (e) => {
        const input = e.target.value;
        let backspace;
        let paste;
        let previousLength = previousInput ? previousInput.length : 1;
        let currentLength = input.length;

        // using backspace
        if(currentLength < previousLength) {
            backspace = true;
        } else {
            backspace = false;
        }

        // paste
        if(currentLength - previousLength >= 2) {
            paste = true;
        }

        previousInput = input;

        const fakeValue =
            [...input]
                .map((key, i) => {

                    if(paste) { // pasted word change all of it
                        return keymap(key);
                    }

                    if(i === currentLength - 1 && !backspace) {
                        return keymap(key); // change only last key while typing
                    } else {
                        return key;
                    }
                })
                .join('');

        _setGlobalstate({ inputValue: fakeValue });
    }

    return (
        <Form action="/notify" onSubmit={handleSubmit}>
            <Input type="text" value={value} onChange={handleValueChange} />
            <Button type="submit">Potvrdit</Button>
        </Form>
    )
};