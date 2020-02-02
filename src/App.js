import React from 'react';
import './App.css';
import players from './data.js';
import Header from './components/Header.js'
import PlayerContainer from './components/PlayerContainer.js'
import SearchForm from './components/SearchForm.js'

class App extends React.Component {
  
  state={
    players: players,
    search: ""
  }

  updateStateSearch = (searchValue) => {
    this.setState({
      search: searchValue
    })
  }

  updateSearch = () => {
    let newArr = this.state.players.filter(player => {
      let {name, team} = player

      let searchValue = this.state.search.toLowerCase()
      return name.toLowerCase().includes(searchValue) || team.toLowerCase().includes(searchValue)
    })

    return newArr
  }

  render() {

    // console.log(players)

    return (
      <div className="App">
        <Header />
        <SearchForm 
        search={this.state.search}
        updateStateSearch={this.updateStateSearch}
        />
        <PlayerContainer 
          players={this.updateSearch()}
        />
      </div>
    );
  }
}

export default App;

