/* eslint-disable camelcase */
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import Header from '../Header'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const isCartEmpty = cartList.length === 0

      return (
        <>
          <Header />
          <div className="cart-container">
            {isCartEmpty ? (
              <div className="empty-cart-view">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  alt="empty cart"
                  className="empty-cart-image"
                />
                <h1>Your Cart Is Empty</h1>
                <Link to="/">
                  <button type="button">Shop Now</button>
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-header">
                  <h1>My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={removeAllCartItems}
                  >
                    Remove All
                  </button>
                </div>

                <ul className="cart-list">
                  {cartList.map(each => (
                    <CartItem key={each.dish_id} cartItem={each} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
