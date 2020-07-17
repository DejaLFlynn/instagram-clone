import React, { useState, useEffect } from 'react'
import Authentication from './Components/Authentication.js/Authentication'
import Footer from './Components/Footer'
import NavBar from './Components/Authentication.js/NavBar'
import Home from './Components/Home'
import SignIn from './Components/Authentication.js/SignIn'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import firebase from './Firebase'
const theme = createMuiTheme()
function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})
  return firebaseInitialized !== false ?(
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    <Footer/>
  </MuiThemeProvider>
  ) : <div id="loader"><CircularProgress /></div>
}

export default App;
