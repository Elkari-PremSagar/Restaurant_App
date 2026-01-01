/* eslint-disable camelcase */
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => {
  const {cartItem} = props
  const {
    dish_id,
    dish_name,
    dish_image,
    dish_price,
    dish_currency,
    quantity,
  } = cartItem

  return (
    <CartContext.Consumer>
      {value => {
        const {
          incrementCartItemQuantity,
          decrementCartItemQuantity,
          removeCartItem,
        } = value

        const onIncrement = () => {
          incrementCartItemQuantity(dish_id)
        }

        const onDecrement = () => {
          decrementCartItemQuantity(dish_id)
        }

        const onRemove = () => {
          removeCartItem(dish_id)
        }

        return (
          <li className="cart-item">
            <img src={dish_image} alt={dish_name} className="cart-item-image" />

            <div className="cart-item-details">
              <h1 className="cart-item-name">{dish_name}</h1>
              <p className="cart-item-price">
                {dish_currency} {dish_price * quantity}
              </p>

              <div className="cart-counter">
                <button type="button" onClick={onDecrement}>
                  -
                </button>
                <p>{quantity}</p>
                <button type="button" onClick={onIncrement}>
                  +
                </button>
              </div>

              <button type="button" className="remove-btn" onClick={onRemove}>
                Remove
              </button>
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartItem
