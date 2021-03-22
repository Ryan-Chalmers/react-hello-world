import React, {Component} from 'react';
import MemoComponent from "./MemoComp";

class ParentComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Ryan'
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: "Ryan"
            })
        }, 2000)
    }

    render() {
        console.log("***********ParentComponent************")
        return (
            <div>
                Parent Component
                {/*<RegularComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
                <MemoComponent name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;