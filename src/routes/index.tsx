import React from "react"
import { Route, Switch } from "react-router-dom"

import { Checkout } from "../components/pages/Checkout/Checkout"
import { Home } from "../components/pages/Home/Home"
import { Summary } from "../components/pages/Summary/Summary"

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/summary" component={Summary} />
  </Switch>
)

export { Routes }
