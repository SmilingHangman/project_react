import React from 'react'
import './App.css'
import { Container } from './components/shared/Container/Container'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={() => <route.component />}
              exact={route.isExact}
            />
          ))}
          <Redirect from='*' to='/404' />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
