import React from 'react';
import './App.css';
import {PrimaryButton, SecondaryButton} from './Buttons';



function App() {
  return (
    <div className="App">
        <h1>Buttons</h1>
        <PrimaryButton>Hello</PrimaryButton>
        <hr/>
        <PrimaryButton disabled={true}> Primary two (disabled)</PrimaryButton>
        <hr/>
        <PrimaryButton>Primary three </PrimaryButton>
        <hr/>
        <SecondaryButton>Secondary one</SecondaryButton>
        <hr/>
        <SecondaryButton>Secondary two</SecondaryButton>
        <SecondaryButton disabled={true}>Secondary three (disabled)</SecondaryButton>

    </div>
  );
}

export default App;
