import React from 'react';
import './App.css';
import players from './data.js';
import Header from './components/Header'
import PlayerContainer from './components/PlayerContainer'
import SearchForm from './components/SearchForm'
import NewPlayerForm from './components/NewPlayerForm'

class App extends React.Component {
  
  state={
    players: players,
    search: ""
  }
  

  render() {

    return (
      <div className="App">
        <Header />
        <NewPlayerForm /*addNewPlayer={this.addNewPlayer}*/ />
        <SearchForm 
        // search={this.state.search}
        // updateStateSearch={this.updateStateSearch}
        />
        <PlayerContainer 
          players={this.state.players}
          // updateLikes={this.updateLikes}
        />
      </div>
    );
  }
}

export default App;

