import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import { Time } from "../"
import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={classNames("message", { "massage--isme": isMe })}>
    <div className="message__content">
      {isMe && isReaded ? (
        <img
          className="message__icon-readed"
          src={readedSvg}
          alt="Readed icon"
        />
      ) : (
        <img
          className="message__icon-readed message__icon-readed--no"
          src={noReadedSvg}
          alt="No Readed icon"
        />
      )}
      <div className="message__avatar">
        <img className="avatar" src={avatar} alt={`Avatar${user.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">
          <Time date={date} />
        </span>
      </div>
      <div className="message_attachments">
        {
        attachments &&
        attachments.map((item) => {
          <div className="message_attachments-item">
            <img src={item.url} alt={item.filename} />
          </div>;
        })
        }
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

// Massage.PropTypes = {
//   avatar: PropTypes.string,
//   text: PropTypes.string,
//   Date: PropTypes.string,
//   user: PropTypes.object,
//   attachments: PropTypes.array,
// };

export default Message;
