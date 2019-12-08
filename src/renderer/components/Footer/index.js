import React from 'react';
import { Icon } from "@blueprintjs/core";
import './index.css';
import constants from '../../../constants';

const Footer = () => {
  return (
    <div className="footer">
      <Icon icon="tick-circle" intent="success" /> Up to date
    </div>
  );
};

Footer.propTypes = {
  // position: PropTypes.string.isRequired,
  // height: PropTypes.number.isRequired,
};

export default Footer;
