import React, { Component } from 'react';

class PlayerCard extends Component {

    state={
        display: "no-display",
    }

    render() {

        return (
            <div>
                <div onClick={this.handleClick} className="player-card">
                <img className="player-picture" src={image} alt={name}/>
                <h1 className="player-name">{name}</h1>
                <p className={this.state.display}>{team}</p>
                </div>

                <div className="like-div">
                <button onClick={this.handleLikes} className= "like-button" >{likes} Likes</button>
                </div>
            </div>
        );
    }
}

export default PlayerCard;