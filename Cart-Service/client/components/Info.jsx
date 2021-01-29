/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { info } = this.props;
    const { tags, price, availability } = info;
    let i = 0;
    const separator = '|';
    function mapFunc(value) {
      i += 1;
      if (i === 1 && tags.length > 1) {
        return (
          <h1 key={i} className="tags">
            {value}
            <span> </span>
            {separator}
          </h1>
        );
      }
      if (i === tags.length) {
        return (
          <p key={i} className="tags">
            <span> </span>
            {value}
          </p>
        );
      }
      return (
        <p key={i} className="tags">
          <span> </span>
          {value}
          <span> </span>
          {separator}
        </p>
      );
    }
    function getAvailable(avail) {
      if (avail) {
        return (
          <div className="check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 -4 18 24" aria-hidden="true" focusable="false"><path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z" /></svg>
            <span> </span>
            In Stock
          </div>
        );
      }
      return (
        <div className="notCheck">
          Only 1 left!
        </div>
      );
    }
    const tagsView = tags.map(mapFunc);
    const priceView = `$${(price / 100).toFixed(2)}`;
    const availabilityView = getAvailable(availability);
    return (
      <div className="cart-info">
        <div className="tagList">
          {tagsView}
        </div>
        <div className="priceStock">
          <div className="price">
            {priceView}
          </div>
          {availabilityView}
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  info: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
  }),
};

Info.defaultProps = {
  info: {
    tags: [],
    price: -1,
    availability: false,
  },
};

export default Info;
