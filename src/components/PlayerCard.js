import React, { Component } from 'react';

class PlayerCard extends Component {

    state={
        display: "no-display"
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

    render() {
        // console.log(this.props)
        let {name, team, image, likes} = this.props.player

        return (
            <div onClick={this.handleClick} className="player-card">
                <img className="player-picture" src={image} alt={name}/>
                <h1 className="player-name">{name}</h1>
                <p className={this.state.display}>{team}</p>
                <p className={this.state.display}>{likes} Likes</p>
            </div>
        );
    }
}

export default PlayerCard;