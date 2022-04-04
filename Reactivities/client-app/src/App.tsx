import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Label } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart' />
            Like
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            2,048
          </Label>
        </Button>
      </header>
    </div>
  );
}

export default App;
