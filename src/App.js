import './App.css';
import {Greet} from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

function App() {
    return (
        <div className="App">
            <Message/>
            {/*<Greet name="Ryan" heroName="TallMan">*/}
            {/*    <p>This is child props</p>*/}
            {/*</Greet>*/}
            {/*<Greet name="Bob" heroName="SmallMan">*/}
            {/*    <button>Action</button>*/}
            {/*</Greet>*/}
            {/*<Greet name="Tom" heroName="HorseBoy"/>*/}
            {/*<Welcome name="Ryan" heroName="TallMan">*/}
            {/*    <p>This is child props</p>*/}
            {/*</Welcome>*/}
            {/*<Welcome name="Bob" heroName="SmallMan"/>*/}
            {/*<Welcome name="Tom" heroName="HorseBoy"/>*/}
        </div>
    );
}

export default App;
