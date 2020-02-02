import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js'

class PlayerContainer extends Component {

    render() {

        return (
            <div className="players-container">
                {this.props.players.map(player => <PlayerCard 
                key={player.id}
                player={player}
                // updateLikes={this.props.updateLikes}
                />)}
            </div>
        );
    }
}

export default PlayerContainer;