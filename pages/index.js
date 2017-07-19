import React, { Component } from 'react';
import App from '../components/App';
import Form from '../components/Form';
import Message from '../components/Message';
import Puzzle from '../components/Puzzle';
import NotifyContainer from '../components/NotifyContainer';
import Container from '../components/Container';
import Countdown from '../containers/Countdown';
import post from '../utils/postData';
import { SECRET_MESSAGE } from '../config';

require('../utils/globalStyles');

export default class extends Component {
    static async getInitialProps() {
        return {
            secret: SECRET_MESSAGE
        }
    }

    constructor(props) {
        super(props);

        this.setGlobalstate = this.setGlobalstate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            inputValue: '',
            secretResolved: false,
            resolvedBefore: false,
            loading: true,
            counting: false,
            attempt: false,
            error: false
        };
    }

    componentDidMount() {
        const resolvedBefore = localStorage.getItem('secret');

        this.setState({
            resolvedBefore,
            loading: false
        });
    }

    setGlobalstate(obj) {
        this.setState(obj);
    }

    flashMessage() {
        this.setState({
            attempt: true
        });

        setTimeout(() => {
            this.setState({
                attempt: false
            });
        }, 1000);
    }

    async handleSubmit() {
        if(this.state.inputValue === this.props.secret) {

            localStorage.setItem('secret', true);

            try {
                this.setState({
                    secretResolved: true,
                    counting: true
                });

                const mail = await post('/notify');

                if(mail.error) throw Error('API error');
            }
            catch(err) {
                this.setState({
                    secretResolved: true,
                    counting: true,
                    error: true
                });
            }
        } else {
            // wrong attempt
            this.flashMessage()
        }
    }

    render() {
        const { inputValue, secretResolved, resolvedBefore, loading, counting, attempt } = this.state;

        if(loading) {
            return <App></App>;
        }

        if(counting) {
            return (
                <App>
                    <Countdown time={10} _setGlobalstate={this.setGlobalstate} />
                </App>
            );
        }

        return (
            <App>
                {
                    (!secretResolved && !resolvedBefore)
                    ?
                        <Container>
                            <Puzzle value={inputValue}
                                    _setGlobalstate={this.setGlobalstate}
                                    _handleSubmit={this.handleSubmit} />
                            <NotifyContainer>
                                { attempt && <Message>Zkus to znova!</Message> }
                            </NotifyContainer>
                        </Container>
                    :
                        <Message>Posaď se na svoje místo ke stolu a&nbsp;podívej se z&nbsp;okna. Pokud nic nevidíš, buď trpělivý a&nbsp;chvilku počkej.</Message>
                }
            </App>
        );
    }
}