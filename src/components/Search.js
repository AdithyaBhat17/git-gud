import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import search from '../assets/search.svg';

class Search extends Component{

    submit = (e) => {
        e.preventDefault();
        history.push(`/user/${this.refs.input.value}`);
    }

    render(){
        return(
            <div className="container">
                <h4>Enter a Github username</h4>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <input className="form-control" type="text" ref="input" required/>
                        <button className="btn">Search</button>
                    </div>
                </form>
                <img className="search-img" src={search} alt="search"/>
            </div>
        )
    }
}

export default Search;