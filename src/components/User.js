import React, { Component } from 'react';
import { Link } from 'react-router';
import error from '../assets/error.svg';

class User extends Component{
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(res => res.json())
        .then(
            user => {
                this.setState({
                    user
                });
            }
        );
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.params.username !== this.props.params.username){
            this.fetchData();
        }
    }

    render(){
        const {user} = this.state;
        if(!user)
            return <div className="loading"><img src="https://media.giphy.com/media/GrVvXh2ZDZXBS/giphy.gif" alt="loading"/></div>

        
        if(user.message === "Not Found"){
            return (
                <div className="container">
                    <img className="error-img" src={error} alt="Not found"/> 
                    <h2>The user you're looking for has been abducted! <br/>
                    Look for someone else or you'll go missing too <i className="fas fa-angry"></i> </h2>
                </div>
            );
        }

        const details = [
            {
                name: 'Public Repositories',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }
        ];

        return(
            <div className="container info"> 
                <div className="row">
                    <div className="col-md-3 col-sm-12">                                   
                        <Link className="links" to={`/user/${user.login}`}>
                            <img src={user.avatar_url} alt={user.name}/>
                        </Link>  
                    </div>
                    <div className="col-md-9 col-sm-12">                                   
                        <Link className="links" to={`/user/${user.login}`}>
                            <strong>{user.login} <small> - {user.name}</small></strong>
                        </Link>
                        <br/>
                        <Link className="links" to={`/user/${user.login}`}>
                            <p>{user.bio}</p>
                        </Link> 
                        <div className="row">
                            {details.map(detail => (
                                <div key={detail.name} className="col-xs-4">
                                    <Link className="links purple" to={detail.url}>
                                        <p>{detail.value}</p>
                                    </Link>
                                    <Link className="links purple" to={detail.url}>
                                        <p>{detail.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>   
                <div>
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default User;