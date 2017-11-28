import React from 'react';

export default class Portfolio extends React.Component {
  state = {
    portfolio: []
  }
  componentDidMount() {
    const url = 'https://api.github.com/users/jacksonbates/repos';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({
          portfolio: data
        }));
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.portfolio.map((x) => {
          return (
            <li>{x.name}</li>
          )},)}
        </ul>
      </div>
        )}}
    