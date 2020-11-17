import React from 'react';
import { useSelector } from 'react-redux';

import { getTime } from '../util/';

function Controls({ mediaRef }) {
  const [playAudio, setPlayAudio] = React.useState(true);

  const { items, current } = useSelector(({ stations }) => stations);
  const { station, now_playing } = items.filter((item) => item.station.id === current.id)[0];

  const togglePlayMedia = () => {
    setPlayAudio(!playAudio);

    if (playAudio) {
      mediaRef.current.pause();
    } else {
      mediaRef.current.play();
    }
  };

  return (
    <div className="controls">
      <div className="container controls__container">
        <div className="current-item controls__current-item">
          <figure className="current-item__figure">
            <img src={now_playing?.song.art} 
              alt={now_playing.song?.artist
                ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                : now_playing.song?.title} 
            />
          </figure>
          <div className="current-item__contains">
            <span className="current-item__name">{station.name}</span>
            <span className="current-item__description">
              {now_playing.song?.artist
                ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                : now_playing.song?.title}
            </span>
            <span className="timer current-item__timer">
              <span className="timer__count">{getTime(now_playing?.elapsed)}</span>/
              <span className="timer__count">{getTime(now_playing?.duration)}</span>
            </span>
          </div>
        </div>
        <div className="controls__inner">
          <button
            type="button"
            className="controls__button controls__button--volume volume-button button"
          >
            <svg
              width={18}
              height={15}
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.8842 14.8411H7.69785C7.17305 14.8498 6.66319 14.6663 6.26436 14.325L2.68063 11.2789C2.37978 11.0216 2.34449 10.5691 2.60179 10.2683C2.85909 9.96742 3.31155 9.93212 3.6124 10.1894L7.19612 13.2428C7.32596 13.3538 7.49118 13.4148 7.66201 13.4148H7.8842C8.28005 13.4148 8.60095 13.0939 8.60095 12.698V2.6636C8.60095 2.26775 8.28005 1.94685 7.8842 1.94685H7.76952C7.57549 1.94572 7.38929 2.0233 7.25346 2.16187L3.74858 5.7456L3.64823 5.83161C3.2844 6.09188 2.84844 6.23218 2.4011 6.23299H2.15024C1.75439 6.23299 1.43349 6.55389 1.43349 6.94973V10.5335C1.43349 10.9293 1.11259 11.2502 0.716745 11.2502C0.320898 11.2502 0 10.9293 0 10.5335V6.94973C0 5.76219 0.962694 4.7995 2.15024 4.7995H2.40826C2.53934 4.80076 2.66825 4.76605 2.78097 4.69915L6.23569 1.15126C6.64021 0.734696 7.19602 0.499446 7.77669 0.499023H7.8842C9.07174 0.499023 10.0344 1.46172 10.0344 2.64926V12.6837C10.0363 13.2552 9.81064 13.804 9.40719 14.2088C9.00373 14.6136 8.45572 14.8411 7.8842 14.8411ZM12.5431 10.4475C13.5339 9.87697 14.1446 8.82067 14.1446 7.67731C14.1446 6.53395 13.5339 5.47765 12.5431 4.90709C12.3209 4.76585 12.0392 4.75778 11.8093 4.88609C11.5794 5.01439 11.4383 5.25841 11.4419 5.52166C11.4455 5.78491 11.5931 6.02502 11.8264 6.14706C12.3751 6.46115 12.7137 7.04503 12.7137 7.67731C12.7137 8.30959 12.3751 8.89347 11.8264 9.20756C11.5424 9.36848 11.403 9.70096 11.4873 10.0163C11.5716 10.3316 11.8583 10.5502 12.1847 10.5479C12.3109 10.5466 12.4346 10.512 12.5431 10.4475ZM14.7865 12.7411C16.3143 11.5055 17.2021 9.64581 17.2021 7.68091C17.2021 5.71601 16.3143 3.8563 14.7865 2.62069C14.4785 2.39478 14.0474 2.45014 13.8065 2.74655C13.5655 3.04296 13.5994 3.47625 13.8834 3.73164C15.0721 4.69517 15.7625 6.14361 15.7625 7.67374C15.7625 9.20388 15.0721 10.6523 13.8834 11.6158C13.5994 11.8712 13.5655 12.3045 13.8065 12.6009C14.0474 12.8973 14.4785 12.9527 14.7865 12.7268V12.7411Z"
                fill="#85878d"
              />
            </svg>
            <span className="button__text">volume</span>
          </button>
          <div className="controls__item">
            <button
              type="button"
              className={
                playAudio
                  ? 'controls__button controls__button--play play-button button pause'
                  : 'controls__button controls__button--play play-button button'
              }
              onClick={togglePlayMedia}
            />
          </div>
          <button
            type="button"
            className="controls__button controls__button--source source-button button"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.21837 11.433L4.45086 13.2005C3.71809 13.9333 2.53141 13.9333 1.79926 13.2006C1.06695 12.4683 1.06695 11.2815 1.79911 10.5494L5.33475 7.01374C6.06691 6.28155 7.2537 6.28155 7.98586 7.01374C8.22993 7.25781 8.62567 7.25781 8.86975 7.01374C9.11382 6.76967 9.11382 6.37392 8.86975 6.12985C7.64941 4.90952 5.6712 4.90952 4.45086 6.12985L0.91525 9.66546C-0.305083 10.8858 -0.305083 12.864 0.91525 14.0843C2.13544 15.3053 4.1138 15.3053 5.33478 14.0843L7.10229 12.3168C7.34636 12.0728 7.34636 11.677 7.10229 11.4329C6.85822 11.1889 6.46245 11.1889 6.21837 11.433Z"
                fill="#85878d"
              />
              <path
                d="M14.0844 0.915251C12.8641 -0.305084 10.8853 -0.305084 9.66492 0.915251L7.54429 3.03588C7.30022 3.27995 7.30022 3.6757 7.54429 3.91977C7.78836 4.16384 8.1841 4.16384 8.42818 3.91977L10.5488 1.79914C11.281 1.06695 12.4684 1.06695 13.2006 1.79914C13.9327 2.5313 13.9327 3.71809 13.2006 4.45025L9.3118 8.33903C8.57961 9.07122 7.39285 9.07122 6.66069 8.33903C6.41662 8.09496 6.02088 8.09496 5.7768 8.33903C5.53273 8.58311 5.53273 8.97885 5.7768 9.22292C6.99714 10.4433 8.97536 10.4433 10.1957 9.22292L14.0844 5.33417C15.3048 4.11383 15.3048 2.13559 14.0844 0.915251Z"
                fill="#85878d"
              />
            </svg>
            <span className="button__text">source link</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
