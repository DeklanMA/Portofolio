/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36, height = 36, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DM Logo"
      {...props}
    >
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
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
