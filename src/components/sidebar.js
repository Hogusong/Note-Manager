import React, { Component } from 'react';

class Sidebar extends Component {
  renderList() {
    let list = [];
    this.props.notes.forEach(note => {
      list.push(
        <li key={note.id} onClick={() => this.props.select(note)}
            className={note.id === this.props.selectedId ? 'selected' : ''}>
          {note.body.substring(0,24)}
        </li>
      )
    });
    return list;
  }

  render() {
    return (
      <div className="sidebar column column-25">
        <button className='button button-clear' 
            onClick={this.props.add}>+ new note</button>
        <dl className="list">
          {this.renderList()}
        </dl>
      </div>
    );
  }
}

export default Sidebar;
