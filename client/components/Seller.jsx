import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Messages from './Messages';

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policyCollap: 'hide',
      messageModal: 'hide',
      message: '',
      messageBox: [],
    };
    this.submitButton = React.createRef();
    this.messagesEnd = React.createRef();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.collapseOnClick = this.collapseOnClick.bind(this);
    this.modalOnClick = this.modalOnClick.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let { message } = this.state;
    const { messageBox } = this.state;
    const time = moment();
    messageBox.push({ message, time });
    message = '';
    this.setState({ message, messageBox });
  }

  onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.submitButton.current.click();
    }
  }

  onChange(e) {
    const message = e.target.value;
    this.setState({ message });
  }

  collapseOnClick() {
    let { policyCollap } = this.state;
    if (policyCollap === 'hide') {
      policyCollap = 'sellerBox';
    } else {
      policyCollap = 'hide';
    }
    this.setState({ policyCollap });
  }

  modalOnClick() {
    let { messageModal } = this.state;
    if (messageModal === 'hide') {
      messageModal = 'messageModal';
    } else {
      messageModal = 'hide';
    }
    this.setState({ messageModal });
  }

  render() {
    const { seller, shopName } = this.props;
    const { name } = seller;
    const {
      policyCollap,
      messageModal,
      message,
      messageBox,
    } = this.state;
    return (
      <div>
        <button type="button" className="sellerCollapsible" onClick={this.collapseOnClick}>
          Meet your sellers
        </button>
        <div className={policyCollap}>
          <div className="sellerContent">
            <img src="https://picsum.photos/200" alt={name} />
            <div className="seller">
              {name}
              <br />
              <span className="seller-info">
                Owner of
                <span> </span>
                <span className="seller-id">
                  {shopName}
                </span>
              </span>
            </div>
          </div>
          <div className="extDetails-buttons">
            <div className="buyButton">
              <button type="button" className="extDetailBuyButton" onClick={this.modalOnClick}>{`Message ${name}`}</button>
            </div>
          </div>
        </div>
        <div className={messageModal}>
          <div className="messageModal-title">
            <img src="https://picsum.photos/200" alt={name} />
            <div className="modalSeller">
              {name}
              <span> </span>
              From
              <span> </span>
              <b>
                {shopName}
              </b>
            </div>
            <div className="title-info">
              Typically responds within a few hours
            </div>
            <div id="wrapper">
              <button type="button" className="message-close-button" onClick={this.modalOnClick}>
                <span className="etsy-message-icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 0 1.8 1.8" aria-hidden="true" focusable="false">
                    <path
                      d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="messageModal-subtitle">
            <Messages messageBox={messageBox} name={name} />
          </div>
          <div className="messageModal-input">
            <div className="input-content">
              <form name="myForm" onSubmit={this.onFormSubmit}>
                <textarea placeholder="Write a message" rows="2" maxLength="10000" onKeyDown={this.onEnterPress} value={message} onChange={this.onChange} />
                <button className="arrow-button" ref={this.submitButton} type="submit">
                  <span className="white-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 1 1.9 1.9" aria-hidden="true" focusable="false">
                      <path
                        d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Seller.propTypes = {
  seller: PropTypes.shape({
    name: PropTypes.string,
  }),
  shopName: PropTypes.string,
};

Seller.defaultProps = {
  seller: {
    name: '',
  },
  shopName: '',
};

export default Seller;
