import React, {Component} from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Ryan'
        }
        console.log("LifecycleA Constructor")
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("LifecycleA getDerived")
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleA componentDidUpdate")
    }

    componentDidMount() {
        console.log("LifecycleA component did mount")
    }

    changeState = ()=>{
        this.setState({
            name: "Code"
        })
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>
                    Livecycle A
                </div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>

        );
    }
}

export default LifecycleA;