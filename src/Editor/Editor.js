import React, { Component } from 'react';

class Editor extends Component {
    render() {
      return (
        <div className="row">
          <div className="box-header">
            <h3>Editor</h3>
          </div>
          <textarea id="editor" type="text" rows="30" onChange={this.props.onChange} >{this.props.value}</textarea>
        </div>
      );
    }
}

export default Editor;