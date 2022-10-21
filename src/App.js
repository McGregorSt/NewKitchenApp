// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductsMgmt from './views/ProductsMgmt'
import LoginPage from './views/LoginPage'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Routes } from 'react-router'

function App() {
  return (
      <Switch>
          <Route exact path="/" ><Orders /></Route>
          <Route exact path="/new-order" ><NewOrder /></Route>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/product-state" component={ProductsMgmt} />
      </Switch>
  )
}

export default App
