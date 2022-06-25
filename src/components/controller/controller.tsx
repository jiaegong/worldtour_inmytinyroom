import React, { useState } from 'react';
import './controller.css';
import daymode from '../../asset/daymode.svg';
import nightmode from '../../asset/nightmode.svg';
import play from '../../asset/play.svg';
import pause from '../../asset/pause.svg';
import musicon from '../../asset/musicon.svg';
import musicoff from '../../asset/musicoff.svg';
import bgmon from '../../asset/bgmon.svg';
import bgmoff from '../../asset/bgmoff.svg';

function Controller() {
  const [mode, setMode] = useState(true);
  const [videoPlay, setVideoPlay] = useState(true);
  const [music, setMusic] = useState(true);
  const [bgm, setBgm] = useState(true);

  function modeHandler() {
    setMode(!mode);
  }

  function playHandler(): void {
    setVideoPlay(!videoPlay);
  }

  function musicHandler(): void {
    setMusic(!music);
  }

  function bgmHandler(): void {
    setBgm(!bgm);
  }

  return (
    <div className="controller">
      <button type="button" onClick={modeHandler} className="mode-controller">
        {mode ? (
          <>
            <img src={daymode} alt="daymode" />
            <p>아침 모드</p>
          </>
        ) : (
          <>
            <img src={nightmode} alt="nightmode" />
            <p>저녁 모드</p>
          </>
        )}
      </button>
      <button type="button" onClick={playHandler} className="video-controller">
        {videoPlay ? (
          <>
            <img src={play} alt="play" />
            <p>재생</p>
          </>
        ) : (
          <>
            <img src={pause} alt="pause" />
            <p>일시 정지</p>
          </>
        )}
      </button>
      <button type="button" onClick={musicHandler} className="music-controller">
        {music ? (
          <>
            <img src={musicon} alt="musicon" />
            <p>음악 on</p>
          </>
        ) : (
          <>
            <img src={musicoff} alt="musicoff" />
            <p>음악 off</p>
          </>
        )}
      </button>
      <button type="button" onClick={bgmHandler} className="bgm-controller">
        {bgm ? (
          <>
            <img src={bgmon} alt="bgmon" />
            <p>배경 on</p>
          </>
        ) : (
          <>
            <img src={bgmoff} alt="bgmoff" />
            <p>배경 off</p>
          </>
        )}
      </button>
    </div>
  );
}

export default Controller;
