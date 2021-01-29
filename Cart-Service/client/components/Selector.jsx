import React from 'react';
import PropTypes from 'prop-types';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { selectors } = this.props;
    let i = -1;
    let j = -1;
    function selectorMap(options) {
      j += 1;
      return (
        <option key={j} className={`optionsBox${(i).toString() + j.toString()} optionsBox}`}>
          {options}
        </option>
      );
    }
    function optionMap(option) {
      i += 1;
      j = -1;
      return (
        <div key={i} className={`optionsName${i} optionsName`}>
          {option.name}
          <br />
          <select className="options">
            {option.options.map(selectorMap)}
          </select>
        </div>
      );
    }
    const selectorView = selectors.map(optionMap);

    return (
      <div className="selectors">
        {selectorView}
      </div>
    );
  }
}

export default Selector;

Selector.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Selector.defaultProps = {
  selectors: [{
    name: '',
    options: [],
  }],
};
