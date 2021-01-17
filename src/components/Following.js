import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Following extends Component {
  constructor() {
    super();
    this.state = {};
  }
  fetchData = () => {
    fetch(
      `https://api.github.com/users/${this.props.match.params.username}/following`
    )
      .then((res) => res.json())
      .then((following) => {
        this.setState({
          following,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchData();
    }
  }

  render() {
    const { following } = this.state;
    if (!following)
      return (
        <div className="loading">
          <img
            src="https://media.giphy.com/media/GrVvXh2ZDZXBS/giphy.gif"
            alt="loading"
          />
        </div>
      );
    return (
      <div className="following">
        <h3>Followed by {this.props.match.params.username}</h3>
        {following.map((follow) => (
          <Link key={follow.id} className="links" to={`/user/${follow.login}`}>
            <div className="thumbnail">
              <div className="row">
                <div className="col-xs-3">
                  <img
                    className="avatar-follower"
                    src={follow.avatar_url}
                    alt={follow.login}
                  />
                </div>
                <div className="col-xs-9">
                  <p className="name-follower">{follow.login}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
