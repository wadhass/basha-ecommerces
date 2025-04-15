import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModal from '../pages/shop/CartModal';
import avatarImg from '../assets/avatar.png'

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const tax = useSelector((state) => state.cart.tax);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // show user if logged in
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
 

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center px-4">
        {/* Navigation Links */}
        <ul className="nav__links flex gap-6">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav__logo text-xl font-bold">
          <Link to="/">Basha<span className="text-primary">.</span></Link>
        </div>

        {/* Icons */}
        <div className="nav__icons flex gap-4 items-center relative">
          <span>
            <Link to="/search" aria-label="Search">
              <i className="ri-search-line text-xl"></i>
            </Link>
          </span>

          <span className="relative">
            <button
              onClick={handleCartToggle}
              className="hover:text-primary text-xl"
              aria-label="Toggle Cart"
            >
              <i className="ri-shopping-bag-line"></i>
              <sup className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white">
                {selectedItems}
              </sup>
            </button>
          </span>

          <span>
            {
              user && user ? (<>
              <img src={user?.profileImage || avatarImg} alt="" className='size-6
              rounded-full cursor-pointer'/>
              </>) : <Link to="/login" aria-label="Login">
              <i className="ri-user-line text-xl"></i>
            </Link>
            }
            
          </span>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
          selectedItems={selectedItems}
          totalPrice={totalPrice}
          tax={tax}
          grandTotal={grandTotal}
        />
      )}
    </header>
  );
};

export default Navbar;
