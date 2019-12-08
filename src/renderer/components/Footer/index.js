import React from 'react';
import { Icon, Tooltip } from "@blueprintjs/core";
import './index.css';

const Footer = () => {
  return (
    <div className="footer">
      <Tooltip content="Last updated 2 minutes ago" position="right">
        <span><Icon icon="tick-circle" intent="success" style={{ 'margin-right': '10px' }}/> Up to date</span>
      </Tooltip>
    </div>
  );
};

Footer.propTypes = {
  // position: PropTypes.string.isRequired,
  // height: PropTypes.number.isRequired,
};

export default Footer;
