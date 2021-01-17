import React, { Component } from "react";

export default class Repositories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  fetchData = () => {
    fetch(
      `https://api.github.com/users/${this.props.match.params.username}/repos`
    )
      .then((res) => res.json())
      .then((repos) => {
        this.setState({
          repos,
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
    const { repos } = this.state;
    if (!repos)
      return (
        <div className="loading">
          <img
            src="https://media.giphy.com/media/GrVvXh2ZDZXBS/giphy.gif"
            alt="loading"
          />
        </div>
      );
    return (
      <div className="repos">
        <h3>Public Repositories of {this.props.match.params.username}</h3>
        {repos.map((repo) => (
          <a
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
            className="links"
            href={`${repo.html_url}`}
          >
            <div className="thumbnail-2">
              <div className="row">
                <div className="col-xs-6">
                  <p className="name-follower">{repo.name}</p>
                </div>
                <div className="col-xs-6">
                  <p className="name-follower">
                    <span>
                      <i className="fas fa-star"> {repo.stargazers_count}</i>
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span>
                      <i className="fas fa-code-branch"> {repo.forks_count}</i>
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span>
                      <i className="fas fa-eye"> {repo.watchers_count}</i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}
