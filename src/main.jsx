/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=ac122731994c8a0edef1603c3016ac82';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      movie: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true });
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ loading: false, movie: res });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { loading, error, movie } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>:(((((</div>;
    }

    return (
      // <Header imgUrl={imbgUrl} />
      <div>{JSON.stringify(movie)}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
