import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { convertCurrentTime  } from "../../utils/helpers";

import waveSvg from "../../assets/img/wave.svg";
import playSvg from "../../assets/img/play.svg";
import pauseSvg from "../../assets/img/pause.svg";

import { Time, IconReaded } from "../";

import "./Message.scss";

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0)
  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  useEffect (() => {
    audioElem.current.volume = "0.01";
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      }, 
      false
      );
      audioElem.current.addEventListener(
        "ended",
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        }, 
        false
      );
      audioElem.current.addEventListener(
        "pause",
        ()=> {
          setIsPlaying(false);
        }, 
        false
      );
      audioElem.current.addEventListener("timeupdate", () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100);
      });
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div className="message__audio-progress" style={{ width: progress + '%' }} />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <img src={playSvg} alt="Play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
      </div>
    </div>
  );
};


const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  isReaded,
  attachments,
  isTyping
}) => (
  <div className={classNames("message", {
    "massage--isme": isMe,
    "massage--is-typing": isTyping,
    "massage--is-audio" : audio,
    "massage--image": attachments && attachments.length === 1,
    })}
    >
    <div className="message__content">
    <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className="message__avatar">
        <img className="avatar" src={avatar} alt={`Avatar${user.fullname}`} />
      </div>
      <div className="message__info">
        {(audio || text || isTyping) && (
        <div className="message__bubble">
          {text && <p className="message__text">{text}</p>}
          {isTyping && (<div className="message__typing">
            <span />
            <span />
            <span />
          </div>
          )}
          {audio && <MessageAudio audioSrc={audio} />}
        </div>
        )}
      </div>
      {attachments && (<div className="message_attachments">
        {attachments.map((item) => (
        <div className="message_attachments-item">
            <img src={item.url} alt={item.filename} />
          </div>
          ))}
      </div>
      )}

      {date && (<span className="message__date">
          <Time date={date} />
        </span>)}
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMessage: PropTypes.bool,
  isRecording: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string
};

export default Message;
