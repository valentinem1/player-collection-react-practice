import React, { Component } from 'react';

class PlayerCard extends Component {

    state={
        display: "no-display",
    }

    handleClick = (event) => {
        if(this.state.display === "no-display"){
            this.setState({
                display: "display"
            })
        }else{
            this.setState({
                display: "no-display"
            })
        }
    }

    handleLikes = (event) => {
        // console.log("YOU LIKED ME!!!!")
        this.props.updateLikes(this.props.player.id)
    }

    render() {
        // console.log(this.props)
        // console.log(this.state.likes)
        let {name, team, image, likes} = this.props.player

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