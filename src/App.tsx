import React from 'react';
import FocusTrap from "focus-trap-react";

import './App.css';
import {PrimaryButton, SecondaryButton} from './Buttons';

import disk from './assets/disk.svg';
import trashcan from './assets/trashcan.svg';


const SaveAsFragment = ()=><React.Fragment>Save as...<img src={disk} width="16" height="16" alt="save icon" /> </React.Fragment>
const DeleteFragment =  ()=><React.Fragment>Delete <img src={trashcan} width="16" height="16" alt="delete icon" /> </React.Fragment>
function App() {

  return (
      <div className="App">
          <h1>Buttons</h1>
          <FocusTrap active={true}>
              <div>
                  <PrimaryButton><SaveAsFragment/></PrimaryButton>
                  <hr/>
                  <PrimaryButton disabled={true}><SaveAsFragment/></PrimaryButton>
                  <hr/>
                  <PrimaryButton><DeleteFragment/></PrimaryButton>
                  <hr/>
                  <SecondaryButton><SaveAsFragment/></SecondaryButton>
                  <hr/>
                  <SecondaryButton disabled={true}><SaveAsFragment/></SecondaryButton>
              </div>
          </FocusTrap>
      </div>
  );
}

export default App;
