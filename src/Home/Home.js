import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import ProductDetails from './ProductDetails/ProductDetails';

const Home = () => {
      return (
            <div>
                  <Header></Header>
                  <Banner></Banner>
                  <ProductDetails></ProductDetails>

            </div>
      );
};

export default Home;