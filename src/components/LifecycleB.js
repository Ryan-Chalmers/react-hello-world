import React, {Component} from 'react';

class LifecycleB extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Ryan'
        }
        console.log("LifecycleB  Constructor")
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("LifecycleB getDerived")
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB component did mount")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifecycleB shouldComponentUpdate')
        return true;

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleB componentDidUpdate")
    }

    render() {
        console.log("LifecycleB render")
        return (
            <div>
                LifecycleB
            </div>
        );
    }
}

export default LifecycleB;