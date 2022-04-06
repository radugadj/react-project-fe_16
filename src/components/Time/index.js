import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ru from "date-fns/locale/ru";

let Time = ({ date }) =>
<Fragment>
    {formatDistanceToNow(new Date(2022, 2, 30, 18, 41, 0), { addSuffix: true, locale: ru })}
</Fragment>



Time.propTypes = {
  date: PropTypes.string
};

export default Time;