import React, {Component} from 'react';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prev => {
            return {
                count: this.state.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default CounterContainer;