import './index.css'

const Header = ({restaurantName, cartCount}) => (
  <div className="header">
    <h1 className="restaurant-name">{restaurantName}</h1>
    <div className="cart-container">
      <p className="orders-text">My Orders</p>
      <span className="cart-count">{cartCount}</span>
    </div>
  </div>
)

export default Header
