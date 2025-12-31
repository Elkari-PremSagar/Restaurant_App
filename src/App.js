import {useEffect, useState} from 'react'
import './App.css'

const dishesApiUrl =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [restaurantName, setRestaurantName] = useState('')
  const [menuList, setMenuList] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState('')
  const [dishQuantities, setDishQuantities] = useState({})

  const fetchData = async () => {
    const response = await fetch(dishesApiUrl)
    const data = await response.json()
    const restaurantData = data[0]

    setRestaurantName(restaurantData.restaurant_name)
    setMenuList(restaurantData.table_menu_list)
    setActiveCategoryId(restaurantData.table_menu_list[0].menu_category_id)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const incrementDish = dishId => {
    setDishQuantities(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1,
    }))
  }

  const decrementDish = dishId => {
    setDishQuantities(prev => {
      const currentQty = prev[dishId] || 0
      if (currentQty === 0) {
        return prev
      }
      return {
        ...prev,
        [dishId]: currentQty - 1,
      }
    })
  }

  const cartCount = Object.values(dishQuantities).reduce(
    (sum, qty) => sum + qty,
    0,
  )

  if (isLoading) {
    return <p>Loading</p>
  }

  const activeMenu = menuList.find(
    each => each.menu_category_id === activeCategoryId,
  )

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <h1>{restaurantName}</h1>
        <p>My Orders</p>
        <span data-testid="cart-count">{cartCount}</span>
      </header>

      {/* TABS */}
      <ul className="tabs">
        {menuList.map(each => (
          <li key={each.menu_category_id}>
            <button
              type="button"
              className={
                activeCategoryId === each.menu_category_id
                  ? 'tab active'
                  : 'tab'
              }
              onClick={() => setActiveCategoryId(each.menu_category_id)}
            >
              {each.menu_category}
            </button>
          </li>
        ))}
      </ul>

      {/* DISHES */}
      <ul className="dishes">
        {activeMenu.category_dishes.map(dish => {
          const quantity = dishQuantities[dish.dish_id] || 0

          return (
            <li key={dish.dish_id} className="dish-item">
              <h1>{dish.dish_name}</h1>
              <p>
                {dish.dish_currency} {dish.dish_price}
              </p>
              <p>{dish.dish_description}</p>
              <p>{dish.dish_calories} calories</p>

              {dish.addonCat.length > 0 && (
                <p className="custom">Customizations available</p>
              )}

              {!dish.dish_Availability && <p>Not available</p>}

              {dish.dish_Availability && (
                <div className="counter">
                  <button
                    type="button"
                    onClick={() => decrementDish(dish.dish_id)}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    type="button"
                    onClick={() => incrementDish(dish.dish_id)}
                  >
                    +
                  </button>
                </div>
              )}

              <img
                src={dish.dish_image}
                alt={dish.dish_name}
                className="dish-image"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
