import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
    render() {
      let markedString = marked(this.props.value, {sanitize: true, gfm: true, breaks: true});
      
      return (
        <div className="row">
          <div className="box-header">
            <h3>Preview</h3>
          </div>
          <div id="preview" dangerouslySetInnerHTML={ {__html: markedString} }>
          </div>
        </div>
      );
    }
}

export default Preview;