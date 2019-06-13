import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// load main context
import { MainContext } from '../store/Store';

// load assets
import CopyIcon from '../assets/copy.svg';

function Card() {
  const [copied, setCopied] = useState(false);

  const { state } = useContext(MainContext);

  const handleAlert = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 480);
  };

  if (state === null) {
    return false;
  }

  return (
    <div className="box card">
      <CopyToClipboard
        text={state.id}
        onCopy={handleAlert}
      >
        <button
          type="button"
          className="card__btn"
        >
          <img src={CopyIcon} alt="icon" />
        </button>
      </CopyToClipboard>
      { copied ? <span className="card__copied">Copied</span> : '' }
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
