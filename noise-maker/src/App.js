import React from 'react';
import SynteH from './containers/syntetizerHigh';
import SynteL from './containers/syntetizerLow';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <h1 className="text-center">
          Carlos's Synte
        </h1>
      </header>
      <main>
        <div className="container">
          <div className="row justify-content-center m-3">
            <div className="col-8 justify-content-center">
              <SynteL />
            </div>
          </div>
          <div className="row justify-content-center m-3">
            <div className="col-8 justify-content-center">
              <SynteH />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
