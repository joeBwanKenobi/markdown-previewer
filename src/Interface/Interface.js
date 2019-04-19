import React, { Component } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

class Interface extends Component {
    constructor(props) {
      super(props)
      this.state ={
        input: `# H1
  ## H2
  
  Check out this neat link [jo3.io](http://www.jo3.io)
  
  Inline code is \`<p>pretty neat!</p>\`, wouldn't you say?
  
  \`\`\`
  <div>
    <h1>Code blocks can also get the job done.</h1>
  </div>
  \`\`\`
  
  1. First li
  2. Second li
  
  >There are no bad pictures; that's just 
  >how your face looks sometimes.  
  >-Abraham Lincoln
  
  ![Cozy little cabin](http://www.woodz.co/wp-content/uploads/2016/03/Kes%C3%A4nkij%C3%A4rvi-Finlande-360x240.jpg)
  
  **The Code Hut**`
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.setState({input: e.target.value});
    }
    
    render() {
      return (
        <div className="row">
          <div className="col">
            <Editor value={this.state.input} onChange={this.handleChange} />
          </div>
          <div className="col">
            <Preview value={this.state.input} />
          </div>
        </div>
      );
    }
}

export default Interface;