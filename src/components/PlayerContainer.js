import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js'

class PlayerContainer extends Component {

    render() {

        // console.log(this.props)

        return (
            <div className="players-container">
                {this.props.players.map(player => <PlayerCard 
                key={player.id}
                player={player}
                />)}
            </div>
        );
    }
}

export default PlayerContainer;