/* eslint-disable camelcase */
import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

class DishItem extends Component {
  state = {
    quantity: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0,
    }))
  }

  render() {
    const {dishDetails} = this.props
    const {
      dish_name,
      dish_price,
      dish_image,
      dish_description,
      dish_currency,
      dish_calories,
      dish_Availability,
      addonCat,
    } = dishDetails

    const {quantity} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem} = value

          const onAddToCart = () => {
            addCartItem({...dishDetails, quantity})
          }

          return (
            <li className="dish-item">
              <div className="dish-info">
                <h1 className="dish-name">{dish_name}</h1>
                <p className="dish-price">
                  {dish_currency} {dish_price}
                </p>
                <p className="dish-description">{dish_description}</p>
                <p className="dish-calories">{dish_calories} calories</p>

                {addonCat.length > 0 && (
                  <p className="custom">Customizations available</p>
                )}

                {!dish_Availability && (
                  <p className="not-available">Not available</p>
                )}

                {dish_Availability && (
                  <>
                    <div className="counter">
                      <button type="button" onClick={this.onDecrement}>
                        -
                      </button>
                      <p>{quantity}</p>
                      <button type="button" onClick={this.onIncrement}>
                        +
                      </button>
                    </div>

                    {quantity > 0 && (
                      <button
                        type="button"
                        className="add-cart-btn"
                        onClick={onAddToCart}
                      >
                        ADD TO CART
                      </button>
                    )}
                  </>
                )}
              </div>

              <img src={dish_image} alt={dish_name} className="dish-image" />
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default DishItem
