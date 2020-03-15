import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'q=corona&language=en'
      },
      news2: {
        type: 'everything',
        query: 'q=corona&language=id'
      },
      news3: {
        type: 'everything',
        query: 'q=virus&language=id'
      }
    };
  }

  render() {
    return (
      <div className="containwer-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper dark lighten-4">
              <a href="/" className="bran-logo center">React Fetch API Lifecycle vs Axios</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
