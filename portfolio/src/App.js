import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import frontpage from './components/FrontPage'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={frontpage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
