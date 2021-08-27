import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const [kittens, setKittens] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) throw new Error('Error getting users data');
        const users = await response.json();
        setKittens(users);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
  };

  const filteredKittens = kittens.filter((kitten) =>
    kitten.name.toLowerCase().includes(search)
  );

  return fetchError ? (
    <h2
      style={{
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'whitesmoke',
      }}
    >{`Error: ${fetchError}`}</h2>
  ) : (
    <section className='tc'>
      <h1 className='f1'>KittenBook</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList kittens={filteredKittens} />
        </ErrorBoundary>
      </Scroll>
    </section>
  );
}

export default App;
