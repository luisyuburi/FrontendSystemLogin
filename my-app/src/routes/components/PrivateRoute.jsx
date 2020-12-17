import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
//@end


const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory()

  const auth = localStorage.getItem('token')

  if (auth) {
    return (
      <Route {...rest} render={(props) => <Component {...props} />} />
    )
  } else {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )}
      />
    )
  }
}

export default PrivateRoute