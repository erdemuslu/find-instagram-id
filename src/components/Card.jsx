import React, { useContext } from 'react';

// load main context
import { MainContext } from '../store/Store';

function Card() {
  const { state } = useContext(MainContext);

  if (state === null) {
    return false;
  }

  return (
    <div className="box card">
      <div className="card-photo">
        <img src={state.profile_pic_url_hd} alt="p" />
      </div>
      <h1>{ state.full_name }</h1>
      <a role="button" href={`https://www.instagram.com/${state.username}/`} target="_blank" rel="noopener noreferrer">
        <h3>{ state.username }</h3>
      </a>
      <p>{ state.biography === '' ? 'empty' : `@${state.biography}` }</p>
      <div className="card-id">
        { state.id }
      </div>
    </div>
  );
}

export default Card;
