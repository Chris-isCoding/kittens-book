import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ kittens: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value.toLowerCase().trim() });
  };

  render() {
    const { kittens, searchfield } = this.state;
    const filteredKittens = kittens.filter((kitten) => kitten.name.toLowerCase().includes(searchfield));
    return !kittens.length ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>KittenBook</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList kittens={filteredKittens} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
