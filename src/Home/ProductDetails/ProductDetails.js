import React from 'react';
import Product from '../Product/Product';
import './ProductDetails.css';

const ProductDetails = () => {
      return (
            <div>
            <div className = "product__details">
                  <Product
                  id="12321341"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                  price={11.96}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"}
                  />

                  <Product
                  id="12321342"
                  title="Aucma Stand Mixer,7.4QT 6-Speed Tilt-Head Food Mixer, Electric Kitchen Mixer with Dough Hook, Wire Whip & Beater"
                  price={239}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/61E9cmSvvVL._AC_SL1000_.jpg"}
                  />

                  
            </div>

            <div className="product__details">
            <Product
                  id="12321343"
                  title="Amazfit Bip S Fitness Smartwatch, 40 Day Battery Life, 10 Sports Modes, Heart Rate, 1.28'' Always-On Display, Water Resistant, Built-in GPS, Carbon Black"
                  price={199.99}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/61CH%2B9X%2BynL._AC_SL1500_.jpg"}
                  />

                  <Product
                  id="12321344"
                  title="Certified Refurbished Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
                  price={98.99}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg"}
                  />
                  <Product
                  id="12321345"
                  title="Clear Back Cover Cases for iPad Pro 12.9 inch 4th Generation 2020 and 3rd Generation 2018, Support Apple Pencil 2nd Gen Charging, Case for iPad Pro 12.9 inch 4th/3rd Gen"
                  price={499}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/51ANNnqRfQL._AC_SL1000_.jpg"}
                  />

                  
            </div>

                  <div className="product__details">
                  <Product
                  id="12321346"
                  title="AOC AGON Curved Gaming Monitor 49 inch (AG493UCX), Dual QHD 5120x1440 @ 120Hz, VA Panel, 1ms 120Hz Adaptive-Sync, 121% sRGB, Height Adjustable, 4-Yr Zero Dead Pixels Manufacturer Guarantee"
                  price={1094}
                  rating={5}
                  image={"https://images-na.ssl-images-amazon.com/images/I/71IXyLtFzpL._AC_SL1500_.jpg"}
                  />
                  </div>

            </div>
      );
};

export default ProductDetails;