import React from "react"

import "./components/core/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import Country from "./desk_client/components/common/country/country"
import { Provider } from 'react-redux';
import { store } from "./desk_client/redux/actions/store"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";
import { Container } from "@material-ui/core";
const App = props => {
  // return <Router />
 return (
  <Provider store={store}>
  <ToastProvider autoDismiss={true}>
    <Container maxWidth="lg">
      <Country />
    </Container>
  </ToastProvider>
   </Provider>

 )
}

export default App
