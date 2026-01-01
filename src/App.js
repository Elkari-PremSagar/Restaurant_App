import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import CartContext from './context/CartContext'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = dish => {
    const {cartList} = this.state
    const itemExists = cartList.find(each => each.dish_id === dish.dish_id)

    if (itemExists) {
      this.incrementCartItemQuantity(dish.dish_id)
    } else {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, {...dish, quantity: 1}],
      }))
    }
  }

  removeCartItem = dishId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(each => each.dish_id !== dishId),
    }))
  }

  incrementCartItemQuantity = dishId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each =>
        each.dish_id === dishId ? {...each, quantity: each.quantity + 1} : each,
      ),
    }))
  }

  decrementCartItemQuantity = dishId => {
    const {cartList} = this.state
    const item = cartList.find(each => each.dish_id === dishId)

    if (item.quantity === 1) {
      this.removeCartItem(dishId)
    } else {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(each =>
          each.dish_id === dishId
            ? {...each, quantity: each.quantity - 1}
            : each,
        ),
      }))
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Redirect to="/not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
