import './App.css';
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
// import ClassClick from "./components/ClassClick";
// import {Greet} from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <UserGreeting/>
            {/*<ParentComponent/>*/}
            {/*<EventBind/>*/}
            {/*<FunctionClick/>*/}
            {/*<ClassClick/>*/}
            {/*<Counter/>*/}
            {/*<Message/>*/}
            {/*<Greet name="Ryan" heroName="TallMan"/>*/}
            {/*<Greet name="Bob" heroName="SmallMan">*/}
            {/*    <button>Action</button>*/}
            {/*</Greet>*/}
            {/*<Greet name="Tom" heroName="HorseBoy"/>*/}
            {/*<Welcome name="Ryan" heroName="TallMan"/>*/}
            {/*    <p>This is child props</p>*/}
            {/*</Welcome>*/}
            {/*<Welcome name="Bob" heroName="SmallMan"/>*/}
            {/*<Welcome name="Tom" heroName="HorseBoy"/>*/}
        </div>
    );
}

export default App;
