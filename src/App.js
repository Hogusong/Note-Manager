import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/sidebar';
import Editor from './components/editor';
import Buttons from './components/buttons';

const KEY = "MARKNOTE";

class App extends Component {
  constructor() {
    super()
    const localNotes = JSON.parse(localStorage.getItem(KEY));
    this.state = {
      notes: localNotes ? localNotes : [],
      selectedNote: '',
      currentBody: ''
    }

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  addNote() {

  }

  updateNote() {

  }

  save() {

  }

  delete() {

  }

  selectNote() {

  }

  generateGUID() {
    function gen4() {
      return Math.floor((Math.random()+1) * 0x10000)
        .toString(16).substring(1)
    }
    return gen4() + gen4() + '-' + gen4() + '-' +
            gen4() + + '-' + gen4() + gen4() + gen4()
  }

  render() {
    return (
      <div className="App container">
        <h1>Markdown Note Manager</h1>
        <div className='row'>
          <Sidebar add={this.addNote} 
                   update={this.updateNote}
                   select={this.selectNote}
                   nodes={this.state.nodes} />
          <Editor handleChange={this.updateNote}
                  currentBody={this.state.currentBody} />
        </div>
        <Buttons save={this.save} delete={this.delete} />
      </div>
    );
  }
}

export default App;
