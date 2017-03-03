import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://google.com',
    author: 'dude',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'React',
    url: 'https://google.com',
    author: 'dude',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };
  }

  render() {
    return (
      <div className="App">
        { this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
