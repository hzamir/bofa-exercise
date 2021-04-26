import React from 'react';
import FocusTrap from "focus-trap-react";

import './App.css';
import {PrimaryButton, SecondaryButton} from './Buttons';

import { ReactComponent as TrashIcon} from './assets/trashcan.svg';
import { ReactComponent as DiskIcon} from './assets/disk.svg';


const SaveAsFragment = ()=><React.Fragment>Save as...<DiskIcon width={16} height={16}/> </React.Fragment>
const DeleteFragment =  ()=><React.Fragment>Delete   <TrashIcon width={16} height={16}/> </React.Fragment>
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
