import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ru from "date-fns/locale/ru";

const Time = ({ date }) => (
  <Fragment>
    {formatDistanceToNow(new Date(), { addSuffix: true, locale: ru })}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;