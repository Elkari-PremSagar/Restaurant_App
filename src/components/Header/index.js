/* eslint-disable camelcase */
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.reduce((acc, item) => acc + item.quantity, 0)
      const {restaurant_name, history} = props

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <nav className="header">
          {/* Restaurant Name */}
          <Link to="/" className="logo">
            <h1>{restaurant_name}</h1>
          </Link>

          <div className="header-right">
            <p className="orders-text">My Orders</p>

            {/* Cart Button (IMPORTANT FOR TESTS) */}
            <Link to="/cart">
              <button type="button" className="cart-button" data-testid="cart">
                🛒
                <span className="cart-count">{cartCount}</span>
              </button>
            </Link>

            {/* Logout Button */}
            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
