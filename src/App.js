import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import ToDoContainer from './containers/ToDoContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-intro">
                    <ToDoContainer />
                </div>
            </div>
        );
    }
}

export default App;
