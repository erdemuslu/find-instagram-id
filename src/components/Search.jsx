import React, { useState, useContext } from 'react';
import axios from 'axios';

// load main context
import { MainContext } from '../store/Store';

// load action
import updateData from '../actions/updateData';

function Search() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [found, setFound] = useState(true);

  const { dispatch } = useContext(MainContext);

  const handleForm = (e) => {
    // disable form action
    e.preventDefault();

    setLoading(true);

    axios.get(`https://www.instagram.com/${value}/?__a=1`)
      .then(({ data: { graphql: { user } } }) => {
        console.log(user);
        setLoading(false);
        setFound(true);

        dispatch(updateData(user));
      })
      .catch(() => {
        setFound(false);
        setLoading(false);

        dispatch(updateData(null));
      });
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Type to username"
          onChange={({ target }) => setValue(target.value)}
        />
        <button
          type="button"
          className={`btn ${loading ? ' btn--loading' : ''}`}
          onClick={handleForm}
        >
          Search
        </button>
      </form>
      { !found ? <div className="search-alert">not found</div> : '' }
    </div>
  );
}

export default Search;
