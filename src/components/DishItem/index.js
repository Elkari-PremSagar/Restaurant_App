import './index.css'

const DishItem = ({dish, quantity, incrementDish, decrementDish}) => (
  <li className="dish-item">
    <div className="dish-info">
      <h1>{dish.dish_name}</h1>
      <p>
        {dish.dish_currency} {dish.dish_price}
      </p>
      <p>{dish.dish_description}</p>
      <p className="calories">{dish.dish_calories} calories</p>

      {dish.dish_Availability ? (
        <div className="counter">
          <button type="button" onClick={() => decrementDish(dish.dish_id)}>
            -
          </button>
          <p>{quantity}</p>
          <button type="button" onClick={() => incrementDish(dish.dish_id)}>
            +
          </button>
        </div>
      ) : (
        <p className="not-available">Not available</p>
      )}

      {dish.addoncat.length > 0 && (
        <p className="customization">Customizations available</p>
      )}
    </div>

    <img src={dish.dish_image} alt={dish.dish_name} className="dish-image" />
  </li>
)

export default DishItem
