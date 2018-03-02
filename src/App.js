//// TODO: propTypes
// TODO: Fetch Status
// TODO: validation
import React, { Component } from "react";
import Song from "./Song";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        results: []
      },
      keyword: null
    };
  }

  render() {
    const songs = this.state.payload.results;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <div className="App">{this.renderSongs(songs)}</div>
      </div>
    );
  }

  renderSongs = songs => {
    return songs.map((song, i) => {
      return <Song key={i} data={song} />;
    });
  };

  handleSubmit = keyword => {
    fetch(`https://itunes.apple.com/search?term=${encodeURI(keyword)}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ payload: data });
      });
  };
}

export default App;
