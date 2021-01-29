import React from 'react';
import PropTypes from 'prop-types';

class ShippingCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      zipcode: '',
      country: '',
      buttonText: 'Get shipping cost',
      costExpand: 'hide',
    };
    this.onExpand = this.onExpand.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onGetCost = this.onGetCost.bind(this);
    this.getSelector = this.getSelector.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
  }

  onExpand() {
    let { expand } = this.state;
    expand = !expand;
    this.setState({ expand });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.onGetCost();
  }

  onGetCost() {
    let {
      costExpand,
      buttonText,
      zipcode,
      country,
    } = this.state;

    const {
      changeZip,
    } = this.props;
    if (costExpand === 'hide') {
      costExpand = 'cost-box';
    }
    country = 'United States';
    buttonText = `Deliver to ${country}, ${zipcode}`;
    changeZip(zipcode);
    zipcode = '';
    this.setState({ costExpand, buttonText, zipcode });
  }

  onZipChange(e) {
    const zipcode = e.target.value;
    this.setState({ zipcode });
  }

  getSelector() {
    const { expand, zipcode } = this.state;
    if (expand) {
      return (
        <div className="selectors area-selector">
          <div className="optionsName">
            Country
            <br />
            <select className="options" defaultValue="209">
              <optgroup label="Choose country">
                <option label="----------" disabled="">----------</option>
                <option value="61">Australia</option>
                <option value="79">Canada</option>
                <option value="103">France</option>
                <option value="91">Germany</option>
                <option value="112">Greece</option>
                <option value="123">Ireland</option>
                <option value="128">Italy</option>
                <option value="131">Japan</option>
                <option value="167">New Zealand</option>
                <option value="174">Poland</option>
                <option value="177">Portugal</option>
                <option value="181">Russia</option>
                <option value="99">Spain</option>
                <option value="164">The Netherlands</option>
                <option value="105">United Kingdom</option>
                <option value="209">United States</option>
                <option label="----------" disabled="">----------</option>
                <option value="55">Afghanistan</option>
                <option value="57">Albania</option>
                <option value="95">Algeria</option>
                <option value="250">American Samoa</option>
                <option value="228">Andorra</option>
                <option value="56">Angola</option>
                <option value="251">Anguilla</option>
                <option value="252">Antigua and Barbuda</option>
                <option value="59">Argentina</option>
                <option value="60">Armenia</option>
                <option value="253">Aruba</option>
                <option value="61">Australia</option>
                <option value="62">Austria</option>
                <option value="63">Azerbaijan</option>
                <option value="229">Bahamas</option>
                <option value="232">Bahrain</option>
                <option value="68">Bangladesh</option>
                <option value="237">Barbados</option>
                <option value="71">Belarus</option>
                <option value="65">Belgium</option>
                <option value="72">Belize</option>
                <option value="66">Benin</option>
                <option value="225">Bermuda</option>
                <option value="76">Bhutan</option>
                <option value="73">Bolivia</option>
                <option value="70">Bosnia and Herzegovina</option>
                <option value="77">Botswana</option>
                <option value="254">Bouvet Island</option>
                <option value="74">Brazil</option>
                <option value="255">British Indian Ocean Territory</option>
                <option value="231">British Virgin Islands</option>
                <option value="75">Brunei</option>
                <option value="69">Bulgaria</option>
                <option value="67">Burkina Faso</option>
                <option value="64">Burundi</option>
                <option value="135">Cambodia</option>
                <option value="84">Cameroon</option>
                <option value="79">Canada</option>
                <option value="222">Cape Verde</option>
                <option value="247">Cayman Islands</option>
                <option value="78">Central African Republic</option>
                <option value="196">Chad</option>
                <option value="81">Chile</option>
                <option value="82">China</option>
                <option value="257">Christmas Island</option>
                <option value="258">Cocos (Keeling) Islands</option>
                <option value="86">Colombia</option>
                <option value="259">Comoros</option>
                <option value="85">Congo, Republic of</option>
                <option value="260">Cook Islands</option>
                <option value="87">Costa Rica</option>
                <option value="118">Croatia</option>
                <option value="338">Curaçao</option>
                <option value="89">Cyprus</option>
                <option value="90">Czech Republic</option>
                <option value="93">Denmark</option>
                <option value="92">Djibouti</option>
                <option value="261">Dominica</option>
                <option value="94">Dominican Republic</option>
                <option value="96">Ecuador</option>
                <option value="97">Egypt</option>
                <option value="187">El Salvador</option>
                <option value="111">Equatorial Guinea</option>
                <option value="98">Eritrea</option>
                <option value="100">Estonia</option>
                <option value="101">Ethiopia</option>
                <option value="262">Falkland Islands (Malvinas)</option>
                <option value="241">Faroe Islands</option>
                <option value="234">Fiji</option>
                <option value="102">Finland</option>
                <option value="103">France</option>
                <option value="115">French Guiana</option>
                <option value="263">French Polynesia</option>
                <option value="264">French Southern Territories</option>
                <option value="104">Gabon</option>
                <option value="109">Gambia</option>
                <option value="106">Georgia</option>
                <option value="91">Germany</option>
                <option value="107">Ghana</option>
                <option value="226">Gibraltar</option>
                <option value="112">Greece</option>
                <option value="113">Greenland</option>
                <option value="245">Grenada</option>
                <option value="265">Guadeloupe</option>
                <option value="266">Guam</option>
                <option value="114">Guatemala</option>
                <option value="108">Guinea</option>
                <option value="110">Guinea-Bissau</option>
                <option value="116">Guyana</option>
                <option value="119">Haiti</option>
                <option value="267">Heard Island and McDonald Islands</option>
                <option value="268">Holy See (Vatican City State)</option>
                <option value="117">Honduras</option>
                <option value="219">Hong Kong</option>
                <option value="120">Hungary</option>
                <option value="126">Iceland</option>
                <option value="122">India</option>
                <option value="121">Indonesia</option>
                <option value="125">Iraq</option>
                <option value="123">Ireland</option>
                <option value="269">Isle of Man</option>
                <option value="127">Israel</option>
                <option value="128">Italy</option>
                <option value="83">Ivory Coast</option>
                <option value="129">Jamaica</option>
                <option value="131">Japan</option>
                <option value="130">Jordan</option>
                <option value="132">Kazakhstan</option>
                <option value="133">Kenya</option>
                <option value="270">Kiribati</option>
                <option value="271">Kosovo</option>
                <option value="137">Kuwait</option>
                <option value="134">Kyrgyzstan</option>
                <option value="138">Laos</option>
                <option value="146">Latvia</option>
                <option value="139">Lebanon</option>
                <option value="143">Lesotho</option>
                <option value="140">Liberia</option>
                <option value="141">Libya</option>
                <option value="272">Liechtenstein</option>
                <option value="144">Lithuania</option>
                <option value="145">Luxembourg</option>
                <option value="273">Macao</option>
                <option value="151">Macedonia</option>
                <option value="149">Madagascar</option>
                <option value="158">Malawi</option>
                <option value="159">Malaysia</option>
                <option value="238">Maldives</option>
                <option value="152">Mali</option>
                <option value="227">Malta</option>
                <option value="274">Marshall Islands</option>
                <option value="275">Martinique</option>
                <option value="157">Mauritania</option>
                <option value="239">Mauritius</option>
                <option value="276">Mayotte</option>
                <option value="150">Mexico</option>
                <option value="277">Micronesia, Federated States of</option>
                <option value="148">Moldova</option>
                <option value="278">Monaco</option>
                <option value="154">Mongolia</option>
                <option value="155">Montenegro</option>
                <option value="279">Montserrat</option>
                <option value="147">Morocco</option>
                <option value="156">Mozambique</option>
                <option value="153">Myanmar (Burma)</option>
                <option value="160">Namibia</option>
                <option value="280">Nauru</option>
                <option value="166">Nepal</option>
                <option value="243">Netherlands Antilles</option>
                <option value="233">New Caledonia</option>
                <option value="167">New Zealand</option>
                <option value="163">Nicaragua</option>
                <option value="161">Niger</option>
                <option value="162">Nigeria</option>
                <option value="281">Niue</option>
                <option value="282">Norfolk Island</option>
                <option value="283">Northern Mariana Islands</option>
                <option value="165">Norway</option>
                <option value="168">Oman</option>
                <option value="169">Pakistan</option>
                <option value="284">Palau</option>
                <option value="285">Palestinian Territory, Occupied</option>
                <option value="170">Panama</option>
                <option value="173">Papua New Guinea</option>
                <option value="178">Paraguay</option>
                <option value="171">Peru</option>
                <option value="172">Philippines</option>
                <option value="174">Poland</option>
                <option value="177">Portugal</option>
                <option value="175">Puerto Rico</option>
                <option value="179">Qatar</option>
                <option value="304">Reunion</option>
                <option value="180">Romania</option>
                <option value="181">Russia</option>
                <option value="182">Rwanda</option>
                <option value="286">Saint Helena</option>
                <option value="287">Saint Kitts and Nevis</option>
                <option value="244">Saint Lucia</option>
                <option value="288">Saint Martin (French part)</option>
                <option value="289">Saint Pierre and Miquelon</option>
                <option value="249">Saint Vincent and the Grenadines</option>
                <option value="290">Samoa</option>
                <option value="291">San Marino</option>
                <option value="292">Sao Tome and Principe</option>
                <option value="183">Saudi Arabia</option>
                <option value="185">Senegal</option>
                <option value="189">Serbia</option>
                <option value="293">Seychelles</option>
                <option value="186">Sierra Leone</option>
                <option value="220">Singapore</option>
                <option value="337">Sint Maarten (Dutch part)</option>
                <option value="191">Slovakia</option>
                <option value="192">Slovenia</option>
                <option value="242">Solomon Islands</option>
                <option value="188">Somalia</option>
                <option value="215">South Africa</option>
                <option value="294">South Georgia and the South Sandwich Islands</option>
                <option value="136">South Korea</option>
                <option value="339">South Sudan</option>
                <option value="99">Spain</option>
                <option value="142">Sri Lanka</option>
                <option value="184">Sudan</option>
                <option value="190">Suriname</option>
                <option value="295">Svalbard and Jan Mayen</option>
                <option value="194">Swaziland</option>
                <option value="193">Sweden</option>
                <option value="80">Switzerland</option>
                <option value="204">Taiwan</option>
                <option value="199">Tajikistan</option>
                <option value="205">Tanzania</option>
                <option value="198">Thailand</option>
                <option value="164">The Netherlands</option>
                <option value="296">Timor-Leste</option>
                <option value="197">Togo</option>
                <option value="297">Tokelau</option>
                <option value="298">Tonga</option>
                <option value="201">Trinidad</option>
                <option value="202">Tunisia</option>
                <option value="203">Turkey</option>
                <option value="200">Turkmenistan</option>
                <option value="299">Turks and Caicos Islands</option>
                <option value="300">Tuvalu</option>
                <option value="206">Uganda</option>
                <option value="207">Ukraine</option>
                <option value="58">United Arab Emirates</option>
                <option value="105">United Kingdom</option>
                <option value="209">United States</option>
                <option value="302">United States Minor Outlying Islands</option>
                <option value="208">Uruguay</option>
                <option value="248">U.S. Virgin Islands</option>
                <option value="210">Uzbekistan</option>
                <option value="221">Vanuatu</option>
                <option value="211">Venezuela</option>
                <option value="212">Vietnam</option>
                <option value="224">Wallis and Futuna</option>
                <option value="213">Western Sahara</option>
                <option value="214">Yemen</option>
                <option value="216">Zaire (Democratic Republic of Congo)</option>
                <option value="217">Zambia</option>
                <option value="218">Zimbabwe</option>
              </optgroup>
            </select>
            <form id="cost-form" onSubmit={this.onFormSubmit}>
              <label htmlFor="zipcode-estimator">
                Zip or postal code
                <br />
                <input type="text" id="zipcode-estimator" value={zipcode} onChange={this.onZipChange} />
              </label>
            </form>
          </div>
        </div>
      );
    }
    return <span />;
  }

  render() {
    const {
      buttonText, costExpand,
    } = this.state;

    const {
      price,
    } = this.props;

    return (
      <div>
        <div className={costExpand}>
          <div>
            <div className="cost-info-text">
              Cost to ship
            </div>
            <div className="cost-info-price">
              {price}
            </div>
          </div>
        </div>
        <button type="button" className="shippingCostCollapsible" onClick={this.onExpand}>
          {buttonText}
        </button>
        {this.getSelector()}
        <span id="shippingInfo">
          Ships from United States
        </span>
      </div>
    );
  }
}

ShippingCost.propTypes = {
  changeZip: PropTypes.func,
  price: PropTypes.string,
};

ShippingCost.defaultProps = {
  changeZip: () => {},
  price: '',
};

export default ShippingCost;
