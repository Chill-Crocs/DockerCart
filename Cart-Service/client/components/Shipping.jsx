import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ShippingCost from './ShippingCost';
import ShippingPolicies from './ShippingPolicies';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClass: 'hide',
      toolTip0: 'hide',
      toolTip1: 'hide',
      toolTip2: 'hide',
      toolTip3: 'hide',
      accessFocus: 'off',
      accessBlur: 'off',
    };
    this.showModal = this.showModal.bind(this);
    this.toolTipHoverOver = this.toolTipHoverOver.bind(this);
    this.toolTipHoverOut = this.toolTipHoverOut.bind(this);
    this.onFocusFunc = this.onFocusFunc.bind(this);
    this.onBlurFunc = this.onBlurFunc.bind(this);
  }

  onBlurFunc() {
    let { accessBlur } = this.state;
    accessBlur = 'on';
    this.setState({ accessBlur });
  }

  onFocusFunc() {
    let { accessFocus } = this.state;
    accessFocus = 'on';
    this.setState({ accessFocus });
  }

  showModal() {
    let { modalClass } = this.state;
    if (modalClass === 'hide') {
      modalClass = 'show';
    } else {
      modalClass = 'hide';
    }
    this.setState({ modalClass });
  }

  toolTipHoverOver(e) {
    const whichTip = e.target.className;
    if (whichTip === 'dotted-shipping arrival') {
      const toolTip0 = 'tooltip-show-0';
      this.setState({ toolTip0 });
    } else if (whichTip.includes('grid-3')) {
      const toolTip1 = 'tooltip-show-1';
      this.setState({ toolTip1 });
    } else if (whichTip.includes('grid-1')) {
      const toolTip2 = 'tooltip-show-2';
      this.setState({ toolTip2 });
    } else if (whichTip.includes('grid-2')) {
      const toolTip3 = 'tooltip-show-3';
      this.setState({ toolTip3 });
    }
  }

  toolTipHoverOut(e) {
    const whichTip = e.target.className;
    if (whichTip === 'dotted-shipping arrival') {
      const toolTip0 = 'hide';
      this.setState({ toolTip0 });
    } else if (whichTip.includes('grid-3')) {
      const toolTip1 = 'hide';
      this.setState({ toolTip1 });
    } else if (whichTip.includes('grid-1')) {
      const toolTip2 = 'hide';
      this.setState({ toolTip2 });
    } else if (whichTip.includes('grid-2')) {
      const toolTip3 = 'hide';
      this.setState({ toolTip3 });
    }
  }

  render() {
    const {
      distance,
      shopPolicy,
      name,
      price,
      changeZip,
    } = this.props;
    const {
      modalClass,
      toolTip0,
      toolTip1,
      toolTip2,
      toolTip3,
    } = this.state;
    function getShippedDate() {
      const days = Math.round((distance / 1440) + 3);
      return `${moment().add(days, 'd').format('MMM D')} - ${moment().add(9, 'd').format('D')}`;
    }
    const orderPlaced = moment().format('MMM D');
    const orderShipped = `${moment().add(1, 'd').format('MMM D')} - ${moment().add(2, 'd').format('D')}`;
    const shippedDate = getShippedDate();
    return (
      <div id="shipping-collapse">
        <div>
          <div
            className="dotted-shipping arrival"
            onMouseOver={this.toolTipHoverOver}
            onFocus={this.onFocusFunc}
            onMouseOut={this.toolTipHoverOut}
            onBlur={this.onBlurFunc}
          >
            Estimated arrival
          </div>
          <span className={toolTip0}>
            <span className="tooltip-container">
              <span className="tooltip-content">
                This is an estimate based on the purchase date, the seller&apos;s location,
                <span> </span>
                and processing time, and the shipping destination and carrier.
                Other factors—such as shipping carrier delays or placing an order on
                <span> </span>
                weekend/holiday—may push the arrival of your item beyond this date.
              </span>
            </span>
          </span>
          <div id="shippedDate">
            {shippedDate}
          </div>
        </div>
        <div id="shipped-grid">
          <div
            id="shipped-grid-0-0"
            className="shipped-grid-0-0 grid-3"
            onMouseOver={this.toolTipHoverOver}
            onFocus={this.onFocusFunc}
            onMouseOut={this.toolTipHoverOut}
            onBlur={this.onBlurFunc}
          >
            <div id="grid-0-0-content" className="grid-3">
              <span className="etsy-icon grid-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 10 1.1 1.1" fill="none" aria-hidden="true" focusable="false" className="grid-3">
                  <path d="M10.3126 10.2524L12.1726 6.80245L10.8451 5.48245L7.53761 2.17495C7.43156 2.07363 7.29053 2.01709 7.14386 2.01709C6.99719 2.01709 6.85616 2.07363 6.75011 2.17495C6.65938 2.27881 6.60938 2.41204 6.60938 2.54995C6.60938 2.68786 6.65938 2.82109 6.75011 2.92495L9.84761 6.49495L9.31511 7.02745L4.89011 2.70745C4.83647 2.6537 4.77276 2.61106 4.70262 2.58197C4.63248 2.55288 4.55729 2.53791 4.48136 2.53791C4.40543 2.53791 4.33024 2.55288 4.2601 2.58197C4.18996 2.61106 4.12625 2.6537 4.07261 2.70745V2.70745C3.97079 2.81475 3.91404 2.95703 3.91404 3.10495C3.91404 3.25287 3.97079 3.39515 4.07261 3.50245L8.21261 8.12995L7.68761 8.66245L3.82511 4.82995C3.77306 4.77213 3.70945 4.7259 3.63838 4.69425C3.56732 4.66261 3.4904 4.64625 3.41261 4.64625C3.33482 4.64625 3.2579 4.66261 3.18683 4.69425C3.11577 4.7259 3.05215 4.77213 3.00011 4.82995V4.82995C2.90938 4.93381 2.85938 5.06704 2.85938 5.20495C2.85938 5.34286 2.90938 5.47609 3.00011 5.57995L6.60011 9.74995L6.07511 10.2824L3.00011 7.67995C2.89556 7.59068 2.76259 7.54163 2.62511 7.54163C2.48763 7.54163 2.35466 7.59068 2.25011 7.67995V7.67995C2.19636 7.73359 2.15373 7.7973 2.12463 7.86744C2.09554 7.93758 2.08057 8.01277 2.08057 8.0887C2.08057 8.16463 2.09554 8.23982 2.12463 8.30996C2.15373 8.38009 2.19636 8.44381 2.25011 8.49745L5.02511 11.2649L9.27011 15.5099C9.40942 15.6494 9.57485 15.7601 9.75695 15.8355C9.93904 15.911 10.1342 15.9499 10.3314 15.9499C10.5285 15.9499 10.7237 15.911 10.9058 15.8355C11.0879 15.7601 11.2533 15.6494 11.3926 15.5099L15.1426 11.7974L15.5476 11.3924C15.7446 11.195 15.8827 10.9465 15.9463 10.6749C16.0099 10.4033 15.9965 10.1194 15.9076 9.85495L13.5001 3.88495L13.0501 4.03495C12.9466 4.07147 12.8557 4.13672 12.7879 4.22305C12.7202 4.30939 12.6785 4.41324 12.6676 4.52245L12.9676 7.59745L10.8451 10.7849L10.3126 10.2524Z" fill="#222222" />
                </svg>
              </span>
            </div>
            <div className="icon-connector grid-3" />
            <div className="icon-dates grid-3">
              {orderPlaced}
            </div>
            <span className="dotted-shipping grid-3">
              Order placed
            </span>
            <span className={toolTip1}>
              <span className="tooltip-container grid-3">
                <span className="tooltip-content">
                  After you place your order,
                  <span> </span>
                  {name}
                  <span> </span>
                  will take 1 business day to prepare it for shipment.
                </span>
              </span>
            </span>
          </div>
          <div
            id="shipped-grid-0-1"
            className="shipped-grid-0-1 grid-1"
            onMouseOver={this.toolTipHoverOver}
            onFocus={this.onFocusFunc}
            onMouseOut={this.toolTipHoverOut}
            onBlur={this.onBlurFunc}
          >
            <span className="icon-connector-2 grid-1" />
            <div id="grid-0-1-content" className="grid-1">
              <span className="etsy-icon grid-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 13 1.4 1.4" aria-hidden="true" focusable="false" className="grid-1">
                  <path d="M21.868,11.5l-4-7A1,1,0,0,0,17,4H5A1,1,0,0,0,4,5V6H2A1,1,0,1,0,2,8H6a1,1,0,0,1,0,2H3a1,1,0,0,0,0,2H5a1,1,0,1,1,0,2H4v3a1,1,0,0,0,1,1H6.05a2.5,2.5,0,0,0,4.9,0h4.1a2.5,2.5,0,0,0,4.9,0H21a1,1,0,0,0,1-1V12A1,1,0,0,0,21.868,11.5ZM8.5,19A1.5,1.5,0,1,1,10,17.5,1.5,1.5,0,0,1,8.5,19Zm5.488-8V6h1.725l2.845,5h-4.57ZM17.5,19A1.5,1.5,0,1,1,19,17.5,1.5,1.5,0,0,1,17.5,19Z" />
                </svg>
              </span>
            </div>
            <span className="icon-connector-3 grid-1" />
            <div className="icon-dates grid-1">
              {orderShipped}
            </div>
            <span className="dotted-shipping grid-1">
              Order ships
            </span>
            <span className={toolTip2}>
              <span className="tooltip-container grid-1">
                <span className="tooltip-content">
                  {name}
                  <span> </span>
                  puts your order in the mail.
                </span>
              </span>
            </span>
          </div>
          <div
            id="shipped-grid-0-2"
            className="shipped-grid-0-2 grid-2"
            onMouseOver={this.toolTipHoverOver}
            onFocus={this.onFocusFunc}
            onMouseOut={this.toolTipHoverOut}
            onBlur={this.onBlurFunc}
          >
            <span className="icon-connector-4 grid-2" />
            <div id="grid-0-2-content" className="grid-2">
              <span className="etsy-icon grid-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 15 1.4 1.4" aria-hidden="true" focusable="false" className="grid-2">
                  <path d="M21,9.25A1.25,1.25,0,0,0,19.75,8H12.41l4.29-4.29a1,1,0,0,0-1.41-1.41L12,5.59,10.71,4.29A1,1,0,0,0,9.29,5.71L11.59,8H4.25A1.25,1.25,0,0,0,3,9.25V15H4v5.75A1.25,1.25,0,0,0,5.25,22h13.5A1.25,1.25,0,0,0,20,20.75V15h1ZM19,10v3H13V10ZM5,10h6v3H5ZM6,20V15h5v5Zm12,0H13V15h5Z" />
                </svg>
              </span>
            </div>
            <div className="icon-dates grid-2">
              {shippedDate}
            </div>
            <span className="dotted-shipping grid-2">
              Delivered
            </span>
            <span className={toolTip3}>
              <span className="tooltip-container grid-2">
                <span className="tooltip-content">
                  Estimated to arrive at your doorstep
                  <span> </span>
                  {`${moment().add(Math.round((distance / 1440) + 3), 'd').format('MMM D')} - ${moment().add(9, 'd').format('MMM D')}`}
                </span>
              </span>
            </span>
          </div>
        </div>
        <div>
          <ShippingCost price={price} changeZip={changeZip} />
          <ShippingPolicies
            shopPolicy={shopPolicy}
            name={name}
            modalClass={modalClass}
            showModal={this.showModal}
          />
        </div>
      </div>
    );
  }
}

Shipping.propTypes = {
  shipping: PropTypes.shape({
    origin: PropTypes.shape({
      latitude: PropTypes.string,
      longitude: PropTypes.string,
    }),
    exchanges: PropTypes.bool,
  }),
  shopPolicy: PropTypes.shape({
    lastUpdated: PropTypes.string,
    returns: PropTypes.bool,
    noReturnTypes: PropTypes.arrayOf(PropTypes.string),
  }),
  distance: PropTypes.number,
  name: PropTypes.string,
  changeZip: PropTypes.func,
  price: PropTypes.string,
};

Shipping.defaultProps = {
  shipping: {
    origin: {
      latitude: '47.839958190918',
      longitude: '-122.206146240234',
    },
    exchanges: false,
  },
  shopPolicy: {
    lastUpdated: '',
    returns: false,
    noReturnTypes: [],
  },
  distance: -1,
  name: '',
  changeZip: PropTypes.func,
  price: '',
};

export default Shipping;
