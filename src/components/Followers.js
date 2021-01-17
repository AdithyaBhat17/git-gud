import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Followers extends Component {
  constructor() {
    super();
    this.state = {};
  }
  fetchData = () => {
    fetch(
      `https://api.github.com/users/${this.props.match.params.username}/followers`
    )
      .then((res) => res.json())
      .then((followers) => {
        this.setState({
          followers,
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
    const { followers } = this.state;
    if (!followers)
      return (
        <div className="loading">
          <img
            src="https://media.giphy.com/media/GrVvXh2ZDZXBS/giphy.gif"
            alt="loading"
          />
        </div>
      );
    return (
      <div className="followers">
        <h3>Followers of {this.props.match.params.username}</h3>
        {followers.map((follower) => (
          <Link
            key={follower.login}
            className="links"
            to={`/user/${follower.login}`}
          >
            <div className="thumbnail">
              <div className="row">
                <div className="col-xs-3">
                  <img
                    className="avatar-follower"
                    src={follower.avatar_url}
                    alt={follower.login}
                  />
                </div>
                <div className="col-xs-9">
                  <p className="name-follower">{follower.login}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
