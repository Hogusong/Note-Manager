import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  render() {
    return (
      <div className="editor column column-75">
        <SimpleMDE onChange={this.props.handleChange}
                   value={this.props.currentBody} 
                   options={{ 
                     autofocus: true,
                     spellChecker: false }} />
      </div>
    );
  }
}

export default Editor;
