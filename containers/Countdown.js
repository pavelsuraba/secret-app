import Rect, { Component } from 'react';
import Countdown from '../components/Countdown';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.time
        }
    }

    componentDidMount() {
        this.countdown();
    }

    callback() {
        this.props._setGlobalstate({
            counting: false
        })
    }

    countdown() {

        setInterval(() => {
            const newTime = this.state.count - 1;

            if(newTime < 0) {
                return this.callback();
            };

            this.setState({
                count: newTime
            });

        }, 1000);
    }

    render() {
        return (
            <Countdown>{this.state.count}</Countdown>
        );
    }
}