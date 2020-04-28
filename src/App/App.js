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
        <p className="text-center"><b><a href="https://github.com/joeBwanKenobi/markdown-previewer.git" target="_blank"><i class="fa fa-github"></i>&nbsp;View Source</a></b></p>
      </div>
    );
  }
}

export default App;
