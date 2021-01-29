import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      rating,
    } = this.props;
    const {
      name, sales,
    } = rating;
    let {
      stars,
    } = rating;
    const starBox = [];
    for (let i = 0; i < 5; i += 1) {
      if (stars < 0.75) {
        if (stars > 0.495 && stars < 0.8) {
          starBox.push(<span className="star" data-rating={i} key={i}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 22 22" aria-hidden="true" focusable="false"><path d="M21.11,10c-.13-.42-.15-.46-.28-.88l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52C3,9.57,3,9.61,2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14ZM12.9,15.79l-.9-.53V6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3Z" /></svg></span>);
          stars = Math.floor(stars);
        } else {
          starBox.push(<span className="star" data-rating={i} key={i}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 22 22" aria-hidden="true" focusable="false"><path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z" /></svg></span>);
          stars = Math.floor(stars);
        }
      } else {
        starBox.push(<span className="star" data-rating={i} key={i}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 22 22" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" /></svg></span>);
        stars -= 1;
      }
    }
    return (
      <div id="ratingContainer">
        <span id="rating">
          <div id="name">
            {name.replace(/\s/g, '').replace(/[,-]/g, '')}
          </div>
          <div id="sales">
            {`${sales} sales`}
          </div>
          <span id="divider"> | </span>
          {starBox}
        </span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sales: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
  }),
};

Rating.defaultProps = {
  rating: {
    name: '',
    sales: -1,
    stars: -1,
  },
};

export default Rating;
