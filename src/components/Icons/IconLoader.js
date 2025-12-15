/* eslint-disable max-len */
import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLoader = ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" width={120} height={120} viewBox="0 0 120 120">
    <title>DM Loader Logo</title>

    <g
      fill="none"
      stroke={theme.brand.primary}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* D */}
      <path d="M20 20 V100 C55 100 55 20 20 20 Z" />

      {/* M */}
      <path d="M70 100 V20 L90 55 L110 20 V100" />
    </g>
  </svg>
);

IconLoader.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(IconLoader);
