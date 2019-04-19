import React, { Component } from 'react';
import Interface from '../Interface/Interface';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <h1 className="title">Markdown Previewer</h1>
           </div>
        </div>
        <Interface />
        <br/><br/>
        <p className="text-center"><b><a href="" target="_blank" className="source"><i class="fa fa-gitlab"></i>&nbsp;View Source</a></b></p>
      </div>
    );
  }
}

export default App;
