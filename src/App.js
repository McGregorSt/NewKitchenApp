// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductsMgmt from './views/ProductsMgmt'
import LoginPage from './views/LoginPage'

import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Routes } from 'react-router'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Orders} />
      <Route path='/new-order' component={NewOrder} />
      <Route path='/orders' component={Orders} />
      <Route path='/product-state' component={ProductsMgmt} />
    </Switch>
  )
}

export default App
