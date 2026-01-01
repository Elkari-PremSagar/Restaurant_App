/* eslint-disable camelcase */
import {Component} from 'react'
import DishItem from '../DishItem'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {
    restaurantData: [],
    activeCategoryId: '',
  }

  componentDidMount() {
    this.getRestaurantData()
  }

  getRestaurantData = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()

    this.setState({
      restaurantData: data[0],
      activeCategoryId: data[0].table_menu_list[0].menu_category_id,
    })
  }

  changeCategory = id => {
    this.setState({activeCategoryId: id})
  }

  renderCategories = tableMenuList => {
    const {activeCategoryId} = this.state

    return (
      <ul className="tabs-container">
        {tableMenuList.map(each => (
          <li key={each.menu_category_id}>
            <button
              type="button"
              className={
                activeCategoryId === each.menu_category_id
                  ? 'tab-btn active'
                  : 'tab-btn'
              }
              onClick={() => this.changeCategory(each.menu_category_id)}
            >
              {each.menu_category}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  renderDishes = tableMenuList => {
    const {activeCategoryId} = this.state

    const activeCategory = tableMenuList.find(
      each => each.menu_category_id === activeCategoryId,
    )

    return (
      <ul className="dishes-list">
        {activeCategory.category_dishes.map(eachDish => (
          <DishItem key={eachDish.dish_id} dishDetails={eachDish} />
        ))}
      </ul>
    )
  }

  render() {
    const {restaurantData} = this.state

    if (
      restaurantData.length === 0 ||
      restaurantData.table_menu_list === undefined
    ) {
      return null
    }

    const {table_menu_list, restaurant_name} = restaurantData

    return (
      <>
        <Header restaurant_name={restaurant_name} />
        <div className="home-container">
          {this.renderCategories(table_menu_list)}
          {this.renderDishes(table_menu_list)}
        </div>
      </>
    )
  }
}

export default Home
