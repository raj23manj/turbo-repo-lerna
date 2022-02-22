
import { CounterComponent } from '@raj23manj/components-lib';
import React, { useEffect, useState } from 'react';

const App = () => {

  lifecycles();

  return(
    <div>
      Hello from App component Robox!!!
      <CounterComponent />
    </div>
  );
};

const lifecycles = () => {
  useEffect(() => {
   console.log("working fine");
  }, []);
};

export default App;
