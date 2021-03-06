import React from 'react';
import PropTypes from 'prop-types';

const labelStyle = { width: '200px', float: 'left', margin: '0 20px 20px' };
const spanStyle = { display: 'block', margin: '0 0 3px', font: 'lato', 'fontSize': '14px' };
const inputStyle = { width: '200px', padding: '5px', height: '30px' };

const ChartOptions = ({ handleViewChange }) => (
  <div
    className="ui one column stackable center aligned page grid"
    style={{ marginTop: '5px', marginBottom: '25px' }}
  >
    <label style={labelStyle}>
      <span style={spanStyle}>View Mode:</span>
      <select
        className="ui fluid search dropdown"
        style={inputStyle}
        onChange={handleViewChange}
      >
        <option className="item" value="0">Top Keywords</option>
        <option className="item" value="1">By Emotion</option>
      </select>
    </label>
  </div>
);

ChartOptions.propTypes = {
  handleViewChange: PropTypes.func.isRequired
};

export default ChartOptions;
