import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const Header = () => {
      return (
            <nav className = "header">
                  <Link to="/login">
                        <img className="header__logo" 
                        src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" alt=""/>
                  </Link>

                  <div className="header__search">

                        <input type="text" className="header__searchInput"/>
                        <SearchIcon className="header__searchIcon"/>

                  </div>

                  <div className="header__nav">
                        <Link to="/login" className = "header__link">
                              <div className="header__option">
                                    <span className = "header__optionLineOne">Hello Quazi </span>
                                    <span className = "header__optionLineTwo">Sign In</span>
                              </div>
                        </Link>

                        <Link to="/" className = "header__link">
                              <div className="header__option">
                                    <span className = "header__optionLineOne">Returns </span>
                                    <span className = "header__optionLineTwo"> & Orders</span>
                              </div>
                        </Link>

                        <Link to="/" className = "header__link">
                              <div className="header__option">
                                    <span className = "header__optionLineOne">Your </span>
                                    <span className = "header__optionLineTwo">Prime</span>
                              </div>
                        </Link>

                        <Link to = "/checkout" className = "header__link">
                              <div className="header__optionBasket">
                                    <ShoppingBasket></ShoppingBasket>
                              <span className = "header__optionLineTwo header__basketCount">0</span>
                              </div>
                        </Link>
                              
                  </div>
            </nav>
      );
};

export default Header;