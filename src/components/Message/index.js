import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { formatDistanceToNow } from 'date-fns'
import ruLocale from 'date-fns/locale/ru';

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe }) => (
  <div className={classNames("message", { "massege--isme": isMe })}>
    <div className="message__content">
      <div className="message__avatar">
        <img className="avatar" src={avatar} alt={`Avatar${user.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__data">
          {formatDistanceToNow(new Date(), { addSuffix: true, locale: ruLocale})}
          </span>
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
//   data: PropTypes.string,
//   user: PropTypes.object,
// };

export default Message;
