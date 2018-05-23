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
      selectedId: '',
      currentBody: 'New note ...'
    }

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  addNote() {
    this.setState({ selectedId: '', currentBody: 'New note ...' });
  }

  updateNote(body) {
    this.setState({ currentBody: body })
  }

  save() {
    let body = this.state.currentBody.trim();
    if (body.length === 0)  return;
    if (body === "New note ...") return;

    let newNotes = this.state.notes;
    if(this.state.selectedId) {
      const noteIndex = this.state.notes.findIndex(note => 
              (note.id === this.state.selectedId)
      );
      if (noteIndex === -1) return;
      newNotes[noteIndex].body = body;
    } else {
      const guid = this.generateGUID();
      const newNote = { id: guid, body: this.state.currentBody }
      newNotes.push(newNote);
    }
    this.processChanged(newNotes);
  }

  delete() {
    let newNotes = this.state.notes;
    if(this.state.selectedId) {
      const noteIndex = newNotes.findIndex(note => 
              (note.id === this.state.selectedId)
      );
      if (noteIndex === -1) return;
      newNotes.splice(noteIndex, 1)
    }

    this.processChanged(newNotes);
  }

  selectNote(note) {
    this.setState({ selectedId: note.id,  currentBody: note.body });
  }

  processChanged(newNotes){
    this.setState({  
      notes: newNotes,  selectedId: '',  currentBody: 'New note ...'
    });
    localStorage.setItem(KEY, JSON.stringify(newNotes));
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
                   select={this.selectNote}
                   notes={this.state.notes}
                   selectedId={this.state.selectedId} />
          <Editor handleChange={this.updateNote}
                  currentBody={this.state.currentBody} />
        </div>
        <Buttons save={this.save} delete={this.delete} />
      </div>
    );
  }
}

export default App;
