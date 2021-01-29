import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ShippingPolicies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionExpand: 'policyContentHide',
      shader: 'policyShaderOn',
      expandButtonContent: 'More',
    };
    this.getReturnTypes = this.getReturnTypes.bind(this);
    this.getExchanges = this.getExchanges.bind(this);
    this.collapseOnClick = this.collapseOnClick.bind(this);
  }

  getReturnTypes() {
    const { shopPolicy } = this.props;
    const { noReturnTypes } = shopPolicy;
    let i = 0;
    function mapFunc(value) {
      i += 1;
      return (
        <li key={i}>
          {value}
        </li>
      );
    }
    const typesView = noReturnTypes.map(mapFunc);
    return (
      <ul>
        {typesView}
      </ul>
    );
  }

  getExchanges() {
    const { shopPolicy } = this.props;
    const { returns } = shopPolicy;
    const { shader, descriptionExpand, expandButtonContent } = this.state;
    if (returns) {
      return (
        <div className="policyContainer">
          <div className={shader}>
            <div className={descriptionExpand}>
              <span className="title">Returns & Exchanges</span>
              <br />
              <br />
              <span className="sub-title">I gladly accept exchanges and cancellations</span>
              <br />
              <span className="small-grey-text">
                Contact me within: 14 days of delivery
                <br />
                Ship items back within: 30 days of delivery
                <br />
                Request a cancellation within: 1 hour of purchase
              </span>
              <br />
              <br />
              <span className="sub-title">I don&apos;t accept returns</span>
              <br />
              <span className="small-grey-text">
                But please contact me if you have any problems with your order.
              </span>
              <br />
              <br />
              <span className="sub-title">The following items can&apos;t be returned or exchanged</span>
              <br />
              <span className="small-grey-text">
                Because of the nature of these items, unless they arrive damaged or defective,
                I can&apos;t accept returns for:
                <br />
                {this.getReturnTypes()}
              </span>
              <br />
              <span className="sub-title">Conditions of return</span>
              <br />
              <span className="small-grey-text">
                Buyers are responsible for return shipping costs. If the item is not returned
                in its original condition, the buyer is responsible for any loss in value.
              </span>
              <br />
              <br />
            </div>
          </div>
          <button type="button" className="descriptionButton" onClick={this.collapseOnClick}>{expandButtonContent}</button>
        </div>
      );
    }
    return <span />;
  }

  collapseOnClick() {
    let { descriptionExpand, shader, expandButtonContent } = this.state;
    if (descriptionExpand === 'policyContentExpand') {
      descriptionExpand = 'policyContentHide';
      shader = 'policyShaderOn';
      expandButtonContent = 'More';
    } else {
      shader = 'policyShaderOff';
      descriptionExpand = 'policyContentExpand';
      expandButtonContent = 'Less';
    }
    this.setState({ descriptionExpand, shader, expandButtonContent });
  }

  render() {
    const {
      shopPolicy,
      name,
      showModal,
      modalClass,
    } = this.props;
    const { lastUpdated } = shopPolicy;
    return (
      <div id="policy-modal">
        <button type="button" id="policy-button" onClick={showModal}>
          View shop policies
        </button>
        <div className={modalClass}>
          <div id="modal-close-button">
            <button type="button" className="close-button" onClick={showModal}>
              <span className="etsy-icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 0 1.8 1.8" aria-hidden="true" focusable="false">
                  <path
                    d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="modal-container">
            <div className="modal-content">
              <span className="main-title">
                Shop policies for
                <span> </span>
                {name}
              </span>
              <br />
              <span className="small-grey-text">
                Last updated on
                <span> </span>
                {moment(lastUpdated).format('MMM D, YYYY')}
              </span>
              <br />
              <br />
              {this.getExchanges()}
              <span className="title">Payments</span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" aria-hidden="true" focusable="false">
                  <path d="M17,10V7A5,5,0,0,0,7,7v3H5v8a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V10H17Zm-4,7a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0v4Zm2-7H9V7a2.935,2.935,0,0,1,3-3,2.935,2.935,0,0,1,3,3v3Z" />
                </svg>
                <span className="payment-content">
                  Secure options
                  <img src="https://i.ibb.co/mzGDryy/Screen-Shot-2021-01-21-at-3-49-08-PM.png" alt="Screen-Shot-2021-01-21-at-3-49-08-PM" border="0" />
                  Accepts Etsy Gift Cards and Etsy Credits
                  <br />
                  Etsy keeps your payment information secure.
                  <span> </span>
                  Etsy shops never receive your credit card information.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShippingPolicies.propTypes = {
  shopPolicy: PropTypes.shape({
    returns: PropTypes.bool,
    noReturnTypes: PropTypes.arrayOf(PropTypes.string),
    lastUpdated: PropTypes.string,
  }),
  name: PropTypes.string,
  showModal: PropTypes.func,
  modalClass: PropTypes.string,
};

ShippingPolicies.defaultProps = {
  shopPolicy: {
    returns: false,
    noReturnTypes: [],
    lastUpdated: '',
  },
  name: '',
  showModal: () => {},
  modalClass: '',
};

export default ShippingPolicies;
