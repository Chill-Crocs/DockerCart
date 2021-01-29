import React from 'react';
import axios from 'axios';

import Rating from './Rating';
import Info from './Info';
import Selector from './Selector';
import ExtDetails from './ExtDetails';
import Seller from './Seller';
import BING_KEY from '../../keys/BING_API_KEY';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: {
        name: '',
        sales: -1,
        stars: -1,
      },
      info: {
        tags: [],
        price: -1,
        availability: false,
      },
      selectors: [],
      extDetails: {
        description: '',
      },
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
      seller: {
        name: '',
        role: '',
        imageURL: '',
      },
      userZip: '98105',
      distance: 0,
      price: 'Free',
    };
    this.getData = this.getData.bind(this);
    this.changeZip = this.changeZip.bind(this);
  }

  componentDidMount() {
    const { userZip } = this.state;
    this.getData(userZip);
  }

  getData(zip) {
    const randNum = Math.round(Math.random() * 99);
    axios.get(`/api/item/${randNum}`)
      // axios.get('/api/item/0')
      .then((item) => {
        const {
          rating, info, selectors, shipping, extDetails, shopPolicy, seller,
        } = item.data;
        const { latitude, longitude } = shipping.origin;
        const lat0 = latitude;
        const long0 = longitude;
        axios.get(`http://dev.virtualearth.net/REST/v1/Locations?countryRegion=US&postalCode=${zip}&key=${BING_KEY}`)
          .then((zipData) => {
            const resources = zipData.data.resourceSets[0].resources[0];
            const lat1 = resources.geocodePoints[0].coordinates[0];
            const long1 = resources.geocodePoints[0].coordinates[1];
            axios.get(`https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${lat0},${long0}&destinations=${lat1},${long1}&travelMode=driving&key=An73bmmGtDp0dF5-B3ckWPunbeQJrKgrE73hODpN55d7gHhzsD-NOnuOpYi03YmB`)
              .then((distanceData) => {
                const distanceResults = distanceData.data.resourceSets[0].resources[0];
                const distance = distanceResults.results[0].travelDuration;
                let price;
                if (distance > 1440) {
                  price = '$4.99';
                } else {
                  price = 'Free';
                }
                this.setState({
                  rating,
                  info,
                  selectors,
                  shipping,
                  extDetails,
                  shopPolicy,
                  seller,
                  distance,
                  price,
                });
              });
          });
      });
  }

  changeZip(userZip) {
    this.getData(userZip);
    this.setState({ userZip });
  }

  render() {
    const {
      rating, info, selectors, shipping, extDetails, shopPolicy, seller, distance, price,
    } = this.state;
    extDetails.sales = rating.sales;
    extDetails.availability = info.availability;
    const { name } = rating;
    return (
      <div className="croxy-cart-col">
        <Rating rating={rating} />
        <Info info={info} />
        <Selector selectors={selectors} />
        <ExtDetails
          extDetails={extDetails}
          distance={distance}
          shipping={shipping}
          shopPolicy={shopPolicy}
          name={name}
          price={price}
          changeZip={this.changeZip}
        />
        <Seller seller={seller} shopName={name} />
      </div>
    );
  }
}

export default App;
