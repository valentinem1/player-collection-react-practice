import React, { Component } from 'react';

class NewPlayerForm extends Component {

    state={
        name: "",
        image: "",
        team: ""
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submitNewPlayer}>
                    <input 
                    className="input-new-player"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Player's name..."
                    />
                    <input 
                    className="input-new-player"
                    type="text"
                    name="team"
                    value={this.state.team}
                    onChange={this.handleChange}
                    placeholder="Player's team..."
                    />
                    <input 
                    className="input-new-player"
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                    placeholder="Player's image..."
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default NewPlayerForm;