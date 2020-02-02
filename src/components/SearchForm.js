import React, { Component } from 'react';

class SearchForm extends Component {


    render() {

        return (
            <div>
                <form className="search-form">
                    <input 
                    className="input-search-form"
                    name="search"
                    type="text"
                    value={this.props.search}
                    placeholder="Search..."
                    // onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;