// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductsMgmt from './views/ProductsMgmt'
import LoginPage from './views/LoginPage'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/orders" />} />
          <Route exact path="/new-order" component={NewOrder} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/product-state" component={ProductsMgmt} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
