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

  updateLikes = (id) => {
    // console.log(id)
    let newArrOfPlayers = this.state.players.map(player => {
      if(player.id === id){
        let newLikes = player.likes + 1
        return {...player, likes: newLikes}
      }else{
        return player
      }
    })
    this.setState({
      players: newArrOfPlayers
    })
  }

  addNewPlayer = (newPlayer) => {
    // console.log(newValue)
    let newId = this.state.players.length + 1
    let newObj = {id: newId, ...newPlayer, likes: 0}
    let newArrOfPlayers = [...this.state.players, newObj]

    this.setState({
      players: newArrOfPlayers
    })
    console.log(players)
  }

  render() {

    return (
      <div className="App">
        <Header />
        <NewPlayerForm addNewPlayer={this.addNewPlayer}/>
        <SearchForm 
        search={this.state.search}
        updateStateSearch={this.updateStateSearch}
        />
        <PlayerContainer 
          players={this.updateSearch()}
          updateLikes={this.updateLikes}
        />
      </div>
    );
  }
}

export default App;

